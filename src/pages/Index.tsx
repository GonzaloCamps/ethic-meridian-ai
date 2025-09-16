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
import Watermark from '@/components/Watermark';
import marsHero from '@/assets/mars-hero.jpg';
import marsMedium from '@/assets/mars-medium.jpg';
import marsClose from '@/assets/mars-close.jpg';
import marsTexture from '@/assets/mars-texture-detail.jpg';

type AppPhase = 'hero' | 'agent' | 'erp' | 'analysis' | 'services' | 'payment' | 'monitoring' | 'certification';

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
    setCurrentPhase('monitoring');
  };

  const handleCertificationReady = () => {
    setCurrentPhase('certification');
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
      
      <Watermark />
      
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

        {currentPhase === 'monitoring' && (
          <MonitoringDashboard 
            selectedService={selectedService}
            onCertificationReady={handleCertificationReady}
          />
        )}

        {currentPhase === 'certification' && (
          <CertificationComplete 
            certificationLevel="75%"
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
