import { getQuoteRequestById } from "@/app/admin/actions";
import { notFound } from "next/navigation";
import { company } from "@/lib/site-content";
import Image from "next/image";
import { ShieldCheck, Phone, ArrowRight } from "lucide-react";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PaymentPage({ params }: PageProps) {
  const resolvedParams = await params;
  const quote = await getQuoteRequestById(resolvedParams.id);

  if (!quote) {
    notFound();
  }

  // Numéro de facture simulé comme dans l'éditeur
  const invoiceNumber = `FACT-${new Date().getFullYear()}-${quote.id.substring(0,4).toUpperCase()}`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-8">
        <div className="text-center">
          <div className="relative h-16 w-40 mx-auto mb-6">
            <Image 
              src="/logo.png" 
              alt={company.name} 
              fill 
              className="object-contain" 
            />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 font-syne">
            Règlement Sécurisé
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Facture <span className="font-bold">{invoiceNumber}</span>
          </p>
        </div>
        
        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl border border-gray-100 sm:px-10">
          <div className="mb-8">
             <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-4">
                <span className="text-gray-500 font-medium">Facturé à</span>
                <span className="font-bold text-ocean-950 text-right">{quote.full_name}</span>
             </div>
             <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-4">
                <span className="text-gray-500 font-medium">Pour service</span>
                <span className="font-bold text-ocean-950 text-right">{quote.service_type}</span>
             </div>
             
             {/* Note: This is a mockup so amount is hidden or arbitrary */}
             <div className="bg-ocean-50 rounded-xl p-4 flex justify-between items-center mt-6 border border-ocean-100">
               <span className="text-ocean-800 font-bold">Montant à régler</span>
               <span className="text-2xl font-black text-ocean-950">Sur devis</span>
             </div>
          </div>

          <div className="space-y-4 relative">
             <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-full border-t border-gray-200 border-dashed -z-10 hidden sm:block"></div>
             
             <h3 className="text-center bg-white px-4 text-xs font-bold text-gray-500 uppercase tracking-widest inline-block relative left-1/2 -translate-x-1/2 mb-4">
               Choisissez votre méthode
             </h3>

             {/* Wave Mock */}
             <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-[#1ac4f7] hover:shadow-md transition-all group overflow-hidden relative">
               <div className="absolute inset-0 bg-[#1ac4f7]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
               <div className="flex items-center gap-4 relative z-10">
                 <div className="w-10 h-10 bg-[#1ac4f7] rounded-lg flex items-center justify-center font-black text-white text-xl">W</div>
                 <div className="text-left">
                   <p className="font-bold text-gray-900">Payer via Wave</p>
                   <p className="text-xs text-gray-500">Sans frais</p>
                 </div>
               </div>
               <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#1ac4f7] relative z-10" />
             </button>

             {/* Orange Money Mock */}
             <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-[#ff7900] hover:shadow-md transition-all group overflow-hidden relative">
               <div className="absolute inset-0 bg-[#ff7900]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
               <div className="flex items-center gap-4 relative z-10">
                 <div className="w-10 h-10 bg-[#ff7900] rounded-lg flex items-center justify-center border border-[#ff7900]">
                    <span className="font-black text-white text-xs">OM</span>
                 </div>
                 <div className="text-left">
                   <p className="font-bold text-gray-900">Orange Money</p>
                   <p className="text-xs text-gray-500">Immédiat</p>
                 </div>
               </div>
               <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#ff7900] relative z-10" />
             </button>

             {/* PayDunya / Card Mock */}
             <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-ocean-600 hover:shadow-md transition-all group overflow-hidden relative">
               <div className="absolute inset-0 bg-ocean-50 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
               <div className="flex items-center gap-4 relative z-10">
                 <div className="w-10 h-10 bg-ocean-950 rounded-lg flex items-center justify-center font-bold text-white text-[10px] leading-tight text-center">
                   Pay<br/>Dunya
                 </div>
                 <div className="text-left">
                   <p className="font-bold text-gray-900">Carte ou PayDunya</p>
                   <p className="text-xs text-gray-500">Visa, Mastercard, Mobile</p>
                 </div>
               </div>
               <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-ocean-600 relative z-10" />
             </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
             <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
               <ShieldCheck className="w-4 h-4 text-green-500" /> Paiement Sécurisé
             </div>
             <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
               <Phone className="w-4 h-4 text-gray-400" /> Assistance 24/7
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
