import React from 'react';
import { Monitor, Smartphone, Download, Server, Apple } from 'lucide-react';

export const Downloads: React.FC = () => {
  return (
    <section id="downloads" className="py-24 bg-gray-950 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase mb-2 block">04. OBTENER ACCESO</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">DESCARGAR CLIENTE</h2>
          <p className="text-gray-400">Instala CryptedCloud en tus dispositivos para sincronización segura.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Windows */}
          <div className="bg-black border border-gray-800 rounded-xl p-8 flex flex-col items-center text-center hover:border-blue-500 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-bl font-mono">ESTABLE</div>
            <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Monitor className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">Windows</h3>
            <p className="text-sm text-gray-500 mb-8 font-mono">Win 10 / 11 64-bit (.exe)</p>
            <a 
              href="./downloads/cryptedcloud.exe" 
              download="CryptedCloud_Setup_v4.exe"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-mono text-sm flex items-center justify-center gap-2 transition-all shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4" />
              DESCARGAR .EXE
            </a>
          </div>

          {/* Linux */}
          <div className="bg-black border border-gray-800 rounded-xl p-8 flex flex-col items-center text-center hover:border-emerald-500 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group">
            <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
              <Server className="w-8 h-8 text-gray-300 group-hover:text-emerald-500 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">Linux</h3>
            <p className="text-sm text-gray-500 mb-8 font-mono">Debian / Ubuntu / Kali (.deb)</p>
            <a 
              href="./downloads/cryptedcloud.deb" 
              download="CryptedCloud_Linux_v4.deb"
              className="w-full py-3 bg-white/5 hover:bg-emerald-600 hover:text-white border border-white/10 rounded font-mono text-sm text-emerald-400 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              DESCARGAR .DEB
            </a>
          </div>

          {/* Android */}
          <div className="bg-black border border-gray-800 rounded-xl p-8 flex flex-col items-center text-center hover:border-green-500 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] group">
            <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
              <Smartphone className="w-8 h-8 text-gray-300 group-hover:text-green-400 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">Android</h3>
            <p className="text-sm text-gray-500 mb-8 font-mono">Versión Mobile (.apk)</p>
            <a 
              href="./downloads/cryptedcloud.apk" 
              download="CryptedCloud_Mobile_v4.apk"
              className="w-full py-3 bg-white/5 hover:bg-green-600 hover:text-white border border-white/10 rounded font-mono text-sm text-green-400 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              DESCARGAR .APK
            </a>
          </div>

          {/* MacOS - Coming Soon */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-8 flex flex-col items-center text-center opacity-60 grayscale hover:grayscale-0 transition-all group relative">
            <div className="absolute top-3 right-3 bg-gray-800 text-gray-400 text-[8px] px-2 py-0.5 rounded border border-white/10 font-mono">PRÓXIMAMENTE</div>
            <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6">
              <Apple className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">macOS</h3>
            <p className="text-sm text-gray-500 mb-8 font-mono">M1 / M2 / Intel (.dmg)</p>
            <div className="w-full py-3 bg-white/5 border border-white/5 rounded font-mono text-sm text-gray-600 cursor-not-allowed">
              EN DESARROLLO
            </div>
          </div>

          {/* iOS - Coming Soon */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-8 flex flex-col items-center text-center opacity-60 grayscale hover:grayscale-0 transition-all group relative">
            <div className="absolute top-3 right-3 bg-gray-800 text-gray-400 text-[8px] px-2 py-0.5 rounded border border-white/10 font-mono">PRÓXIMAMENTE</div>
            <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">iOS</h3>
            <p className="text-sm text-gray-500 mb-8 font-mono">App Store / IPA</p>
            <div className="w-full py-3 bg-white/5 border border-white/5 rounded font-mono text-sm text-gray-600 cursor-not-allowed">
              EN DESARROLLO
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-600 font-mono">
            ¿No sabes cómo instalarlo? Consulta nuestro <button onClick={() => window.dispatchEvent(new CustomEvent('nav', {detail: 'tutorial'}))} className="text-emerald-500 hover:underline">tutorial de acceso</button>.
          </p>
        </div>
      </div>
    </section>
  );
};