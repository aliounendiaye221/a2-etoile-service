import { Users, FileText, CheckCircle, TrendingUp } from "lucide-react";
import { getDashboardMetrics } from "./actions";
import DashboardCharts from "./DashboardCharts";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const metrics = await getDashboardMetrics();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold font-syne text-ocean-950">Vue globale</h1>
        <p className="text-gray-500 mt-1">Pilotez vos performances et vos demandes en temps réel.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-500">
              <span className="p-2 bg-yellow-50 rounded-lg">
                <FileText className="w-5 h-5 text-yellow-600" />
              </span>
              <span className="font-medium text-sm">Devis en attente</span>
            </div>
            {metrics.newQuotes > 0 && (
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            )}
          </div>
          <div className="mt-6">
            <p className="text-4xl font-bold text-ocean-950">{metrics.newQuotes}</p>
            <Link href="/admin/devis" className="text-sm font-medium text-ocean-600 hover:text-ocean-800 mt-3 inline-block">Voir les demandes &rarr;</Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-500">
              <span className="p-2 bg-green-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </span>
              <span className="font-medium text-sm">Devis convertis</span>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-4xl font-bold text-ocean-950">{metrics.convertedQuotes}</p>
            <p className="text-sm text-gray-400 mt-2">Dossiers facturés</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-gray-500">
              <span className="p-2 bg-ocean-50 rounded-lg">
                <Users className="w-5 h-5 text-ocean-600" />
              </span>
              <span className="font-medium text-sm">Total des Leads</span>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-4xl font-bold text-ocean-950">{metrics.totalQuotes}</p>
            <p className="text-sm text-gray-400 mt-2">Leads générés à ce jour</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-8">
           <div>
             <h2 className="text-lg font-bold text-ocean-950 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-ocean-500" />
                Évolution des demandes (30 j)
             </h2>
           </div>
        </div>
        <DashboardCharts data={metrics.series} />
      </div>
    </div>
  );
}
