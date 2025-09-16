import React, { useState } from 'react';
import MarsHero from '@/components/MarsHero';
import AgentSelector from '@/components/AgentSelector';
import ERPUpload from '@/components/ERPUpload';
import AnalysisDashboard from '@/components/AnalysisDashboard';
import Watermark from '@/components/Watermark';

type AppPhase = 'landing' | 'agent-selection' | 'erp-upload' | 'analysis' | 'services';

const Index = () => {
  const [currentPhase, setCurrentPhase] = useState<AppPhase>('landing');
  const [selectedAgent, setSelectedAgent] = useState<'ai' | 'human' | null>(null);
  const [erpData, setErpData] = useState<any>(null);

  const handleAgentSelect = (type: 'ai' | 'human') => {
    setSelectedAgent(type);
    // Avanzar automáticamente después de 2 segundos
    setTimeout(() => {
      setCurrentPhase('erp-upload');
    }, 2000);
  };

  const handleERPUploaded = (data: any) => {
    setErpData(data);
    // Avanzar automáticamente al análisis
    setTimeout(() => {
      setCurrentPhase('analysis');
    }, 1000);
  };

  const handleContinueToServices = () => {
    setCurrentPhase('services');
  };

  const renderPhase = () => {
    switch (currentPhase) {
      case 'landing':
        return (
          <>
            <MarsHero />
            <div className="py-8">
              <div className="text-center">
                <button 
                  onClick={() => setCurrentPhase('agent-selection')}
                  className="bg-gradient-hero text-foreground px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform mars-glow"
                >
                  Comenzar Validación Ética
                </button>
              </div>
            </div>
          </>
        );
      
      case 'agent-selection':
        return <AgentSelector onSelectAgent={handleAgentSelect} />;
      
      case 'erp-upload':
        return selectedAgent ? (
          <ERPUpload 
            agentType={selectedAgent} 
            onERPUploaded={handleERPUploaded} 
          />
        ) : null;
      
      case 'analysis':
        return erpData ? (
          <AnalysisDashboard 
            erpData={erpData} 
            onContinue={handleContinueToServices}
          />
        ) : null;
      
      case 'services':
        return (
          <div className="py-20 text-center">
            <h2 className="text-4xl font-bold text-mars-gold mb-6">
              Servicios de Mejora
            </h2>
            <p className="text-xl text-muted-foreground">
              Próximamente: Opciones de mejora con IA y certificaciones
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      <Watermark />
      {renderPhase()}
    </div>
  );
};

export default Index;
