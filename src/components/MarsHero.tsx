import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import marsHero from '@/assets/mars-hero.jpg';
import ethicaiLogo from '@/assets/ethicai-logo.png';
import ethicaiValidatorLogo from '@/assets/ethicai-validator-logo-large.png';
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
              <div className="flex justify-center mb-12">
                <img 
                  src={ethicaiValidatorLogo} 
                  alt="EthicAI Validator" 
                  className="h-56 md:h-80 lg:h-96 w-auto opacity-95 floating drop-shadow-2xl"
                />
              </div>
              <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-semibold">
                We empower companies that use AI ethically and position them in the market
                <span className="text-mars-gold block mt-2">as trusted leaders for clients and investors.</span>
              </p>
            </div>

            {/* Three Features - Attractive Design */}
            <div className="relative my-16">
              <div className="bg-gradient-mars/20 backdrop-blur-lg border border-mars-gold/30 rounded-2xl p-8 mars-glow">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="group text-center">
                    <div className="bg-gradient-to-br from-mars-gold/20 to-mars-copper/20 rounded-xl p-6 border border-mars-gold/40 hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl md:text-2xl font-bold text-mars-gold tracking-wide group-hover:text-white transition-colors mb-2">AI Audit</h3>
                      <p className="text-sm text-foreground/80">Automated and continuous evaluation</p>
                    </div>
                  </div>
                  <div className="group text-center">
                    <div className="bg-gradient-to-br from-mars-gold/20 to-mars-copper/20 rounded-xl p-6 border border-mars-gold/40 hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl md:text-2xl font-bold text-mars-gold tracking-wide group-hover:text-white transition-colors mb-2">Funding</h3>
                      <p className="text-sm text-foreground/80">Access to capital that rewards ethical AI use</p>
                    </div>
                  </div>
                  <div className="group text-center">
                    <div className="bg-gradient-to-br from-mars-gold/20 to-mars-copper/20 rounded-xl p-6 border border-mars-gold/40 hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl md:text-2xl font-bold text-mars-gold tracking-wide group-hover:text-white transition-colors mb-2">Certification</h3>
                      <p className="text-sm text-foreground/80">Verifiable seal on Stellar blockchain</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA y Misión */}
            <div className="space-y-6 mt-8">
              <div className="flex justify-center">
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('startValidation'))}
                  className="group relative bg-gradient-mars text-foreground px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300 mars-pulse shadow-2xl border-2 border-mars-gold/50 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mars-gold/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative z-10 tracking-wide">VALIDATE NOW</span>
                </button>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                  Transform your company into an ethical leader and access responsible capital
                </h2>
                
                <div className="p-4 bg-background/10 backdrop-blur-sm rounded-lg border border-mars-gold/20">
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    <strong className="text-mars-gold">Meridiani Planum</strong> on Mars inspires us: 
                    If we reach Mars it will be with ethical AI, or not at all. Our mission is to ensure 
                    every company uses AI responsibly, creating a better future for humanity.
                  </p>
                  <p className="text-sm text-mars-gold mt-2 font-bold">
                    (Built for Hack Meridian Stellar Hackathon - Ethical AI for humanity's future)
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-20 pt-8 border-t border-mars-gold/20">
              <p className="text-sm text-muted-foreground mb-4">
                Built for Hackathon Meridian - Stellar Blockchain
              </p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <span className="text-xs">Verifiable Blockchain</span>
                <span className="text-xs">•</span>
                <span className="text-xs">Continuous Audit</span>
                <span className="text-xs">•</span>
                <span className="text-xs">Certification</span>
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