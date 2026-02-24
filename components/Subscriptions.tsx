import React from 'react';
import { Shield, Zap, Crown, Building, Check, Mail } from 'lucide-react';

interface SubscriptionsProps {
  onNavigate: (section: string) => void;
}

export const Subscriptions: React.FC<SubscriptionsProps> = ({ onNavigate }) => {
  const plans = [
    {
      name: "BASIC",
      price: "0€",
      features: ["15GB Almacenamiento", "Acceso vía Tor v3", "Cifrado AES-128", "Sin Logs"],
      icon: <Shield className="w-8 h-8 text-gray-400" />,
      highlight: false,
      target: 'downloads'
    },
    {
      name: "PREMIUM",
      price: "5€/mes",
      features: ["100GB Almacenamiento", "Nodos Dedicados", "Soporte Prioritario"],
      icon: <Zap className="w-8 h-8 text-emerald-500" />,
      highlight: true,
      target: 'checkout-premium'
    },
    {
      name: "ULTIMATE",
      price: "15€/mes",
      features: ["500GB Almacenamiento", "Soporte 24h", "Integración con IA", "Próximamente: Más funciones"],
      icon: <Crown className="w-8 h-8 text-yellow-500" />,
      highlight: false,
      comingSoon: true,
      target: 'checkout-ultimate'
    }
  ];

  return (
    <section id="subscriptions" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase mb-2 block">05. MONETIZACIÓN & ESCALA</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">PLANES DE SUBSCRIPCIÓN</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-sans">
            Elige el nivel de soberanía digital que necesitas. Todos nuestros planes incluyen privacidad absoluta por defecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                plan.highlight 
                  ? 'bg-emerald-500/5 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[10px] font-bold px-3 py-1 rounded-full font-mono uppercase tracking-tighter">
                  MÁS POPULAR
                </span>
              )}
              
              <div className="mb-6">{plan.icon}</div>
              <h3 className="text-xl font-bold text-white font-mono mb-1">{plan.name}</h3>
              <div className="text-3xl font-bold text-white mb-6 font-mono">
                {plan.price}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 font-sans">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className={feature.includes("Próximamente") ? "text-emerald-400/70 italic" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onNavigate(plan.target)}
                className={`w-full py-3 rounded font-mono text-sm font-bold transition-all ${
                plan.highlight 
                  ? 'bg-emerald-500 text-black hover:bg-emerald-400' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                {plan.name === "BASIC" ? "IR A DESCARGAS" : "SELECCIONAR PLAN"}
              </button>
            </div>
          ))}

          {/* Enterprise Plan - Special styling */}
          <div className="p-8 rounded-2xl border border-blue-500/30 bg-blue-500/5 flex flex-col group hover:border-blue-500/60 transition-all shadow-[0_0_40px_rgba(59,130,246,0.05)]">
            <div className="mb-6">
              <Building className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white font-mono mb-1 text-blue-400">ENTERPRISE</h3>
            <div className="text-sm text-gray-500 mb-6 font-mono italic">SOLUCIÓN PERSONALIZADA</div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-sm text-gray-400 font-sans">
                <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                Almacenamiento Flexible
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400 font-sans">
                <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                Soporte 24h Dedicado
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400 font-sans">
                <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                Auditoría de Seguridad Mensual
              </li>
            </ul>

            <a 
              href="mailto:cryptedcloud@proton.me" 
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded font-mono text-sm font-bold flex items-center justify-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4" />
              CONTACTAR VENTAS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};