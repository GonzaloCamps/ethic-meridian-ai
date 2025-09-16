import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import marsHero from '@/assets/mars-hero.jpg';
import ethicaiLogo from '@/assets/ethicai-logo.png';
import ethicaiValidatorLogo from '@/assets/ethicai-validator-logo.png';
import stellarLogo from '@/assets/stellar-logo.png';

const MarsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mars Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${marsHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
        <div className="absolute inset-0 bg-gradient-surface" />
      </div>
      
      {/* Stellar Logo - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <img 
          src={stellarLogo} 
          alt="Stellar" 
          className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8">
          {/* Logo grande centrado */}
          <div className="space-y-6">
            <div className="flex justify-center mb-8">
              <img 
                src={ethicaiValidatorLogo} 
                alt="EthicAI Validator" 
                className="h-32 md:h-48 w-auto opacity-95 floating"
              />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong className="text-foreground">Potenciamos a las empresas que utilicen IA de forma ética</strong> y las posicionamos en el mercado
              <span className="text-mars-gold block mt-2">como referentes de confianza ante clientes e inversionistas.</span>
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 my-12">
            {[
              {
                icon: Shield,
                title: "Certificación NFT",
                description: "Sello verificable en blockchain Stellar"
              },
              {
                icon: Zap,
                title: "Auditoría IA",
                description: "Evaluación automatizada y continua"
              },
              {
                icon: Globe,
                title: "Financiamiento",
                description: "Acceso a capital para mejoras éticas"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card/30 backdrop-blur-sm border border-mars-gold/20 rounded-lg p-6 mars-glow">
                <feature.icon className="w-10 h-10 text-mars-gold mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA y Misión */}
          <div className="space-y-6 mt-8">
            <div className="flex justify-center">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('startValidation'))}
                className="group relative bg-gradient-mars text-foreground px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300 mars-pulse shadow-2xl border-2 border-mars-gold/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mars-gold/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10 tracking-wide">VALIDAR AHORA</span>
              </button>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                Transforme su empresa en referente ético y acceda a capital responsable
              </h2>
              
              <div className="p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-mars-gold/20">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  <strong className="text-mars-gold">Meridiani Planum</strong> en Marte nos inspira: 
                  Si llegamos a Marte será con IA ética, o no será. Nuestra misión es asegurar que 
                  cada empresa use IA responsablemente, creando un futuro mejor para la humanidad.
                </p>
                <p className="text-xs text-muted-foreground mt-2 italic">
                  (Built for Hack Meridian Stellar Hackathon - Ethical AI for humanity's future)
                </p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-8 border-t border-mars-gold/20">
            <p className="text-sm text-muted-foreground mb-4">
              Construido para Hackathon Meridian - Stellar Blockchain
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <span className="text-xs">Blockchain Verificable</span>
              <span className="text-xs">•</span>
              <span className="text-xs">Auditoría Continua</span>
              <span className="text-xs">•</span>
              <span className="text-xs">Certificación NFT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-mars-gold rounded-full animate-ping" />
      <div className="absolute top-3/4 right-20 w-1 h-1 bg-mars-copper rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-mars-rust rounded-full animate-ping delay-1000" />
    </section>
  );
};

export default MarsHero;