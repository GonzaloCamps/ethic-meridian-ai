import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Zap,
  Target,
  Award,
  FastForward,
  Activity
} from 'lucide-react';

interface MonitoringDashboardProps {
  selectedService: any;
  onCertificationReady: () => void;
}

const MonitoringDashboard: React.FC<MonitoringDashboardProps> = ({ selectedService, onCertificationReady }) => {
  const [timeProgress, setTimeProgress] = useState(0); // 0 a 100
  const [isAccelerating, setIsAccelerating] = useState(false);

  // Datos iniciales y finales de los indicadores
  const initialScores = {
    'Tecnología': 45,
    'RRHH': 52, 
    'Operaciones': 70,
    'Finanzas': 65,
    'Cumplimiento': 58,
    'Sostenibilidad': 55
  };

  const targetScores = {
    'Tecnología': 85,
    'RRHH': 88,
    'Operaciones': 92,
    'Finanzas': 87,
    'Cumplimiento': 90,
    'Sostenibilidad': 85
  };

  // Calcular scores actuales basado en el progreso temporal
  const getCurrentScores = () => {
    const current: { [key: string]: number } = {};
    Object.keys(initialScores).forEach(area => {
      const initial = initialScores[area as keyof typeof initialScores];
      const target = targetScores[area as keyof typeof targetScores];
      const progress = timeProgress / 100;
      current[area] = Math.round(initial + (target - initial) * progress);
    });
    return current;
  };

  const currentScores = getCurrentScores();
  const averageScore = Math.round(Object.values(currentScores).reduce((a: number, b: number) => a + b, 0) / Object.keys(currentScores).length);

  const daysRemaining = Math.round(45 * (1 - timeProgress / 100));
  const certificationLevel = averageScore >= 90 ? '100%' : averageScore >= 75 ? '75%' : '50%';

  const handleTimeAcceleration = () => {
    setIsAccelerating(true);
    const interval = setInterval(() => {
      setTimeProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAccelerating(false);
          setTimeout(() => onCertificationReady(), 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Monitor de Progreso
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Monitoreo de mejoras en indicadores empresariales implementando IA con enfoque ético. 
            Seguimiento continuo actualizado con nuevas regulaciones y prácticas recomendadas 
            para asegurar rendimiento sostenible y procesos de mejora permanentes
            (Monitoring business indicator improvements implementing AI with ethical approach and continuous regulatory updates)
          </p>
        </div>

        {/* Resumen de Progreso */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 border border-mars-gold/20 bg-card/30 backdrop-blur-sm text-center">
            <Activity className="w-12 h-12 text-mars-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Score Promedio</h3>
            <p className="text-3xl font-bold text-mars-gold">{averageScore}%</p>
          </Card>

          <Card className="p-6 border border-mars-gold/20 bg-card/30 backdrop-blur-sm text-center">
            <Clock className="w-12 h-12 text-mars-copper mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Días Restantes</h3>
            <p className="text-3xl font-bold text-mars-copper">{daysRemaining}</p>
          </Card>

          <Card className="p-6 border border-mars-gold/20 bg-card/30 backdrop-blur-sm text-center">
            <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Certificación</h3>
            <p className="text-3xl font-bold text-green-400">{certificationLevel}</p>
          </Card>

          <Card className="p-6 border border-mars-gold/20 bg-card/30 backdrop-blur-sm text-center">
            <TrendingUp className="w-12 h-12 text-mars-rust mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Progreso</h3>
            <p className="text-3xl font-bold text-mars-rust">{Math.round(timeProgress)}%</p>
          </Card>
        </div>

        {/* Barra de Progreso Temporal */}
        <Card className="p-8 mb-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Línea de Tiempo de Implementación</h3>
            {timeProgress < 100 && (
              <Button 
                variant="hero" 
                onClick={handleTimeAcceleration}
                disabled={isAccelerating}
                className="group"
              >
                <FastForward className="w-5 h-5 mr-2" />
                {isAccelerating ? 'Acelerando...' : 'Acelerar Tiempo'}
              </Button>
            )}
          </div>
          
          <div className="w-full bg-border rounded-full h-4 mb-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-gold transition-all duration-500 relative"
              style={{ width: `${timeProgress}%` }}
            >
              {isAccelerating && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              )}
            </div>
          </div>
          
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Inicio</span>
            <span>30 días</span>
            <span>45 días - Certificación</span>
          </div>
        </Card>

        {/* Hexágono de Progreso */}
        <Card className="p-8 mb-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Progreso por Área Organizacional</h3>
          
          <div className="relative w-80 h-80 mx-auto">
            {/* Niveles de referencia */}
            {[25, 50, 75, 100].map((level, index) => (
              <div
                key={level}
                className="absolute border border-mars-gold/20 rounded-full"
                style={{
                  width: `${level * 2.8}px`,
                  height: `${level * 2.8}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}

            {/* Puntos de áreas con animación */}
            {Object.entries(currentScores).map(([area, score], index) => {
              const numScore = Number(score);
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const radius = (numScore / 100) * 140;
              const x = 160 + radius * Math.cos(angle);
              const y = 160 + radius * Math.sin(angle);

              return (
                <div
                  key={area}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                  style={{ left: x, top: y }}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mars-glow transition-all duration-500 ${
                    numScore >= 85 ? 'bg-gradient-gold' : numScore >= 75 ? 'bg-gradient-mars' : 'bg-mars-rust'
                  }`}>
                    {numScore >= 85 ? (
                      <CheckCircle className="w-6 h-6 text-mars-dark" />
                    ) : (
                      <Zap className="w-6 h-6 text-foreground" />
                    )}
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                    <p className="text-xs font-semibold whitespace-nowrap">{area}</p>
                    <p className="text-xs text-mars-gold">{numScore}%</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Mejoras en Curso */}
        <Card className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6">Mejoras Implementándose</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-background/10 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${timeProgress > 30 ? 'bg-green-400' : 'bg-mars-gold animate-pulse'}`}></div>
                <div>
                  <p className="font-semibold">Mitigación de Sesgos</p>
                  <p className="text-sm text-muted-foreground">Implementando fairness constraints</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-background/10 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${timeProgress > 60 ? 'bg-green-400' : 'bg-mars-gold animate-pulse'}`}></div>
                <div>
                  <p className="font-semibold">Privacidad Diferencial</p>
                  <p className="text-sm text-muted-foreground">Protección avanzada de datos</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-background/10 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${timeProgress > 80 ? 'bg-green-400' : 'bg-mars-gold animate-pulse'}`}></div>
                <div>
                  <p className="font-semibold">Trazabilidad RAG</p>
                  <p className="text-sm text-muted-foreground">Sistema de trazabilidad completa</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-background/10 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${timeProgress > 90 ? 'bg-green-400' : 'bg-mars-gold animate-pulse'}`}></div>
                <div>
                  <p className="font-semibold">Integración Soroban</p>
                  <p className="text-sm text-muted-foreground">Evidencias automáticas blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Status de Certificación */}
        {timeProgress >= 100 && (
          <Card className="p-8 border-2 border-mars-gold bg-mars-gold/10 text-center mars-glow">
            <Award className="w-16 h-16 text-mars-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">¡Certificación Lista!</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Su organización ha alcanzado el nivel de certificación {certificationLevel}
            </p>
            <Button variant="stellar" size="lg" onClick={onCertificationReady}>
              Canjear NFT de Certificación
            </Button>
          </Card>
        )}
      </div>
    </section>
  );
};

export default MonitoringDashboard;