import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Downloads } from './components/Downloads';
import { Subscriptions } from './components/Subscriptions';
import { EncryptionDemo } from './components/EncryptionDemo';
import { SecurityAssistant } from './components/SecurityAssistant';
import { Footer } from './components/Footer';
import { PrivacyPolicy, TermsOfService, TransparencyReport } from './components/LegalPages';
import { CheckoutPage } from './components/CheckoutPage';
import { AccessTutorial } from './components/Tutorial';

function App() {
  const [currentView, setCurrentView] = useState<string>('home');

  useEffect(() => {
    // Escuchar eventos globales de navegación (para enlaces internos en componentes)
    const handleNavEvent = (e: any) => {
      handleNavigate(e.detail);
    };
    window.addEventListener('nav', handleNavEvent);
    return () => window.removeEventListener('nav', handleNavEvent);
  }, [currentView]);

  const handleNavigate = (destination: string) => {
    const specialViews = ['privacy', 'terms', 'transparency', 'checkout-premium', 'checkout-ultimate', 'tutorial'];
    
    if (specialViews.includes(destination)) {
      setCurrentView(destination);
      window.scrollTo(0, 0);
    } else if (destination === 'home') {
      setCurrentView('home');
      window.scrollTo(0, 0);
    } else {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          const element = document.getElementById(destination);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(destination);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'privacy':
        return <PrivacyPolicy onBack={() => handleNavigate('home')} />;
      case 'terms':
        return <TermsOfService onBack={() => handleNavigate('home')} />;
      case 'transparency':
        return <TransparencyReport onBack={() => handleNavigate('home')} />;
      case 'tutorial':
        return <AccessTutorial onBack={() => handleNavigate('home')} onNavigate={handleNavigate} />;
      case 'checkout-premium':
        return (
          <CheckoutPage 
            planName="PREMIUM" 
            price="5€/mes" 
            onBack={() => handleNavigate('home')} 
            onSuccess={() => handleNavigate('home')} 
          />
        );
      case 'checkout-ultimate':
        return (
          <CheckoutPage 
            planName="ULTIMATE" 
            price="15€/mes" 
            onBack={() => handleNavigate('home')} 
            onSuccess={() => handleNavigate('home')} 
          />
        );
      default:
        return (
          <main>
            <Hero />
            <About />
            <Technologies />
            <EncryptionDemo />
            <Subscriptions onNavigate={handleNavigate} />
            <Downloads />
            <SecurityAssistant />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar onNavigate={handleNavigate} />
      {renderContent()}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;