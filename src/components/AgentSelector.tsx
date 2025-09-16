import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bot, User, Sparkles, MessageCircle } from 'lucide-react';

interface AgentSelectorProps {
  onSelectAgent: (type: 'ai' | 'human') => void;
}

const AgentSelector: React.FC<AgentSelectorProps> = ({ onSelectAgent }) => {
  const [selectedAgent, setSelectedAgent] = useState<'ai' | 'human' | null>(null);

  const handleAgentSelect = (type: 'ai' | 'human') => {
    setSelectedAgent(type);
    onSelectAgent(type);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Select Your Agent
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose who will guide you through the ethical validation process
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* AI Agent */}
          <Card className={`p-8 border-2 transition-all duration-300 cursor-pointer ${
            selectedAgent === 'ai' 
              ? 'border-mars-gold bg-card mars-glow scale-105' 
              : 'border-border hover:border-mars-gold/50 hover:bg-card/80'
          }`} onClick={() => handleAgentSelect('ai')}>
            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-gradient-mars rounded-full flex items-center justify-center mars-pulse">
                <Bot className="w-10 h-10 text-foreground" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
                  AI Agent
                  <Sparkles className="w-5 h-5 text-mars-gold" />
                </h3>
                <p className="text-muted-foreground mb-6">
                  AI specialized in ethical validation. Instant analysis and available 24/7.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full" />
                  Instant ERP analysis
                </div>
                <div className="flex items-center gap-2 text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full" />
                  Automatic report generation
                </div>
                <div className="flex items-center gap-2 text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full" />
                  Personalized recommendations
                </div>
              </div>

              <Button 
                variant={selectedAgent === 'ai' ? 'hero' : 'outline'} 
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAgentSelect('ai');
                }}
              >
                Select AI Agent
              </Button>
            </div>
          </Card>

          {/* Human Agent */}
          <Card className={`p-8 border-2 transition-all duration-300 cursor-pointer ${
            selectedAgent === 'human' 
              ? 'border-mars-gold bg-card mars-glow scale-105' 
              : 'border-border hover:border-mars-gold/50 hover:bg-card/80'
          }`} onClick={() => handleAgentSelect('human')}>
            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-mars-dark" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
                  Human Agent
                  <MessageCircle className="w-5 h-5 text-mars-copper" />
                </h3>
                <p className="text-muted-foreground mb-6">
                  Human expert in AI ethics. Personalized consultation and contextual analysis.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-mars-copper">
                  <div className="w-2 h-2 bg-mars-copper rounded-full" />
                  Personalized consultation
                </div>
                <div className="flex items-center gap-2 text-mars-copper">
                  <div className="w-2 h-2 bg-mars-copper rounded-full" />
                  Regulatory expertise
                </div>
                <div className="flex items-center gap-2 text-mars-copper">
                  <div className="w-2 h-2 bg-mars-copper rounded-full" />
                  Strategic support
                </div>
              </div>

              <Button 
                variant={selectedAgent === 'human' ? 'stellar' : 'outline'} 
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAgentSelect('human');
                }}
              >
                Select Human Agent
              </Button>
            </div>
          </Card>
        </div>

        {selectedAgent && (
          <div className="mt-12 text-center">
            <div className="bg-card/30 backdrop-blur-sm border border-mars-gold/20 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold mb-2">
                {selectedAgent === 'ai' ? 'AI Agent Activated' : 'Connecting with Human Expert'}
              </h4>
              <p className="text-muted-foreground">
                {selectedAgent === 'ai' 
                  ? 'Your artificial agent is ready to process your ERP and begin ethical validation.'
                  : 'A human expert will connect shortly to assist you with your validation process.'
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AgentSelector;