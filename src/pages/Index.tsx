import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import MarsHero from '@/components/MarsHero';
import AgentSelector from '@/components/AgentSelector';
import ERPUpload from '@/components/ERPUpload';
import AnalysisDashboard from '@/components/AnalysisDashboard';
import ServicesImprovement from '@/components/ServicesImprovement';
import PaymentInterface from '@/components/PaymentInterface';
import Watermark from '@/components/Watermark';
import marsHero from '@/assets/mars-hero.jpg';
import marsMedium from '@/assets/mars-medium.jpg';
import marsClose from '@/assets/mars-close.jpg';
import marsTexture from '@/assets/mars-texture-detail.jpg';

type AppPhase = 'hero' | 'agent' | 'erp' | 'analysis' | 'services' | 'payment' | 'investment';

const Index = () => {
  const [currentPhase, setCurrentPhase] = useState<AppPhase>('hero');
  const [selectedAgent, setSelectedAgent] = useState<'ai' | 'human' | null>(null);
  const [erpData, setErpData] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<any>(null);

  const getBackgroundImage = () => {
    switch (currentPhase) {
      case 'hero': return marsHero;
      case 'agent': 
      case 'erp': return marsMedium;
      case 'analysis': return marsClose;
      case 'services':
      case 'payment':
      case 'investment': return marsTexture;
      default: return marsHero;
    }
  };

  const handleStartValidation = () => {
    setCurrentPhase('agent');
  };

  const handleAgentSelect = (type: 'ai' | 'human') => {
    setSelectedAgent(type);
    setCurrentPhase('erp');
  };

  const handleERPUploaded = (data: any) => {
    setErpData(data);
    setCurrentPhase('analysis');
  };

  const handleContinueToServices = () => {
    setCurrentPhase('services');
  };

  const handleSelectService = (service: any) => {
    setSelectedService(service);
    setCurrentPhase('payment');
  };

  const handlePaymentComplete = () => {
    setCurrentPhase('investment');
  };

  React.useEffect(() => {
    const handleStartValidation = () => {
      setCurrentPhase('agent');
    };

    window.addEventListener('startValidation', handleStartValidation);
    return () => window.removeEventListener('startValidation', handleStartValidation);
  }, []);

  return (
    <div 
      className="relative min-h-screen bg-background transition-all duration-1000"
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      <div className="absolute inset-0 bg-gradient-surface" />
      
      <Watermark />
      
      <div className="relative z-10">
        {/* Hero Section - Always visible con botón integrado */}
        <MarsHero />

        {/* Progressive Interfaces */}
        {currentPhase === 'agent' && (
          <AgentSelector onSelectAgent={handleAgentSelect} />
        )}

        {currentPhase === 'erp' && selectedAgent && (
          <ERPUpload 
            agentType={selectedAgent} 
            onERPUploaded={handleERPUploaded} 
          />
        )}

        {currentPhase === 'analysis' && erpData && (
          <AnalysisDashboard 
            erpData={erpData} 
            onContinue={handleContinueToServices}
          />
        )}

        {currentPhase === 'services' && (
          <ServicesImprovement 
            erpData={erpData}
            onSelectService={handleSelectService}
          />
        )}

        {currentPhase === 'payment' && selectedService && (
          <PaymentInterface 
            selectedService={selectedService}
            onPaymentComplete={handlePaymentComplete}
          />
        )}

        {currentPhase === 'investment' && (
          <div className="py-20 text-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-mars-gold mb-6">
                🚀 Implementación Iniciada
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Su proyecto de mejora de IA ética ha sido conectado con inversionistas. 
                El proceso de implementación comenzará en las próximas 48 horas.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-card/30 backdrop-blur-sm border border-mars-gold/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Próximos Pasos</h3>
                  <p className="text-sm text-muted-foreground">Nuestro equipo se pondrá en contacto para coordinar la implementación</p>
                </div>
                <div className="bg-card/30 backdrop-blur-sm border border-mars-gold/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Monitoreo</h3>
                  <p className="text-sm text-muted-foreground">Acceso al dashboard de progreso en tiempo real</p>
                </div>
                <div className="bg-card/30 backdrop-blur-sm border border-mars-gold/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Certificación</h3>
                  <p className="text-sm text-muted-foreground">NFT de certificación tras completar mejoras</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
