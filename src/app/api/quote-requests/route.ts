import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { createQuoteRequest } from "@/lib/quote-requests/repository";
import { quoteRequestSchema } from "@/lib/validators/quote-request";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 6;
const MIN_FORM_FILL_DELAY_MS = 1200;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function cleanupRateLimitStore(): void {
  const now = Date.now();

  for (const [key, value] of rateLimitStore) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }
}

function getRequestIdentifier(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "anonymous";
  }

  return request.headers.get("x-real-ip") || "anonymous";
}

function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const existing = rateLimitStore.get(identifier);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS
    });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  existing.count += 1;
  return false;
}

type RawQuoteRequestPayload = {
  website?: unknown;
  startedAt?: unknown;
};

export async function POST(request: Request) {
  cleanupRateLimitStore();

  const identifier = getRequestIdentifier(request);
  if (isRateLimited(identifier)) {
    return NextResponse.json(
      {
        success: false,
        message: "Trop de tentatives. Merci de reessayer dans quelques instants."
      },
      { status: 429 }
    );
  }

  try {
    const json = (await request.json()) as RawQuoteRequestPayload;

    if (typeof json.website === "string" && json.website.trim().length > 0) {
      return NextResponse.json(
        {
          success: true,
          message: "Votre demande a bien ete envoyee."
        },
        { status: 202 }
      );
    }

    if (typeof json.startedAt === "number" && Date.now() - json.startedAt < MIN_FORM_FILL_DELAY_MS) {
      return NextResponse.json(
        {
          success: false,
          message: "Le formulaire semble invalide. Merci de verifier les informations saisies."
        },
        { status: 400 }
      );
    }

    const payload = quoteRequestSchema.parse(json);
    const result = await createQuoteRequest(payload);

    return NextResponse.json(
      {
        success: true,
        message: "Votre demande a bien ete envoyee.",
        id: result.id
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Les informations saisies sont invalides.",
          issues: error.issues
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue lors de l'envoi. Merci de reessayer."
      },
      { status: 500 }
    );
  }
}
