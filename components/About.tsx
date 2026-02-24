import React from 'react';
import { Users, ShieldCheck, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black relative border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
             <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase mb-2 block">01. SOBRE EL PROYECTO</span>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">QUIÉNES SOMOS</h2>
             <p className="text-gray-400 text-lg leading-relaxed">
               CryptedCloud es un ecosistema de almacenamiento privado diseñado para desafiar la vigilancia masiva. 
               No somos solo un servicio en la nube; somos una fortaleza digital construida sobre los cimientos de la red Tor y la criptografía de conocimiento cero.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-emerald-500/50 transition-colors group">
              <Users className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2 font-mono">Desarrollo Propio</h3>
              <p className="text-gray-500 text-sm">
                Proyecto educativo enfocado en llevar la privacidad de nivel militar al usuario común.
              </p>
            </div>
            
            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-emerald-500/50 transition-colors group">
              <Target className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2 font-mono">Soberanía de Datos</h3>
              <p className="text-gray-500 text-sm">
                Tus datos nunca tocan la web clara. Todo el tráfico viaja encriptado por nodos aleatorios.
              </p>
            </div>

            <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-emerald-500/50 transition-colors group">
              <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold mb-2 font-mono">Privacidad Extrema</h3>
              <p className="text-gray-500 text-sm">
                Sin IPs, sin correos, sin logs. Tu espacio en CryptedCloud es invisible para el mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};