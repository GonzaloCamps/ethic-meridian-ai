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
                description: "Acceso a financiamiento para mejoras de IA ética"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-card/30 backdrop-blur-sm border border-mars-gold/20 rounded-lg p-6 mars-glow">
                <feature.icon className="w-12 h-12 text-mars-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Transforme su organización con IA ética certificada
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Únase a corporaciones, gobiernos y ONGs que ya confían en nuestra plataforma para 
              validar y mejorar sus sistemas de inteligencia artificial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="group">
                Comenzar Validación
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-sm">
                Ver Demo
              </Button>
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