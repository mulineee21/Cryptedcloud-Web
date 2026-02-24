import React, { useState, useEffect } from 'react';
import { Lock, Unlock } from 'lucide-react';

export const EncryptionDemo: React.FC = () => {
  const [text, setText] = useState("Documentos Confidenciales CryptedCloud");
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [displayData, setDisplayData] = useState(text);

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&!^*";

  const scramble = (target: string) => {
    let iterations = 0;
    
    const interval = setInterval(() => {
      setDisplayData(target.split("")
        .map((char, index) => {
          if (index < iterations) {
            return target[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join(""));
      
      if (iterations >= target.length) {
        clearInterval(interval);
      }
      iterations += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    if (isEncrypted) {
      const hash = Array(text.length).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join("");
      setDisplayData(hash);
    } else {
      scramble(text);
    }
  }, [isEncrypted, text]);

  return (
    <section id="encryption" className="py-20 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
              <span className="text-emerald-500">03.</span> SEGURIDAD EN LA NUBE
            </h2>
            <p className="text-gray-400 text-lg">
              En CryptedCloud, cada archivo y mensaje se fragmenta y encripta localmente.
              Nuestra arquitectura de "Conocimiento Cero" garantiza que solo tú puedas ver el contenido.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className={`w-3 h-3 rounded-full ${isEncrypted ? 'bg-red-500' : 'bg-emerald-500'}`} />
                <span className="font-mono text-sm text-gray-300">Estado: {isEncrypted ? 'CAPA ENCRIPTADA AES-256 ACTIVA' : 'DATOS EN CLARO EXPUESTOS'}</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <span className="text-xs text-gray-500 font-mono">VISTA_PREVIA_CLOUD_SEC</span>
              </div>

              <div className="mb-6">
                <label className="block text-xs text-gray-500 mb-2 font-mono">DATOS A GUARDAR</label>
                <input 
                  type="text" 
                  value={text}
                  onChange={(e) => !isEncrypted && setText(e.target.value)}
                  disabled={isEncrypted}
                  className="w-full bg-black/50 border border-gray-700 rounded p-3 text-emerald-400 font-mono focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs text-gray-500 mb-2 font-mono">PAQUETE DE RED TOR</label>
                <div className="w-full h-12 bg-black border border-gray-700 rounded p-3 text-gray-300 font-mono overflow-hidden break-all flex items-center">
                  {displayData}
                </div>
              </div>

              <button
                onClick={() => setIsEncrypted(!isEncrypted)}
                className="w-full py-3 rounded bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 font-mono font-bold flex items-center justify-center gap-2 transition-all"
              >
                {isEncrypted ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                {isEncrypted ? 'AUTENTICAR Y DESCIFRAR' : 'CIFRAR PARA NUBE'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};