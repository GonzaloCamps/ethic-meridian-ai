import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import marsHero from '@/assets/mars-hero.jpg';

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
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                EthicAi
              </span>
              <br />
              <span className="text-foreground">
                Validator
              </span>
              <span className="text-xs align-super text-mars-gold">™</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Validación ética de IA verificable on-chain para corporaciones, gobiernos y ONGs. 
              <span className="text-mars-gold"> Construyendo el futuro desde Meridiani Planum.</span>
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 my-16">
            {[
              {
                icon: Shield,
                title: "Sello Ético Verificable",
                description: "Certificación blockchain con Stellar y NFT de cumplimiento"
              },
              {
                icon: Zap,
                title: "Auditoría Automatizada",
                description: "Contratos Soroban para evaluación continua de riesgos"
              },
              {
                icon: Globe,
                title: "Capital Responsable",
                description: "Acceso a financiamiento para mejoras empresariales con IA responsable"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card/30 backdrop-blur-sm border border-mars-gold/20 rounded-lg p-6 mars-glow">
                <feature.icon className="w-12 h-12 text-mars-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Prominente */}
          <div className="space-y-8 mt-12">
            {/* Botón Principal */}
            <div className="flex justify-center">
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent('startValidation'))}
                className="group relative bg-gradient-mars text-foreground px-12 py-6 rounded-xl font-bold text-2xl hover:scale-110 transition-all duration-300 mars-pulse shadow-2xl border-2 border-mars-gold/50 overflow-hidden"
              >
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mars-gold/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10 tracking-wide">COMENZAR</span>
              </button>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Transforme su organización implementando IA con certificación de buenas prácticas
              </h2>
              
              <div className="mt-8 p-6 bg-background/10 backdrop-blur-sm rounded-xl border border-mars-gold/20">
                <h3 className="text-lg font-bold text-mars-gold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Meridiani Planum: Inspiración Marciana
                </h3>
                <p className="text-foreground/90 text-sm leading-relaxed mb-4">
                  Meridiani Planum es un territorio ubicado en Marte que nos inspira a llegar al futuro. 
                  Si llegamos a Marte será con IA, o no será. Esta visión nos impulsa a desarrollar 
                  inteligencia artificial que sea verdaderamente ética para toda la humanidad.
                </p>
                <p className="text-foreground/80 text-xs leading-relaxed">
                  En el contexto de <span className="text-mars-gold font-semibold">Hack Meridian</span>, 
                  la Hackathon de Stellar, proponemos esta solución que nos permite asegurar que 
                  podemos llegar a Marte con una IA más ética, responsable y beneficial para todos.
                  <br />
                  <span className="italic text-muted-foreground">
                    (Meridiani Planum inspires our vision: reaching Mars with ethical AI for all humanity - Hack Meridian Stellar Hackathon solution)
                  </span>
                </p>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Únase a corporaciones, gobiernos y ONGs que ya confían en nuestra plataforma para 
                validar y mejorar sus sistemas de inteligencia artificial.
              </p>
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