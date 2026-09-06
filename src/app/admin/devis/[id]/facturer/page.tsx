import { getQuoteRequestById } from "../../../actions";
import InvoiceEditor from "./InvoiceEditor";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function FacturationPage({ params }: PageProps) {
  const resolvedParams = await params;
  const quote = await getQuoteRequestById(resolvedParams.id);

  if (!quote) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="print:hidden mb-6 flex items-center justify-between">
        <Link href="/admin/devis" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-ocean-600 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Retour aux devis
        </Link>
        <span className="text-sm font-bold text-ocean-900 bg-ocean-50 px-3 py-1 rounded-full">
           Dossier : {quote.id.substring(0, 8).toUpperCase()}
        </span>
      </div>

      <InvoiceEditor quote={quote} />
    </div>
  );
}
