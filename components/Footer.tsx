import React from 'react';
import { Github, Twitter, Network } from 'lucide-react';

interface FooterProps {
  onNavigate: (destination: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">CRYPTED<span className="text-emerald-500">CLOUD</span></h3>
            <p className="text-gray-400 max-w-sm">
              Tu fortaleza de archivos en la nube. Código abierto, descentralizado y construido para el anonimato absoluto mediante la red Tor.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 font-mono">PROYECTO</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a 
                  href="https://github.com/mulineee21" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-500 transition-colors"
                >
                  Repositorio
                </a>
              </li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors cursor-not-allowed opacity-50">Nodo .onion (V4)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 font-mono">LEGAL</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-emerald-500 transition-colors text-left">
                  Privacidad
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-emerald-500 transition-colors text-left">
                  Términos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transparency')} className="hover:text-emerald-500 transition-colors text-left">
                  Transparencia
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm font-mono">
            © 2024 Proyecto CryptedCloud. Proyecto Final de Ciclo.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/mulineee21" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-2 text-gray-500 text-sm font-mono">
              <Network className="w-4 h-4" />
              <span>ESTADO RED: ESTABLE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};