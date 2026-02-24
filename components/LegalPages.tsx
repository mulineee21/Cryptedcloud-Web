import React from 'react';
import { Shield, FileText, Eye, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<LegalPageProps> = ({ onBack }) => (
  <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-4 animate-fade-in">
    <div className="container mx-auto max-w-4xl">
      <button onClick={onBack} className="text-emerald-500 hover:text-emerald-400 mb-8 font-mono flex items-center gap-2 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        VOLVER AL INICIO
      </button>
      <div className="bg-black border border-gray-800 rounded-lg p-8 md:p-12 shadow-2xl">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800">
          <Shield className="w-10 h-10 text-emerald-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-white font-mono">POLÍTICA DE PRIVACIDAD</h1>
        </div>
        <div className="space-y-8 text-gray-400 leading-relaxed font-sans">
           <div>
             <p className="text-sm font-mono text-emerald-500 mb-2">PROYECTO: CRYPTEDCLOUD // ACTUALIZACIÓN: {new Date().toLocaleDateString()}</p>
             <p>CryptedCloud opera bajo una estricta arquitectura de "Cero Conocimiento". No almacenamos logs de acceso, IPs, ni metadatos de archivos. Nuestra infraestructura se sirve exclusivamente vía Tor Hidden Services.</p>
           </div>

           <div>
             <h3 className="text-xl text-white font-bold mb-3 font-mono">1. DATOS DEL USUARIO</h3>
             <p>No recopilamos información personal identificable. No hay correos, ni nombres, ni rastreadores.</p>
           </div>

           <div>
             <h3 className="text-xl text-white font-bold mb-3 font-mono">2. CIFRADO DE ARCHIVOS</h3>
             <p>Los archivos se cifran en tu navegador/app antes de subirse. Nosotros solo almacenamos bloques de datos ilegibles sin tu clave privada.</p>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export const TermsOfService: React.FC<LegalPageProps> = ({ onBack }) => (
  <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-4 animate-fade-in">
    <div className="container mx-auto max-w-4xl">
      <button onClick={onBack} className="text-emerald-500 hover:text-emerald-400 mb-8 font-mono flex items-center gap-2 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        VOLVER AL INICIO
      </button>
      <div className="bg-black border border-gray-800 rounded-lg p-8 md:p-12 shadow-2xl">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800">
          <FileText className="w-10 h-10 text-emerald-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-white font-mono">TÉRMINOS DE SERVICIO</h1>
        </div>
        <div className="space-y-8 text-gray-400 leading-relaxed font-sans">
           <div>
             <h3 className="text-xl text-white font-bold mb-3 font-mono">1. USO DE LA NUBE</h3>
             <p>CryptedCloud es una herramienta para la libertad digital. El uso para actividades ilegales que comprometan la integridad de terceros no está permitido, aunque debido al cifrado extremo-a-extremo, el usuario es el único responsable técnico de su contenido.</p>
           </div>

           <div>
             <h3 className="text-xl text-white font-bold mb-3 font-mono">2. SIN RECUPERACIÓN DE CLAVES</h3>
             <p>Si pierdes tu frase semilla o clave de acceso, pierdes tus datos. CryptedCloud no tiene "puertas traseras".</p>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export const TransparencyReport: React.FC<LegalPageProps> = ({ onBack }) => (
  <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-4 animate-fade-in">
    <div className="container mx-auto max-w-4xl">
      <button onClick={onBack} className="text-emerald-500 hover:text-emerald-400 mb-8 font-mono flex items-center gap-2 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        VOLVER AL INICIO
      </button>
      <div className="bg-black border border-gray-800 rounded-lg p-8 md:p-12 shadow-2xl">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800">
          <Eye className="w-10 h-10 text-emerald-500" />
          <h1 className="text-3xl md:text-4xl font-bold text-white font-mono">INFORME DE TRANSPARENCIA</h1>
        </div>
        <div className="space-y-8 text-gray-400 leading-relaxed font-sans">
           <p>Mantenemos un registro público de cualquier requerimiento legal recibido por CryptedCloud.</p>
           
           <div className="grid md:grid-cols-3 gap-4 my-8">
             <div className="bg-gray-900 p-6 rounded border border-gray-700 text-center">
               <div className="text-4xl font-bold text-white mb-2 font-mono">0</div>
               <div className="text-xs text-gray-500 font-mono uppercase">Órdenes Recibidas</div>
             </div>
             <div className="bg-gray-900 p-6 rounded border border-gray-700 text-center">
               <div className="text-4xl font-bold text-white mb-2 font-mono">0</div>
               <div className="text-xs text-gray-500 font-mono uppercase">Datos Filtrados</div>
             </div>
             <div className="bg-gray-900 p-6 rounded border border-gray-700 text-center">
               <div className="text-4xl font-bold text-emerald-500 mb-2 font-mono">100%</div>
               <div className="text-xs text-gray-500 font-mono uppercase">Seguridad</div>
             </div>
           </div>

           <div>
             <h3 className="text-xl text-white font-bold mb-3 font-mono">WARRANT CANARY</h3>
             <div className="p-4 bg-emerald-900/10 border border-emerald-500/20 rounded text-sm font-mono text-emerald-400/80">
               <p>Hasta el {new Date().toLocaleDateString()}, CryptedCloud NO ha sido comprometida por ninguna agencia de inteligencia ni ha entregado claves de usuario.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);