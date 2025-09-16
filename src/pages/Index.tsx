import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import MarsHero from '@/components/MarsHero';
import AgentSelector from '@/components/AgentSelector';
import ERPUpload from '@/components/ERPUpload';
import AnalysisDashboard from '@/components/AnalysisDashboard';
import ServicesImprovement from '@/components/ServicesImprovement';
import PaymentInterface from '@/components/PaymentInterface';
import MonitoringDashboard from '@/components/MonitoringDashboard';
import CertificationComplete from '@/components/CertificationComplete';
import InvestmentDashboard from '@/components/InvestmentDashboard';
import FoundersPage from '@/components/FoundersPage';
import Watermark from '@/components/Watermark';
import marsHero from '@/assets/mars-hero.jpg';
import marsMedium from '@/assets/mars-medium.jpg';
import marsClose from '@/assets/mars-close.jpg';
import marsTexture from '@/assets/mars-texture-detail.jpg';

type AppPhase = 'hero' | 'agent' | 'erp' | 'analysis' | 'services' | 'payment' | 'investment' | 'monitoring' | 'certification' | 'founders' | 'complete';

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
      case 'investment':
      case 'monitoring': return marsTexture;
      case 'certification': return marsTexture;
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

  const handleFundingComplete = () => {
    setCurrentPhase('monitoring');
  };

  const handleCertificationReady = () => {
    setCurrentPhase('certification');
  };

  const handleCertificationComplete = () => {
    setCurrentPhase('founders');
  };

  const handleFoundersComplete = () => {
    setCurrentPhase('complete');
  };

  const handleRestart = () => {
    setCurrentPhase('hero');
    setSelectedAgent(null);
    setErpData(null);
    setSelectedService(null);
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
      
      <Watermark showEthicAILogo={currentPhase !== 'hero'} />
      
      <div className="relative z-10">
        {/* Hero Section - visible solo en fase hero */}
        {currentPhase === 'hero' && <MarsHero />}

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

        {currentPhase === 'investment' && selectedService && (
          <InvestmentDashboard 
            selectedService={selectedService}
            onFundingComplete={handleFundingComplete}
          />
        )}

        {currentPhase === 'monitoring' && (
          <MonitoringDashboard 
            selectedService={selectedService}
            onCertificationReady={handleCertificationReady}
          />
        )}

        {currentPhase === 'certification' && (
          <CertificationComplete 
            certificationLevel="75%"
            onRestart={handleCertificationComplete}
          />
        )}

        {currentPhase === 'founders' && (
          <FoundersPage onContinue={handleFoundersComplete} />
        )}

        {currentPhase === 'complete' && (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Thank You for Your Journey
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                You've completed the EthicAI Validator experience. Ready to start another validation?
              </p>
              <button 
                onClick={handleRestart}
                className="group relative bg-gradient-mars text-foreground px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300 mars-pulse shadow-2xl border-2 border-mars-gold/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mars-gold/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10 tracking-wide">START NEW VALIDATION</span>
              </button>
            </div>
          </div>
        )}

        {/* Stellar Security Section - Always visible at the bottom */}
        {currentPhase !== 'hero' && currentPhase !== 'founders' && currentPhase !== 'complete' && (
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/30 backdrop-blur-sm border border-mars-gold/20 rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 text-mars-gold mt-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Stellar Blockchain Security</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• <strong>SHA-256 Hash</strong> evidence for integrity</p>
                      <p>• <strong>On-chain anchoring</strong> of results in Stellar</p>
                      <p>• <strong>Privacy by-design:</strong> No PII exposed in clear text</p>
                      <p>• <strong>KYC/AML</strong> integrated when applicable</p>
                      <p>• <strong>Soroban contracts</strong> for automatic scoring calculation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Index;
