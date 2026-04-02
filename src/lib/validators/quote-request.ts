import { z } from "zod";

export const quoteRequestSchema = z.object({
  fullName: z.string().trim().min(2, "Le nom complet est requis."),
  phone: z.string().trim().min(8, "Le numero de telephone est requis."),
  email: z.string().trim().email("Veuillez saisir une adresse e-mail valide."),
  serviceType: z.string().trim().min(2, "Veuillez selectionner un type de service."),
  location: z.string().trim().min(2, "Veuillez indiquer votre localisation."),
  needDescription: z.string().trim().min(10, "Merci de decrire votre besoin avec plus de precision."),
  message: z.string().trim().max(1200, "Le message libre est trop long.").optional().or(z.literal(""))
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
