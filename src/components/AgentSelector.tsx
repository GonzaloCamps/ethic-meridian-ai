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
              Seleccione su Agente
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elija quién le guiará en el proceso de validación ética
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
                  Agente Artificial
                  <Sparkles className="w-5 h-5 text-mars-gold" />
                </h3>
                <p className="text-muted-foreground mb-6">
                  IA especializada en validación ética. Análisis instantáneo y disponible 24/7.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full" />
                  Análisis instantáneo de ERPs
                </div>
                <div className="flex items-center gap-2 text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full" />
                  Generación automática de reportes
                </div>
                <div className="flex items-center gap-2 text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full" />
                  Recomendaciones personalizadas
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
                Seleccionar Agente IA
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
                  Agente Humano
                  <MessageCircle className="w-5 h-5 text-mars-copper" />
                </h3>
                <p className="text-muted-foreground mb-6">
                  Experto humano en ética IA. Consulta personalizada y análisis contextual.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-mars-copper">
                  <div className="w-2 h-2 bg-mars-copper rounded-full" />
                  Consulta personalizada
                </div>
                <div className="flex items-center gap-2 text-mars-copper">
                  <div className="w-2 h-2 bg-mars-copper rounded-full" />
                  Experiencia en regulaciones
                </div>
                <div className="flex items-center gap-2 text-mars-copper">
                  <div className="w-2 h-2 bg-mars-copper rounded-full" />
                  Soporte estratégico
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
                Seleccionar Agente Humano
              </Button>
            </div>
          </Card>
        </div>

        {selectedAgent && (
          <div className="mt-12 text-center">
            <div className="bg-card/30 backdrop-blur-sm border border-mars-gold/20 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold mb-2">
                {selectedAgent === 'ai' ? 'Agente IA Activado' : 'Conectando con Experto Humano'}
              </h4>
              <p className="text-muted-foreground">
                {selectedAgent === 'ai' 
                  ? 'Su agente artificial está listo para procesar su ERP y comenzar la validación ética.'
                  : 'Un experto humano se conectará en breve para asistirle con su proceso de validación.'
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