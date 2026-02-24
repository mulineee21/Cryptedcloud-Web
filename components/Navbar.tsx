import React, { useState } from 'react';
import { Shield, Terminal, BookOpen, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md supports-[backdrop-filter]:bg-black/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNav('home')}
        >
          <div className="relative">
            <Shield className="w-8 h-8 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
            <div className="absolute inset-0 bg-emerald-500/20 blur-lg rounded-full" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-wider text-white font-mono group-hover:text-emerald-200 transition-colors">
            CRYPTED<span className="text-emerald-500">CLOUD</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <button onClick={() => onNavigate('about')} className="text-xs lg:text-sm font-medium text-gray-400 hover:text-white transition-colors font-mono uppercase">PROYECTO</button>
          <button onClick={() => onNavigate('tech')} className="text-xs lg:text-sm font-medium text-gray-400 hover:text-white transition-colors font-mono uppercase">TECNOLOGÍAS</button>
          <button onClick={() => onNavigate('subscriptions')} className="text-xs lg:text-sm font-medium text-gray-400 hover:text-white transition-colors font-mono uppercase">PLANES</button>
          <button onClick={() => onNavigate('downloads')} className="text-xs lg:text-sm font-medium text-gray-400 hover:text-white transition-colors font-mono uppercase">DESCARGAS</button>
          <button onClick={() => onNavigate('tutorial')} className="text-xs lg:text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-mono uppercase">
            <BookOpen className="w-4 h-4" />
            TUTORIAL
          </button>
          <button onClick={() => onNavigate('ai-terminal')} className="text-xs lg:text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-mono uppercase border-l border-white/10 pl-6">
            <Terminal className="w-4 h-4" />
            GUARDIÁN
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-500/80 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            NODO TOR
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-950 border-b border-white/10 animate-fade-in">
          <div className="flex flex-col p-4 gap-4">
            <button onClick={() => handleNav('about')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors font-mono uppercase text-left py-2">PROYECTO</button>
            <button onClick={() => handleNav('tech')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors font-mono uppercase text-left py-2">TECNOLOGÍAS</button>
            <button onClick={() => handleNav('subscriptions')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors font-mono uppercase text-left py-2">PLANES</button>
            <button onClick={() => handleNav('downloads')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors font-mono uppercase text-left py-2">DESCARGAS</button>
            <button onClick={() => handleNav('tutorial')} className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 font-mono uppercase text-left py-2">
              <BookOpen className="w-4 h-4" />
              TUTORIAL
            </button>
            <button onClick={() => handleNav('ai-terminal')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-mono uppercase text-left py-2 border-t border-white/5 pt-4">
              <Terminal className="w-4 h-4" />
              GUARDIÁN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};