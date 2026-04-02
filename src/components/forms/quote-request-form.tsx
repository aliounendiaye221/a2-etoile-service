"use client";

import { Send } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { PremiumButton } from "@/components/ui/premium-button";
import { cn } from "@/lib/utils";
import { quoteRequestSchema, type QuoteRequestInput } from "@/lib/validators/quote-request";

type FormErrors = Partial<Record<keyof QuoteRequestInput, string>>;

const initialState: QuoteRequestInput = {
  fullName: "",
  phone: "",
  email: "",
  serviceType: "",
  location: "",
  needDescription: "",
  message: ""
};

export function QuoteRequestForm() {
  const [values, setValues] = useState<QuoteRequestInput>(initialState);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const startedAtRef = useRef<number>(Date.now());

  const fieldsetDisabled = useMemo(() => isSubmitting || isSuccess, [isSubmitting, isSuccess]);

  const handleChange = (key: keyof QuoteRequestInput, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setIsSuccess(false);
    setFeedbackMessage("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsed = quoteRequestSchema.safeParse(values);

    if (!parsed.success) {
      const nextErrors: FormErrors = {};

      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof QuoteRequestInput;
        if (!nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }

      setErrors(nextErrors);
      setFeedbackMessage("Merci de corriger les champs en erreur.");
      return;
    }

    try {
      setIsSubmitting(true);
      setFeedbackMessage("");

      const response = await fetch("/api/quote-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...parsed.data,
          website: honeypot,
          startedAt: startedAtRef.current
        })
      });

      const body = (await response.json()) as { success: boolean; message: string };

      if (!response.ok || !body.success) {
        throw new Error(body.message || "Une erreur est survenue.");
      }

      setIsSuccess(true);
      setFeedbackMessage(body.message || "Votre demande a bien ete envoyee.");
      setValues(initialState);
      setHoneypot("");
      startedAtRef.current = Date.now();
      setErrors({});
    } catch (error) {
      setFeedbackMessage(error instanceof Error ? error.message : "Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-ocean-100 bg-white p-6 shadow-xl sm:p-8 relative overflow-hidden">
      {/* Subtle decorative mesh background for the form */}
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />
      <fieldset disabled={fieldsetDisabled} className="space-y-5 relative z-10">
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="website">Site web</label>
          <input
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="fullName"
            label="Nom et prénom"
            value={values.fullName}
            onChange={(value) => handleChange("fullName", value)}
            error={errors.fullName}
            autoComplete="name"
          />
          <Field
            id="phone"
            label="Téléphone"
            value={values.phone}
            onChange={(value) => handleChange("phone", value)}
            error={errors.phone}
            autoComplete="tel"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="email"
            label="E-mail"
            type="email"
            value={values.email}
            onChange={(value) => handleChange("email", value)}
            error={errors.email}
            autoComplete="email"
          />
          <div className="space-y-2">
            <label htmlFor="serviceType" className="text-sm font-semibold text-clean-900">
              Type de service
            </label>
            <select
              id="serviceType"
              value={values.serviceType}
              onChange={(event) => handleChange("serviceType", event.target.value)}
              className={cn(
                "h-12 w-full rounded-xl border bg-slate-50 px-3 text-sm text-clean-900 outline-none transition focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:bg-white focus:border-ocean-300 hover:border-ocean-300 cursor-pointer",
                errors.serviceType ? "border-red-500 focus-visible:ring-red-500" : "border-slate-200"
              )}
            >
              <option value="">Sélectionnez un service</option>
              <option value="Nettoyage Residentiel">Nettoyage Résidentiel</option>
              <option value="Nettoyage Professionnel & Bureaux">Nettoyage Professionnel & Bureaux</option>
              <option value="Pressing & Soin du Linge">Pressing & Soin du Linge</option>
              <option value="Desinfection Specialisee">Désinfection Spécialisée</option>
              <option value="Remise en etat">Remise en état après travaux</option>
              <option value="Entretien de la Vitrerie">Entretien de la Vitrerie</option>
            </select>
            {errors.serviceType ? <p className="text-xs text-red-600">{errors.serviceType}</p> : null}
          </div>
        </div>

        <Field
          id="location"
          label="Localisation"
          value={values.location}
          onChange={(value) => handleChange("location", value)}
          error={errors.location}
          placeholder="Ville, code postal ou quartier"
        />

        <TextAreaField
          id="needDescription"
          label="Description du besoin"
          value={values.needDescription}
          onChange={(value) => handleChange("needDescription", value)}
          error={errors.needDescription}
          placeholder="Précisez la surface, la prestation souhaitée et la fréquence (ex: Nettoyage de bureaux de 100m² 2x/semaine)."
          required
        />

        <TextAreaField
          id="message"
          label="Message complémentaire"
          value={values.message ?? ""}
          onChange={(value) => handleChange("message", value)}
          error={errors.message}
          placeholder="Informations supplémentaires, vos disponibilités pour être recontacté(e) (optionnel)."
        />

        <div className="flex flex-wrap items-center gap-3">
          <PremiumButton type="submit" variant="primary" disabled={isSubmitting || isSuccess}>
            <span className="inline-flex items-center gap-2">
              <Send className="h-4 w-4" />
              {isSubmitting ? "Envoi en cours..." : isSuccess ? "Demande envoyée" : "Envoyer ma demande"}
            </span>
          </PremiumButton>
          <p className={cn("text-sm font-medium", isSuccess ? "text-mint-600" : "text-clean-600")}>{feedbackMessage}</p>
        </div>
      </fieldset>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: "text" | "email";
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
};

function Field({
  id,
  label,
  value,
  error,
  type = "text",
  autoComplete,
  required = true,
  placeholder,
  onChange
}: FieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-semibold text-clean-800">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-12 w-full rounded-xl border bg-white px-3 text-sm text-clean-800 outline-none transition focus-visible:ring-2 focus-visible:ring-ocean-500",
          error ? "border-red-500" : "border-clean-200 focus-within:border-ocean-500"
        )}
      />
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}

type TextAreaFieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  onChange: (value: string) => void;
};

function TextAreaField({ id, label, value, error, required = false, placeholder, onChange }: TextAreaFieldProps) {
  return (
    <div className="space-y-2 relative z-10">
      <label htmlFor={id} className="text-sm font-semibold text-clean-900">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        rows={4}
        className={cn(
          "w-full rounded-xl border bg-slate-50 px-3 py-3 text-sm text-clean-900 outline-none transition focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:bg-white focus:border-ocean-300 hover:border-ocean-300 placeholder:text-slate-400",
          error ? "border-red-500 focus-visible:ring-red-500" : "border-slate-200"
        )}
      />
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}
