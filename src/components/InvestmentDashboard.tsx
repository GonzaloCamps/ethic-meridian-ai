import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Zap
} from 'lucide-react';

interface InvestmentDashboardProps {
  selectedService: any;
  onFundingComplete: () => void;
}

const InvestmentDashboard: React.FC<InvestmentDashboardProps> = ({ selectedService, onFundingComplete }) => {
  const [fundingProgress, setFundingProgress] = useState(0);
  const [investors, setInvestors] = useState<any[]>([]);
  const [isTimeAccelerated, setIsTimeAccelerated] = useState(false);
  
  const targetAmount = parseInt(selectedService?.details?.cost?.replace(/[^\d]/g, '') || '15000') * 2.5;
  const currentAmount = (fundingProgress / 100) * targetAmount;

  const potentialInvestors = [
    { name: 'Fund Verde Capital', amount: 8500, risk: 'low', commitment: 'Sostenibilidad' },
    { name: 'TechEth Ventures', amount: 12000, risk: 'medium', commitment: 'IA Ética' },
    { name: 'Stellar Growth Fund', amount: 6500, risk: 'low', commitment: 'Blockchain' },
    { name: 'Impact AI Partners', amount: 15000, risk: 'medium', commitment: 'Impacto Social' },
    { name: 'Mars Innovation VC', amount: 9500, risk: 'medium', commitment: 'Innovación' }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isTimeAccelerated && fundingProgress < 100) {
      interval = setInterval(() => {
        setFundingProgress(prev => {
          const newProgress = Math.min(prev + Math.random() * 8 + 2, 100);
          
          // Agregar nuevos inversionistas progresivamente
          if (newProgress > prev + 5) {
            const availableInvestors = potentialInvestors.filter(
              inv => !investors.find(existing => existing.name === inv.name)
            );
            
            if (availableInvestors.length > 0) {
              const randomInvestor = availableInvestors[Math.floor(Math.random() * availableInvestors.length)];
              setInvestors(current => [...current, {
                ...randomInvestor,
                investedAt: new Date().toLocaleString()
              }]);
            }
          }
          
          return newProgress;
        });
      }, 800);
    }
    
    return () => clearInterval(interval);
  }, [isTimeAccelerated, fundingProgress, investors, potentialInvestors]);

  const handleAccelerateTime = () => {
    setIsTimeAccelerated(true);
  };

  const handleProceedToImplementation = () => {
    onFundingComplete();
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Búsqueda de Financiamiento
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conectando con inversionistas del mercado primario especializados en IA ética (Connecting with primary market investors specialized in ethical AI)
          </p>
        </div>

        {/* Progress del Financiamiento */}
        <Card className="p-8 mb-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-mars-gold mb-2">
                {currentAmount.toLocaleString()} XLM
              </div>
              <p className="text-sm text-muted-foreground">
                Recaudado hasta ahora (Raised so far)
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">
                {targetAmount.toLocaleString()} XLM
              </div>
              <p className="text-sm text-muted-foreground">
                Meta de financiamiento (Funding target)
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {Math.round(fundingProgress)}%
              </div>
              <p className="text-sm text-muted-foreground">
                Progreso completado (Progress completed)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span>Progreso de financiamiento (Funding progress)</span>
              <span>{Math.round(fundingProgress)}% / 100%</span>
            </div>
            <Progress value={fundingProgress} className="h-4" />
          </div>

          {fundingProgress < 100 && (
            <div className="text-center mt-6">
              {!isTimeAccelerated ? (
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handleAccelerateTime}
                  className="group"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  Acelerar búsqueda de inversionistas (Accelerate investor search)
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              ) : (
                <div className="flex items-center justify-center gap-2 text-mars-gold">
                  <Clock className="w-5 h-5 animate-spin" />
                  <span>Buscando inversionistas activamente... (Actively searching for investors...)</span>
                </div>
              )}
            </div>
          )}

          {fundingProgress >= 100 && (
            <div className="text-center mt-6">
              <div className="mb-4 p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-green-400">¡Financiamiento Completado!</h3>
                <p className="text-sm text-muted-foreground">
                  Se ha alcanzado el 100% del objetivo de financiamiento (100% funding target achieved)
                </p>
              </div>
              <Button 
                variant="stellar" 
                size="lg" 
                onClick={handleProceedToImplementation}
                className="group"
              >
                Proceder a la Implementación de IA (Proceed to AI Implementation)
                <Zap className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </Card>

        {/* Lista de Inversionistas */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-mars-gold" />
              Inversionistas Confirmados (Confirmed Investors)
            </h3>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {investors.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Esperando primeros inversionistas... (Waiting for first investors...)
                </p>
              ) : (
                investors.map((investor, index) => (
                  <div key={index} className="p-4 bg-background/10 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{investor.name}</h4>
                      <span className="text-mars-gold font-bold">{investor.amount.toLocaleString()} XLM</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Enfoque: {investor.commitment}</span>
                      <span className="text-xs text-muted-foreground">{investor.investedAt}</span>
                    </div>
                    <div className="mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        investor.risk === 'low' ? 'bg-green-400/20 text-green-400' : 'bg-mars-gold/20 text-mars-gold'
                      }`}>
                        Riesgo {investor.risk === 'low' ? 'Bajo' : 'Medio'}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </Card>

          <Card className="p-6 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-mars-gold" />
              Detalles del Proyecto (Project Details)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Implementación Seleccionada:</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedService?.details?.name || 'Mejora de IA ética'}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Retorno Esperado (Expected Return):</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedService?.details?.improvement || '+25 puntos'} en rendimiento
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cronograma (Timeline):</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Financiamiento:</span>
                    <span className="text-green-400">✓ Completado</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Implementación:</span>
                    <span className="text-mars-gold">30-60 días</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monitoreo:</span>
                    <span className="text-muted-foreground">Continuo</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Modalidad de Pago (Payment Structure):</h4>
                <p className="text-sm text-muted-foreground">
                  Formato vesting: 6, 12, 24 meses (Vesting format: 6, 12, 24 months)
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Beneficios para Inversionistas */}
        <Card className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-mars-gold" />
            ¿Por qué invierten en IA ética? (Why invest in ethical AI?)
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-mars-gold mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Rentabilidad Sostenible</h4>
              <p className="text-sm text-muted-foreground">
                Mayor ROI a largo plazo con prácticas éticas (Higher long-term ROI with ethical practices)
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Cumplimiento Regulatorio</h4>
              <p className="text-sm text-muted-foreground">
                Anticipación a regulaciones futuras (Future regulation compliance)
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-mars-copper mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Impacto Positivo</h4>
              <p className="text-sm text-muted-foreground">
                Inversión con propósito e impacto social (Purpose-driven investment with social impact)
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InvestmentDashboard;