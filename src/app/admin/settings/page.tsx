"use client";

import { useState, useEffect } from "react";
import { Building2, Receipt, Bell, Shield, Save, CheckCircle2, Loader2, Tag } from "lucide-react";
import { company, services } from "@/lib/site-content";

type TabType = "general" | "billing" | "pricing" | "notifications" | "security";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("general");
  const [isSaving, setIsSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  
  // Pricing state
  const [prices, setPrices] = useState<Record<string, number>>({});

  useEffect(() => {
    const saved = localStorage.getItem("a2-service-prices");
    if (saved) {
      try {
        setPrices(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handlePriceChange = (serviceTitle: string, value: string) => {
    setPrices(prev => ({
      ...prev,
      [serviceTitle]: parseInt(value) || 0
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Save prices to local storage
    if (activeTab === "pricing") {
      localStorage.setItem("a2-service-prices", JSON.stringify(prices));
    }

    // Simulation of API save
    setTimeout(() => {
      setIsSaving(false);
      setSuccessMsg("Paramètres sauvegardés avec succès !");
      setTimeout(() => setSuccessMsg(""), 4000);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-syne text-ocean-950 mb-2">Paramètres du portail</h1>
        <p className="text-gray-500">Gérez les informations de votre entreprise, la facturation et vos préférences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Navigation Tabs */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <nav className="flex flex-col space-y-1">
            <button 
              onClick={() => setActiveTab("general")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'general' ? 'bg-ocean-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Building2 className="w-5 h-5" /> Informations
            </button>
            <button 
              onClick={() => setActiveTab("billing")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'billing' ? 'bg-ocean-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Receipt className="w-5 h-5" /> Facturation
            </button>
            <button 
              onClick={() => setActiveTab("pricing")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'pricing' ? 'bg-ocean-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Tag className="w-5 h-5" /> Tarification
            </button>
            <button 
              onClick={() => setActiveTab("notifications")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'notifications' ? 'bg-ocean-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Bell className="w-5 h-5" /> Notifications
            </button>
            <button 
              onClick={() => setActiveTab("security")}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'security' ? 'bg-ocean-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Shield className="w-5 h-5" /> Sécurité
            </button>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
          {successMsg && (
            <div className="absolute top-0 left-0 right-0 bg-green-500 text-white px-4 py-2 flex items-center justify-center gap-2 text-sm font-bold animate-in fade-in slide-in-from-top-4 z-10">
              <CheckCircle2 className="w-4 h-4" /> {successMsg}
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6 pt-4">
            
            {/* GENERAL TAB */}
            {activeTab === "general" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h2 className="text-xl font-bold text-ocean-950 border-b border-gray-100 pb-4">Informations de l&apos;entreprise</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nom de l&apos;entreprise</label>
                    <input type="text" defaultValue={company.name} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Contact Public</label>
                    <input type="email" defaultValue={company.email} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Téléphone Principal</label>
                    <input type="tel" defaultValue={company.phone} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Numéro NINEA (Sénégal)</label>
                    <input type="text" placeholder="Entrez votre NINEA" defaultValue="00123456789" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium text-gray-700">Adresse Complète</label>
                    <textarea rows={2} defaultValue={company.address} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent outline-none transition-all resize-none" />
                  </div>
                </div>
              </div>
            )}

            {/* BILLING TAB */}
            {activeTab === "billing" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h2 className="text-xl font-bold text-ocean-950 border-b border-gray-100 pb-4">Devis & Facturation</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Devise par défaut</label>
                    <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-500 outline-none">
                      <option value="FCFA">FCFA (XOF)</option>
                      <option value="EUR">Euro (€)</option>
                      <option value="USD">Dollar ($)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Taux de TVA (%)</label>
                    <input type="number" defaultValue="18" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Préfixe Factures</label>
                    <input type="text" defaultValue="FACT" className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-ocean-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Préfixe Devis</label>
                    <input type="text" defaultValue="DEV" className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-ocean-500 outline-none" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium text-gray-700">Texte en pied de facture (RIB / Moyen de paiement)</label>
                    <textarea rows={3} defaultValue="Le paiement est exigible à réception de cette facture. Les virements et paiements mobiles (Wave, Orange Money) sont acceptés." className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-500 outline-none resize-none" />
                  </div>
                </div>
              </div>
            )}

            {/* PRICING TAB */}
            {activeTab === "pricing" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div>
                  <h2 className="text-xl font-bold text-ocean-950 border-b border-gray-100 pb-4">Tarification de Base des Services (FCFA)</h2>
                  <p className="text-sm text-gray-500 mt-2">Définissez les montants de base (HT) pour chaque type de service. Ces prix seront automatiquement insérés dans les devis ou factures générés pour faciliter le traitement.</p>
                </div>
                
                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors">
                      <div className="font-medium text-gray-900">{service.title}</div>
                      <div className="flex items-center gap-2">
                         <input 
                           type="number" 
                           min="0"
                           value={prices[service.title] !== undefined ? prices[service.title] : ""}
                           onChange={(e) => handlePriceChange(service.title, e.target.value)}
                           placeholder="0" 
                           className="w-32 px-4 py-2 border border-gray-200 rounded-lg text-right focus:ring-2 focus:ring-ocean-500 outline-none" 
                         />
                         <span className="text-gray-500 text-sm font-bold w-12">FCFA</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-ocean-50 text-ocean-800 rounded-xl text-sm mt-4">
                  <strong>Information :</strong> Les modifications de ces prix de base n'affectent pas les factures et devis déjà générés localement ou validés.
                </div>
              </div>
            )}

            {/* NOTIFICATIONS TAB */}
            {activeTab === "notifications" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h2 className="text-xl font-bold text-ocean-950 border-b border-gray-100 pb-4">Préférences de Notification</h2>
                <div className="space-y-4">
                  <label className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 text-ocean-600 rounded cursor-pointer" />
                    <div>
                      <p className="font-bold text-gray-900">Notifications par E-mail</p>
                      <p className="text-sm text-gray-500">Recevoir un e-mail à chaque nouvelle demande de devis sur le site.</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                    <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 text-ocean-600 rounded cursor-pointer" />
                    <div>
                      <p className="font-bold text-gray-900">Suivi WhatsApp (Bot)</p>
                      <p className="text-sm text-gray-500">Envoyer automatiquement un rappel WhatsApp aux clients n&apos;ayant pas payé leur devis (MVP 4).</p>
                    </div>
                  </label>
                  <div className="space-y-2 mt-4">
                    <label className="text-sm font-medium text-gray-700">Email de réception administrateur</label>
                    <input type="email" defaultValue="admin@a2etoileservice.sn" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-ocean-500 outline-none" />
                  </div>
                </div>
              </div>
            )}

            {/* SECURITY TAB */}
            {activeTab === "security" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <h2 className="text-xl font-bold text-ocean-950 border-b border-gray-100 pb-4">Sécurité & Authentification</h2>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex flex-col gap-2">
                  <p className="font-bold text-yellow-900">Mot de passe de compte Administrateur</p>
                  <p className="text-sm text-yellow-800">Votre compte est actuellement authentifié via Supabase Auth. Les modifications de sécurité se font directement dans le tableau de bord Supabase.</p>
                </div>
                <div className="space-y-4">
                   <button type="button" disabled className="px-4 py-2 bg-gray-100 text-gray-400 font-bold rounded-lg cursor-not-allowed">Changer le mot de passe</button>
                   <p className="text-xs text-gray-400">Action désactivée. Gérez vos mots de passe depuis (app.supabase.com).</p>
                </div>
              </div>
            )}

            {/* ACTION BUTTON */}
            <div className="pt-8 border-t border-gray-100 flex justify-end">
              <button 
                type="submit" 
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-2.5 bg-ocean-950 hover:bg-ocean-900 text-white rounded-xl font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                {isSaving ? "Enregistrement..." : "Sauvegarder les modifications"}
              </button>
            </div>
          </form>

        </main>
      </div>
    </div>
  );
}
