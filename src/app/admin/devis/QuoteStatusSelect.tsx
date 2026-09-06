"use client";

import { useTransition } from "react";
import { updateQuoteStatus } from "../actions";
import { Loader2 } from "lucide-react";

export default function QuoteStatusSelect({ id, currentStatus }: { id: string, currentStatus: string }) {
  const [isPending, startTransition] = useTransition();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    startTransition(async () => {
      try {
        await updateQuoteStatus(id, newStatus);
      } catch {
        alert("Erreur lors de la mise à jour du statut");
      }
    });
  };

  const getStatusColor = (status: string) => {
    if (status === "new" || !status) return "bg-red-50 text-red-600 border-red-200";
    if (status === "en-cours") return "bg-yellow-50 text-yellow-600 border-yellow-200";
    if (status === "facturé" || status === "facture") return "bg-green-50 text-green-600 border-green-200";
    if (status === "refusé" || status === "refuse") return "bg-gray-100 text-gray-500 border-gray-300";
    return "bg-gray-50 text-gray-700 border-gray-200";
  };

  return (
    <div className="relative flex items-center gap-2">
      <select
        value={currentStatus || "new"}
        onChange={handleStatusChange}
        disabled={isPending}
        className={`text-xs font-bold px-3 py-1.5 rounded-full border appearance-none pr-8 cursor-pointer outline-none transition-colors ${getStatusColor(currentStatus)}`}
      >
        <option value="new">Nouveau</option>
        <option value="en-cours">En cours de traitement</option>
        <option value="facturé">Facturé</option>
        <option value="refusé">Refusé</option>
      </select>
      {isPending && <Loader2 className="w-4 h-4 text-ocean-600 animate-spin absolute right-2 pointer-events-none" />}
    </div>
  );
}
