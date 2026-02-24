import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Cpu, AlertCircle } from 'lucide-react';
import { Message } from '../types';
import { getSecurityAdvice } from '../services/gemini';

export const SecurityAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Enlace neuronal establecido. Soy el Guardián de CryptedCloud. Pregúntame sobre cómo protegemos tus archivos en Tor o cualquier duda sobre seguridad y privacidad.',
      timestamp: Date.now()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getSecurityAdvice(input);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'system',
        content: 'ERR_TIMEOUT: El Guardián ha perdido la sincronía.',
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-terminal" className="py-20 bg-gray-950 border-t border-emerald-500/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-mono text-white flex items-center gap-2">
                <Terminal className="w-6 h-6 text-emerald-500" />
                GUARDIÁN_CRYPTEDCLOUD_IA
              </h2>
              <p className="text-sm text-gray-500 font-mono mt-1">Sincronía: Activa // Gemini-2.5-Flash Core</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              CONEXIÓN SEGURA
            </div>
          </div>

          <div className="bg-black border border-gray-800 rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* Terminal Header */}
            <div className="bg-gray-900 px-4 py-2 flex items-center gap-2 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs text-gray-500 font-mono ml-2">sysadmin@cryptedcloud-guardian:~$</span>
            </div>

            {/* Messages Area */}
            <div className="h-[400px] overflow-y-auto p-6 font-mono text-sm space-y-4 bg-black/90 bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px]">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${
                    msg.role === 'assistant' ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-500/30' : 
                    msg.role === 'user' ? 'bg-gray-800 text-gray-300 border border-gray-700' :
                    'bg-red-900/20 text-red-400'
                  }`}>
                    {msg.role === 'assistant' ? <Cpu className="w-4 h-4" /> : 
                     msg.role === 'user' ? <span className="font-bold text-xs">USU</span> : 
                     <AlertCircle className="w-4 h-4" />}
                  </div>
                  
                  <div className={`max-w-[80%] p-3 rounded ${
                    msg.role === 'user' 
                      ? 'bg-gray-800 text-gray-200' 
                      : 'bg-emerald-900/10 text-emerald-100 border border-emerald-500/20'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-emerald-900/30 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="p-3 text-emerald-500/70 animate-pulse">
                    Accediendo al núcleo de seguridad...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gray-900 border-t border-gray-800 flex gap-2">
              <div className="text-emerald-500 font-mono py-2">_</div>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pregunta sobre CryptedCloud..."
                className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none placeholder-gray-600"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-2 text-emerald-500 hover:text-emerald-400 disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};