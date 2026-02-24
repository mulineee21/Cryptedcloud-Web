import React, { useState } from 'react';
import { ArrowLeft, Book, Monitor, Smartphone, Apple, Globe, ExternalLink, Copy, Check, Terminal } from 'lucide-react';

interface TutorialProps {
  onBack: () => void;
  onNavigate: (dest: string) => void;
}

export const AccessTutorial: React.FC<TutorialProps> = ({ onBack, onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const ONION_URL = "sf7fefc34xkrqtsptpr52jt5avqkotwnvvhs5nahpx3mewqyteyvbnqd.onion";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ONION_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Section = ({ title, icon, children }: { title: string, icon: React.ReactNode, children: React.ReactNode }) => (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 hover:border-emerald-500/30 transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white font-mono uppercase tracking-tight">{title}</h3>
      </div>
      <div className="space-y-4 text-gray-400 font-sans leading-relaxed">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-20 px-4 animate-fade-in relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <button 
          onClick={onBack} 
          className="text-gray-500 hover:text-white mb-8 font-mono flex items-center gap-2 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          VOLVER AL TERMINAL
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-3 text-emerald-500 font-mono text-sm mb-2 uppercase tracking-widest">
            <Book className="w-4 h-4" />
            Guía de Configuración
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-sans">
            ¿CÓMO ACCEDER A <br />
            <span className="text-emerald-500">CRYPTEDCLOUD?</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl font-sans">
            CryptedCloud no es una web convencional. Es un servicio oculto en la red Tor. 
            Sigue estas instrucciones para establecer una conexión segura.
          </p>
        </div>

        {/* Onion URL Box */}
        <div className="bg-black border-2 border-emerald-500/20 rounded-2xl p-6 mb-12 shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Terminal className="w-32 h-32" />
          </div>
          <label className="block text-[10px] font-mono text-emerald-500 uppercase mb-3 tracking-widest font-bold">Dirección Onion Oficial (V3)</label>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-mono text-xs sm:text-sm text-emerald-200 break-all flex items-center">
              {ONION_URL}
            </div>
            <button 
              onClick={copyToClipboard}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold rounded-xl transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'COPIADO' : 'COPIAR URL'}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Windows */}
          <Section title="Windows" icon={<Monitor className="w-6 h-6" />}>
            <div className="flex flex-col gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="font-bold text-white mb-1">Opción A (Recomendado):</p>
                <p className="text-sm">Descarga e instala el software nativo de CryptedCloud desde nuestra <button onClick={() => onNavigate('downloads')} className="text-emerald-400 hover:underline">sección de descargas</button>. El software incluye el puente Tor automático.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="font-bold text-white mb-1">Opción B (Navegador):</p>
                <p className="text-sm">Descarga el <a href="https://www.torproject.org/download/" target="_blank" className="text-emerald-400 hover:underline">Tor Browser</a> oficial. Una vez instalado, pega nuestra URL .onion en la barra de direcciones.</p>
              </div>
            </div>
          </Section>

          {/* Linux */}
          <Section title="Linux" icon={<Terminal className="w-6 h-6" />}>
             <div className="p-4 bg-white/5 rounded-xl border border-white/5 mb-4">
                <p className="font-bold text-white mb-1">Cliente Nativo:</p>
                <p className="text-sm">Usa el paquete .deb disponible en <button onClick={() => onNavigate('downloads')} className="text-emerald-400 hover:underline">descargas</button>. Ejecuta la aplicación y se conectará automáticamente al nodo Nextcloud.</p>
              </div>
              <p className="text-sm">Alternativamente, instala Tor via terminal (<code className="bg-emerald-500/10 text-emerald-400 px-1">sudo apt install torbrowser-launcher</code>) y utiliza el navegador para acceder a la URL.</p>
          </Section>

          {/* macOS */}
          <Section title="macOS" icon={<Apple className="w-6 h-6" />}>
             <p className="text-sm mb-4">El software para macOS está actualmente en fase de compilación. Para acceder hoy mismo:</p>
             <ol className="list-decimal list-inside space-y-2 text-sm ml-2">
               <li>Instala <a href="https://www.torproject.org/download/" target="_blank" className="text-emerald-400 hover:underline">Tor para macOS</a>.</li>
               <li>Abre el navegador Tor.</li>
               <li>Introduce nuestra dirección .onion.</li>
             </ol>
          </Section>

          {/* Android */}
          <Section title="Android" icon={<Smartphone className="w-6 h-6" />}>
             <div className="flex flex-col gap-4">
              <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
                <p className="font-bold text-emerald-400 mb-1 flex items-center gap-2 uppercase text-xs">
                  <Check className="w-4 h-4" /> MEJOR OPCIÓN (ORBOT)
                </p>
                <p className="text-sm">Descarga <strong>Orbot</strong> desde la Play Store. Activa el modo VPN de Orbot. Ahora puedes entrar en CryptedCloud desde CUALQUIER navegador (Chrome, Firefox, Brave) usando la URL .onion.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-sm">O bien, descarga nuestra <button onClick={() => onNavigate('downloads')} className="text-emerald-400 hover:underline">APK oficial</button> que ya integra la red de forma nativa.</p>
              </div>
            </div>
          </Section>

          {/* iOS */}
          <Section title="iOS" icon={<Smartphone className="w-6 h-6" />}>
             <p className="text-sm">Debido a las restricciones de Apple, el acceso es exclusivamente vía navegador:</p>
             <ol className="list-decimal list-inside space-y-2 text-sm ml-2">
               <li>Instala <strong>Onion Browser</strong> desde la App Store.</li>
               <li>Configura la conexión puente (Bridge) si es necesario.</li>
               <li>Accede a la URL .onion.</li>
             </ol>
          </Section>
        </div>

        {/* Footer info */}
        <div className="mt-16 p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex items-start gap-4">
          <Globe className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
          <div>
            <h4 className="text-white font-bold mb-2 font-mono uppercase tracking-widest text-xs">Soberanía Total</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Recuerda que al usar Tor, la velocidad de descarga puede ser menor debido a las capas de cifrado. 
              Esto es normal y es el precio de la libertad absoluta y el anonimato total.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};