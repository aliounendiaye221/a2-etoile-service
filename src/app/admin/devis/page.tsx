import { getQuoteRequests } from "../actions";
import QuoteStatusSelect from "./QuoteStatusSelect";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Link from "next/link";

export default async function AdminDevisPage() {
  const quotes = await getQuoteRequests();

  const safeFormatDate = (dateStr: string, fmt: string) => {
    try {
      if (!dateStr) return "-";
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return "-";
      return format(d, fmt, { locale: fr });
    } catch (e) {
      return "-";
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold font-syne text-ocean-950">Gestion des Devis</h1>
        <p className="text-gray-500 mt-1">Gérez, filtrez et traitez toutes les demandes de vos prospects.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 min-w-[900px]">
            <thead className="bg-gray-50 text-gray-900 border-b border-gray-100 text-xs uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Service & Besoin</th>
                <th className="px-6 py-4">Statut</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {quotes.length === 0 ? (
                <tr>
                   <td colSpan={6} className="text-center py-10 text-gray-400">
                     Aucune demande de devis pour le moment.
                   </td>
                </tr>
              ) : (
                quotes.map((quote) => (
                  <tr key={quote.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 align-top">
                      {safeFormatDate(quote.created_at, "dd MMM yyyy")}
                      <div className="text-xs text-gray-400 font-normal">
                         {safeFormatDate(quote.created_at, "HH:mm")}
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top">
                      <div className="font-bold text-gray-900">{quote.full_name}</div>
                      <div className="text-xs text-gray-500 mt-0.5 truncate max-w-[150px]">{quote.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap align-top">
                      <div className="text-gray-900">{quote.phone}</div>
                      <a href={`mailto:${quote.email}`} className="text-xs text-ocean-600 hover:underline">{quote.email}</a>
                    </td>
                    <td className="px-6 py-4 max-w-xs align-top">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-ocean-50 text-ocean-700 mb-1">
                        {quote.service_type}
                      </span>
                      {quote.need_description && (
                        <p className="text-xs text-gray-600 line-clamp-2 mt-1" title={quote.need_description}>
                          <strong>Besoin :</strong> {quote.need_description}
                        </p>
                      )}
                      {quote.message && (
                        <p className="text-xs text-gray-400 line-clamp-2 italic mt-1" title={quote.message}>
                          "{quote.message}"
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap align-top">
                      <QuoteStatusSelect id={quote.id} currentStatus={quote.status} />
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap align-top">
                      <Link 
                        href={`/admin/devis/${quote.id}/facturer`}
                        className="text-ocean-600 hover:text-white font-bold text-sm bg-ocean-50 hover:bg-ocean-600 px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2"
                      >
                        Traiter
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
