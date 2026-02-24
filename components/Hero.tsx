import React from 'react';
import { Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] sm:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-gray-950 py-12 sm:py-0">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-mono mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          V4.0.0 INFRAESTRUCTURA CLOUD SEGURA
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4 sm:mb-6 font-sans leading-tight">
          ALMACENAMIENTO <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600">
            SOBERANO
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          Tus archivos, tus reglas. CryptedCloud es la solución de almacenamiento en la nube que no sabe quién eres ni qué guardas. Cero registros sobre la red Tor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400/20 font-mono text-center">
            EXPLORAR CLOUD
          </a>
          <a href="#downloads" className="w-full sm:w-auto px-8 py-4 bg-black hover:bg-gray-900 text-gray-300 font-bold rounded text-lg border border-gray-700 transition-all flex items-center justify-center gap-2 font-mono">
            <Globe className="w-5 h-5" />
            INSTALAR CLIENTE
          </a>
        </div>
      </div>
    </div>
  );
};