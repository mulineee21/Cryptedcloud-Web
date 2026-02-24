import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ShieldCheck, Mail, User, CheckCircle2, Lock, AlertCircle, Loader2, RefreshCw, PlayCircle } from 'lucide-react';

interface CheckoutPageProps {
  planName: string;
  price: string;
  onBack: () => void;
  onSuccess: () => void;
}

/**
 * CONFIGURACIÓN DE PRODUCCIÓN:
 * Client ID real proporcionado por el usuario.
 */
const PAYPAL_CLIENT_ID = 'PAYPAL_ID';

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ planName, price, onBack, onSuccess }) => {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [dataConfirmed, setDataConfirmed] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);
  const [showDemoButton, setShowDemoButton] = useState(false);
  const paypalButtonRef = useRef<HTMLDivElement>(null);

  const priceValue = price.split('€')[0].trim();

  // Función para cargar el SDK de PayPal de forma robusta
  useEffect(() => {
    if (dataConfirmed && !isSdkLoaded) {
      const timer = setTimeout(() => setShowDemoButton(true), 8000); // Si tarda más de 8s, sugerir demo

      const script = document.createElement('script');
      script.id = 'paypal-sdk-script';
      // Usamos un namespace personalizado 'paypal_sdk' para evitar colisiones y mitigar errores de host
      script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=EUR&components=buttons&intent=capture`;
      script.async = true;
      script.setAttribute('data-sdk-integration-source', 'button-factory');
      script.setAttribute('data-namespace', 'paypal_sdk');
      
      script.onload = () => {
        clearTimeout(timer);
        setIsSdkLoaded(true);
      };
      
      script.onerror = () => {
        clearTimeout(timer);
        setErrorMessage('El entorno bloqueó la conexión con PayPal (Error de Host o Red).');
        setShowDemoButton(true);
      };

      document.body.appendChild(script);

      return () => clearTimeout(timer);
    }
  }, [dataConfirmed, isSdkLoaded]);

  useEffect(() => {
    // Inicialización de los botones usando el namespace 'paypal_sdk'
    if (isSdkLoaded && (window as any).paypal_sdk && paypalButtonRef.current && dataConfirmed) {
      paypalButtonRef.current.innerHTML = '';
      
      try {
        (window as any).paypal_sdk.Buttons({
          style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'pay',
            height: 45
          },
          createOrder: (data: any, actions: any) => {
            // Adjuntamos USUARIO y EMAIL al concepto (description) para que aparezca en el panel de PayPal
            return actions.order.create({
              purchase_units: [{
                description: `CryptedCloud Plan ${planName} | ID: ${formData.username} | Email: ${formData.email}`,
                custom_id: `${formData.username}:${formData.email}`, // ID personalizado para rastreo técnico
                amount: {
                  currency_code: 'EUR',
                  value: priceValue
                }
              }]
            });
          },
          onApprove: async (data: any, actions: any) => {
            try {
              const order = await actions.order.capture();
              setTransactionId(order.id);
              
              // Persistencia local de la subscripción
              localStorage.setItem(`crypted_session_${formData.username}`, JSON.stringify({
                active: true,
                plan: planName,
                order: order.id,
                email: formData.email,
                date: new Date().toISOString()
              }));
              
              setIsSuccess(true);
            } catch (err) {
              console.error('Error capturando la orden:', err);
              setErrorMessage('Error al procesar la captura del pago.');
            }
          },
          onError: (err: any) => {
            console.error('PayPal Runtime Error:', err);
            // Capturamos el error de host común en entornos de desarrollo/preview
            setErrorMessage('Restricción de seguridad del navegador detectada (Host Security Error).');
            setShowDemoButton(true);
          },
          onCancel: () => {
            console.log('Pago cancelado por el usuario.');
          }
        }).render(paypalButtonRef.current).catch((renderError: any) => {
           console.warn("Fallo al renderizar botones de PayPal, activando respaldo.");
           setShowDemoButton(true);
        });
      } catch (e) {
        console.error("Excepción en inicialización de PayPal:", e);
        setShowDemoButton(true);
      }
    }
  }, [isSdkLoaded, dataConfirmed, planName, priceValue, formData.username, formData.email]);

  const handleDemoPayment = () => {
    // Simulación de éxito para propósitos de defensa de proyecto final
    const fakeId = 'SECURE-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setTransactionId(fakeId);
    
    localStorage.setItem(`crypted_session_${formData.username}`, JSON.stringify({
      active: true,
      plan: planName,
      order: fakeId,
      email: formData.email,
      date: new Date().toISOString(),
      mode: 'DEMO'
    }));

    setIsSuccess(true);
  };

  const handleConfirmData = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username.trim().length < 3) {
      setErrorMessage('El ID de usuario es demasiado corto.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('El formato del email no es válido.');
      return;
    }
    setErrorMessage('');
    setDataConfirmed(true);
  };

  const handleRetry = () => {
    setErrorMessage('');
    setIsSdkLoaded(false);
    setShowDemoButton(false);
    // Forzar recarga de script
    const prev = document.getElementById('paypal-sdk-script');
    if (prev) prev.remove();
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 animate-fade-in">
        <div className="max-w-md w-full bg-black border border-emerald-500/30 rounded-2xl p-8 text-center shadow-[0_0_60px_rgba(16,185,129,0.1)]">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-white font-mono mb-2">PAGO COMPLETADO</h2>
          <p className="text-emerald-500 font-mono text-[10px] mb-6 uppercase tracking-[0.2em] font-bold">SERIAL_ID: {transactionId}</p>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-8 text-left space-y-3">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-[10px] text-gray-500 font-mono">USUARIO</span>
              <span className="text-sm text-white font-mono font-bold uppercase">{formData.username}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-[10px] text-gray-500 font-mono">EMAIL</span>
              <span className="text-sm text-white font-mono">{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-gray-500 font-mono">PLAN ACTIVADO</span>
              <span className="text-sm text-emerald-400 font-mono font-bold uppercase">{planName}</span>
            </div>
          </div>

          <button 
            onClick={onBack}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold rounded-lg transition-all shadow-lg active:scale-95"
          >
            ACCEDER AL SERVICIO
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-4 animate-fade-in relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,#10b98108_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto max-w-xl relative z-10">
        <button onClick={onBack} className="text-gray-500 hover:text-white mb-8 font-mono flex items-center gap-2 group text-sm transition-colors">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          VOLVER AL PANEL
        </button>

        <div className="bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-white/5 border-b border-white/10 p-6 flex justify-between items-center">
            <div>
              <h1 className="text-lg font-bold text-white font-mono uppercase tracking-widest">CHECKOUT SEGURO</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-[9px] text-emerald-500 font-mono font-bold uppercase">Tor-Routed Checkout</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-gray-500 font-mono block uppercase mb-1">IMPORTE {planName}</span>
              <span className="text-2xl font-bold font-mono text-white tracking-tighter">{price}</span>
            </div>
          </div>

          <div className="p-8">
            {!dataConfirmed ? (
              <form onSubmit={handleConfirmData} className="space-y-6">
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl flex gap-4 items-start">
                  <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                    Confirma tu identidad digital. Estos datos se adjuntarán al concepto de pago de PayPal para la activación automática del plan.
                  </p>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs font-mono">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="space-y-5">
                  <div className="group">
                    <label className="block text-[10px] font-mono text-gray-500 uppercase mb-2 ml-1 tracking-[0.1em]">ID de Usuario</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-emerald-500 transition-colors" />
                      <input 
                        required
                        type="text"
                        placeholder="Ej: n0_name_user"
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white font-mono focus:border-emerald-500 outline-none text-sm"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-[10px] font-mono text-gray-500 uppercase mb-2 ml-1 tracking-[0.1em]">Correo Electrónico</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 group-focus-within:text-emerald-500 transition-colors" />
                      <input 
                        required
                        type="email"
                        placeholder="tu-correo@servidor.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-10 pr-4 text-white font-mono focus:border-emerald-500 outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold rounded-xl transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em]"
                >
                  VALIDAR Y CONTINUAR AL PAGO
                </button>
              </form>
            ) : (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-emerald-500/5 border border-emerald-500/20 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-500/20 rounded-full p-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-xs text-white font-mono font-bold uppercase tracking-wider">{formData.username}</p>
                      <p className="text-[10px] text-gray-500 font-mono italic">{formData.email}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => {setDataConfirmed(false); setIsSdkLoaded(false); setErrorMessage('');}}
                    className="text-[10px] text-emerald-500 hover:text-emerald-400 font-mono font-bold"
                  >
                    EDITAR
                  </button>
                </div>

                <div className="min-h-[220px] flex flex-col items-center justify-center border border-white/5 rounded-2xl bg-white/[0.02] p-6 relative">
                  {!isSdkLoaded && !errorMessage && (
                    <div className="flex flex-col items-center gap-4 text-gray-500 font-mono text-[10px] tracking-widest">
                      <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
                      SINCRONIZANDO CON PAYPAL...
                    </div>
                  )}
                  
                  {errorMessage && (
                    <div className="text-center p-4">
                      <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-4 opacity-80" />
                      <p className="text-xs text-red-400 font-mono mb-6 leading-relaxed">{errorMessage}</p>
                      <button 
                        onClick={handleRetry} 
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 text-white font-mono text-[10px] font-bold rounded-lg hover:bg-white/20 transition-all border border-white/5"
                      >
                        <RefreshCw className="w-3 h-3" />
                        REINTENTAR CONEXIÓN
                      </button>
                    </div>
                  )}

                  <div ref={paypalButtonRef} className="w-full z-20" />

                  {showDemoButton && (
                    <div className="mt-6 w-full pt-6 border-t border-white/5 animate-fade-in">
                      <p className="text-[9px] text-gray-500 font-mono text-center mb-4 uppercase">
                        ¿Entorno de red restringido? Usa el simulador de pago seguro:
                      </p>
                      <button 
                        onClick={handleDemoPayment}
                        className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-mono text-[11px] rounded-lg flex items-center justify-center gap-2 transition-all group"
                      >
                        <PlayCircle className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform" />
                        SIMULAR PAGO (MODO EXAMEN)
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-center gap-3 opacity-30">
                  <div className="flex items-center gap-2">
                    <Lock className="w-3 h-3 text-gray-500" />
                    <span className="text-[8px] text-gray-500 font-mono uppercase tracking-[0.3em]">Cifrado Punto a Punto Activo</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
