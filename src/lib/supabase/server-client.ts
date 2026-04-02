import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cachedClient: SupabaseClient | null = null;

function getRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getSupabaseAdminKey(): string {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const secretKey = process.env.SUPABASE_SECRET_KEY?.trim();

  if (serviceRoleKey) {
    return serviceRoleKey;
  }

  if (secretKey) {
    return secretKey;
  }

  throw new Error("Missing required environment variable: SUPABASE_SERVICE_ROLE_KEY or SUPABASE_SECRET_KEY");
}

function assertValidSupabaseUrl(value: string): void {
  if (value.startsWith("sb_")) {
    throw new Error(
      "Invalid NEXT_PUBLIC_SUPABASE_URL. It looks like a key was provided instead of a URL. Expected format: https://<project-ref>.supabase.co"
    );
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(value);
  } catch {
    throw new Error(
      "Invalid NEXT_PUBLIC_SUPABASE_URL. Expected format: https://<project-ref>.supabase.co"
    );
  }

  if (parsedUrl.protocol !== "https:") {
    throw new Error("Invalid NEXT_PUBLIC_SUPABASE_URL. Supabase URL must start with https://");
  }
}

export function createSupabaseAdminClient(): SupabaseClient {
  if (cachedClient) {
    return cachedClient;
  }

  const supabaseUrl = getRequiredEnv("NEXT_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = getSupabaseAdminKey();

  assertValidSupabaseUrl(supabaseUrl);

  cachedClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });

  return cachedClient;
}
