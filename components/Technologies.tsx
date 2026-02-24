import React from 'react';
import { Lock, Globe, EyeOff, Network, Key, Server, Cloud } from 'lucide-react';

export const Technologies: React.FC = () => {
  const techs = [
    {
      icon: <Lock className="w-6 h-6 text-emerald-500" />,
      title: "Encriptación AES-128",
      desc: "Protección de grado militar para cada byte de datos que transmites."
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      title: "Enrutamiento Onion",
      desc: "El tráfico rebota a través de 3 nodos aleatorios en todo el mundo."
    },
    {
      icon: <EyeOff className="w-6 h-6 text-emerald-500" />,
      title: "Conocimiento Cero",
      desc: "No podemos leer tus datos incluso si quisiéramos. Tú tienes la llave."
    },
    {
      icon: <Key className="w-6 h-6 text-emerald-500" />,
      title: "Intercambio Diffie-Hellman",
      desc: "Establecimiento de claves seguro sobre un canal inseguro."
    },
    {
      icon: <Server className="w-6 h-6 text-emerald-500" />,
      title: "Servicios Ocultos V3",
      desc: "Utilizamos la última generación de direcciones .onion para máxima seguridad."
    },
    {
      icon: <Cloud className="w-6 h-6 text-emerald-500" />,
      title: "Integración Nextcloud",
      desc: "Infraestructura de archivos y colaboración segura alojada en la nube privada."
    }
  ];

  return (
    <section id="tech" className="py-24 bg-gray-950 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-900 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase mb-2 block">02. ARQUITECTURA</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">TECNOLOGÍAS QUE IMPLEMENTAMOS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nuestra infraestructura está construida sobre los hombros de gigantes criptográficos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((tech, index) => (
            <div key={index} className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-emerald-400 transition-colors">
                {tech.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};