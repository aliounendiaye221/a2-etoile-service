"use client";

import { useState, useTransition, useEffect } from "react";
import { type QuoteRequest, sendInvoiceToClient } from "../../../actions";
import { company } from "@/lib/site-content";
import { Printer, Send, Plus, Trash2, Loader2, CheckCircle2 } from "lucide-react";
import Image from "next/image";

type InvoiceItem = {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
};

export default function InvoiceEditor({ quote }: { quote: QuoteRequest }) {
  const [items, setItems] = useState<InvoiceItem[]>([
    {
      id: "1",
      description: `Service : ${quote.service_type} - ${quote.location}`,
      quantity: 1,
      unitPrice: 0,
    }
  ]);
  
  // Load defined base price from Settings
  useEffect(() => {
    const saved = localStorage.getItem("a2-service-prices");
    if (saved) {
      try {
        const prices = JSON.parse(saved);
        const matchingPrice = prices[quote.service_type];
        if (matchingPrice !== undefined) {
          setItems([{
            id: "1",
            description: `Service : ${quote.service_type} - ${quote.location}`,
            quantity: 1,
            unitPrice: matchingPrice,
          }]);
        }
      } catch (e) {
        // ignored
      }
    }
  }, [quote.service_type, quote.location]);

  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split("T")[0]);
  const [docType, setDocType] = useState<"FACTURE" | "DEVIS">("FACTURE");
  
  const prefix = docType === "FACTURE" ? "FACT" : "DEV";
  const invoiceNumber = `${prefix}-${new Date().getFullYear()}-${quote.id.substring(0,4).toUpperCase()}`;

  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const handleSendInvoice = () => {
    startTransition(async () => {
      try {
        await sendInvoiceToClient(quote.id);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
      } catch {
        alert("Erreur lors de l'envoi.");
      }
    });
  };

  const addItem = () => {
    setItems([...items, { id: Math.random().toString(), description: "", quantity: 1, unitPrice: 0 }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(i => i.id !== id));
  };

  const updateItem = <K extends keyof InvoiceItem>(id: string, field: K, value: InvoiceItem[K]) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const calculateSubTotal = () => {
    return items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  };

  const subTotal = calculateSubTotal();
  const tva = subTotal * 0.18;
  const totalTTC = subTotal + tva;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap justify-end gap-3 print:hidden">
        {success && (
          <div className="flex items-center w-full sm:w-auto gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-xl text-sm font-bold sm:mr-2">
            <CheckCircle2 className="w-5 h-5" /> Envoyé avec succès !
          </div>
        )}
        <select 
          value={docType}
          onChange={(e) => setDocType(e.target.value as "FACTURE" | "DEVIS")}
          className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm shadow-sm outline-none cursor-pointer flex-1 sm:flex-none"
        >
          <option value="FACTURE">Facture</option>
          <option value="DEVIS">Devis</option>
        </select>
        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm shadow-sm hover:bg-gray-50 transition-colors flex-1 sm:flex-none whitespace-nowrap"
        >
          <Printer className="w-4 h-4" /> Imprimer / Export
        </button>
        <button
          onClick={handleSendInvoice}
          disabled={isPending}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-ocean-600 text-white rounded-xl font-bold text-sm shadow-sm hover:bg-ocean-700 active:bg-ocean-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
        >
          {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          {isPending ? "Envoi en cours..." : "Envoyer & Facturer"}
        </button>
      </div>

      {/* Wrapper to allow horizontal scroll on mobile so the A4 dimensions aren't squished */}
      <div className="w-full overflow-x-auto pb-8 print:pb-0 print:overflow-visible">
        {/* A4 Paper Container */}
        <div className="bg-white shadow-xl min-w-[794px] max-w-[210mm] w-full mx-auto min-h-[297mm] pb-24 print:shadow-none print:m-0 print:p-0 print:min-w-0">
          
          {/* Header Ribbon */}
          <div className="h-6 w-full bg-gradient-to-r from-gold-400 to-ocean-500"></div>

          <div className="p-10 sm:p-14">
            <div className="flex justify-between items-start mb-16">
              <div>
                <div className="relative h-20 w-48 mb-4">
                <Image src="/logo.png" alt={company.name} fill className="object-contain object-left" />
              </div>
              <div className="text-sm text-gray-500 space-y-1">
                <p>{company.address}</p>
                <p>{company.phone}</p>
                <p>{company.email}</p>
              </div>
            </div>
            
            <div className="text-right">
              <h1 className="text-4xl font-syne font-bold text-ocean-950 tracking-tighter mb-4 uppercase">{docType}</h1>
              <div className="flex flex-col items-end gap-2 text-sm">
                <div className="flex gap-4">
                  <span className="text-gray-500">N° {docType === "FACTURE" ? "Facture" : "Devis"} :</span>
                  <span className="font-bold text-ocean-900">{invoiceNumber}</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-gray-500">Date :</span>
                  <input 
                    type="date" 
                    value={invoiceDate} 
                    onChange={e => setInvoiceDate(e.target.value)}
                    className="font-bold text-ocean-900 border-b border-transparent hover:border-gray-200 focus:border-ocean-500 outline-none text-right print:appearance-none print:border-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xs font-bold text-ocean-400 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">Facturé à</h3>
              <div className="space-y-1">
                <p className="font-bold text-ocean-950 text-lg">{quote.full_name}</p>
                <p className="text-sm text-gray-600">{quote.location}</p>
                <p className="text-sm text-gray-600">{quote.phone}</p>
                <p className="text-sm text-gray-600">{quote.email}</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="mb-12">
            <div className="flex bg-ocean-50/50 rounded-t-xl overflow-hidden border-b border-ocean-100 text-xs font-bold text-ocean-900 uppercase tracking-wider p-4">
               <div className="flex-[3]">Désignation</div>
               <div className="flex-1 text-center">Qté</div>
               <div className="flex-1 text-right">Prix Unitaire</div>
               <div className="flex-1 text-right">Total</div>
               <div className="w-8 print:hidden"></div>
            </div>
            
            <div className="divide-y divide-gray-100 border-b border-gray-100">
              {items.map((item) => (
                <div key={item.id} className="flex p-4 items-start group">
                   <div className="flex-[3] pr-4">
                      <textarea 
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                        className="w-full resize-none outline-none overflow-hidden bg-transparent border-b border-transparent focus:border-ocean-200 text-gray-800 print:appearance-none print:border-none text-sm"
                        rows={2}
                        placeholder="Description du service..."
                      />
                   </div>
                   <div className="flex-1">
                      <input 
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                        className="w-full text-center outline-none bg-transparent border-b border-transparent focus:border-ocean-200 text-gray-800 print:appearance-none print:border-none text-sm"
                      />
                   </div>
                   <div className="flex-1 flex justify-end items-center gap-1">
                      <input 
                        type="number"
                        min="0"
                        value={item.unitPrice}
                        onChange={(e) => updateItem(item.id, 'unitPrice', parseInt(e.target.value) || 0)}
                        className="w-full text-right outline-none bg-transparent border-b border-transparent focus:border-ocean-200 text-gray-800 print:appearance-none print:border-none text-sm"
                      />
                   </div>
                   <div className="flex-1 text-right font-medium text-gray-900 text-sm flex justify-end items-center">
                     {(item.quantity * item.unitPrice).toLocaleString()}
                   </div>
                   <div className="w-8 flex justify-end print:hidden">
                     <button 
                       onClick={() => removeItem(item.id)} 
                       className="text-red-300 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-all"
                       tabIndex={-1}
                      >
                       <Trash2 className="w-4 h-4" />
                     </button>
                   </div>
                </div>
              ))}
            </div>

            <div className="pt-4 print:hidden">
               <button 
                 onClick={addItem}
                 className="flex items-center gap-2 text-sm font-bold text-ocean-600 hover:text-ocean-800 bg-ocean-50/50 hover:bg-ocean-50 px-4 py-2 rounded-lg transition-colors"
               >
                 <Plus className="w-4 h-4" /> Ajouter une ligne
               </button>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-full max-w-sm rounded-xl border border-gray-100 overflow-hidden">
               <div className="p-4 bg-gray-50/50 flex justify-between border-b border-gray-100 text-sm">
                 <span className="text-gray-600 font-medium">Total HT</span>
                 <span className="font-bold text-gray-900">{subTotal.toLocaleString()} FCFA</span>
               </div>
               <div className="p-4 bg-gray-50/50 flex justify-between border-b border-gray-100 text-sm">
                 <span className="text-gray-600 font-medium">TVA (18%)</span>
                 <span className="font-bold text-gray-900">{tva.toLocaleString()} FCFA</span>
               </div>
               <div className="p-5 bg-ocean-950 text-white flex justify-between items-center">
                 <span className="font-bold uppercase tracking-widest text-xs text-ocean-200">Total TTC</span>
                 <span className="font-bold text-2xl">{totalTTC.toLocaleString()} FCFA</span>
               </div>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-gray-100 text-xs text-gray-400 text-center space-y-2">
            <p className="font-bold text-gray-500">A2 ETOILE SERVICE SARL</p>
            <p>Le paiement est exigible à réception de cette facture. Les virements et paiements mobiles (Wave, Orange Money) sont acceptés.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
}
