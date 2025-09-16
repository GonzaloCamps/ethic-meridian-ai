import React, { useState } from 'react';
import MarsHero from '@/components/MarsHero';
import AgentSelector from '@/components/AgentSelector';
import Watermark from '@/components/Watermark';

const Index = () => {
  const [selectedAgent, setSelectedAgent] = useState<'ai' | 'human' | null>(null);

  const handleAgentSelect = (type: 'ai' | 'human') => {
    setSelectedAgent(type);
  };

  return (
    <div className="relative min-h-screen bg-background">
      <Watermark />
      <MarsHero />
      <AgentSelector onSelectAgent={handleAgentSelect} />
    </div>
  );
};

export default Index;
