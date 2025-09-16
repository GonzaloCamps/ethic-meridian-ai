import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp, 
  Eye,
  Lock,
  Zap,
  Globe
} from 'lucide-react';

interface AnalysisDashboardProps {
  erpData: any;
  onContinue: () => void;
}

const AnalysisDashboard: React.FC<AnalysisDashboardProps> = ({ erpData, onContinue }) => {
  // Datos simulados del análisis
  const ethicalScore = 75;
  const bonusScore = 25; // Por leyes futuras
  const totalScore = ethicalScore + bonusScore;

  const areas = [
    { name: 'Finanzas', score: 85, risk: 'low' },
    { name: 'RRHH', score: 70, risk: 'medium' },
    { name: 'Operaciones', score: 90, risk: 'low' },
    { name: 'Tecnología', score: 60, risk: 'high' },
    { name: 'Cumplimiento', score: 80, risk: 'medium' },
    { name: 'Sostenibilidad', score: 75, risk: 'medium' }
  ];

  const indicators = [
    { name: 'Privacidad/PII', value: 82, trend: 'up' },
    { name: 'Sesgo Algorítmico', value: 68, trend: 'down' },
    { name: 'Trazabilidad', value: 91, trend: 'up' },
    { name: 'Explicabilidad', value: 74, trend: 'stable' },
    { name: 'Seguridad', value: 88, trend: 'up' },
    { name: 'Continuidad/DRP', value: 77, trend: 'stable' }
  ];

  const stellarPool = {
    collateral: 50000, // XLM
    apy: 12.5,
    returns: 6250
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-mars-gold';
      case 'high': return 'text-mars-crimson';
      default: return 'text-muted-foreground';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return CheckCircle;
      case 'medium': return AlertTriangle;
      case 'high': return AlertTriangle;
      default: return Shield;
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Análisis Ético
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Resultado del análisis de su ERP con indicadores de ética en IA
          </p>
        </div>

        {/* Score Principal */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 col-span-2 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Score Ético Total</h3>
              <div className="relative w-40 h-40 mx-auto">
                <svg className="w-full h-full" viewBox="0 0 160 160">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="10"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="hsl(var(--mars-gold))"
                    strokeWidth="10"
                    strokeDasharray={`${(totalScore / 130) * 440} 440`}
                    strokeLinecap="round"
                    transform="rotate(-90 80 80)"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-mars-gold">{totalScore}</span>
                  <span className="text-sm text-muted-foreground">/ 130</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-lg">
                  Base: <span className="text-mars-gold font-semibold">{ethicalScore}/100</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Bono leyes futuras: <span className="text-green-400">+{bonusScore}</span>
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-mars-gold" />
              Pool Stellar XLM
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Colateral Requerido</p>
                <p className="text-2xl font-bold text-mars-gold">{stellarPool.collateral.toLocaleString()} XLM</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rentabilidad Anual</p>
                <p className="text-lg font-semibold text-green-400">{stellarPool.apy}% APY</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Retorno Estimado</p>
                <p className="text-lg font-semibold">+{stellarPool.returns.toLocaleString()} XLM/año</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Hexágono de Áreas */}
        <Card className="p-8 mb-12 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Mapa de Áreas Organizacionales</h3>
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
              >
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
                  {level}%
                </span>
              </div>
            ))}
            
            {/* Área de 130% */}
            <div
              className="absolute border-2 border-mars-gold/40 rounded-full bg-mars-gold/5"
              style={{
                width: '364px',
                height: '364px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(1px)',
              }}
            />

            {/* Puntos de áreas */}
            {areas.map((area, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const radius = (area.score / 100) * 140;
              const x = 160 + radius * Math.cos(angle);
              const y = 160 + radius * Math.sin(angle);
              const RiskIcon = getRiskIcon(area.risk);

              return (
                <div
                  key={area.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: x, top: y }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-mars rounded-full flex items-center justify-center mars-glow group-hover:scale-110 transition-transform">
                      <RiskIcon className={`w-6 h-6 ${getRiskColor(area.risk)}`} />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                      <p className="text-xs font-semibold whitespace-nowrap">{area.name}</p>
                      <p className="text-xs text-mars-gold">{area.score}%</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Indicadores Adicionales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {indicators.map((indicator, index) => (
            <Card key={index} className="p-6 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{indicator.name}</h4>
                <TrendingUp className={`w-5 h-5 ${
                  indicator.trend === 'up' ? 'text-green-400' : 
                  indicator.trend === 'down' ? 'text-mars-crimson' : 
                  'text-muted-foreground'
                }`} />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-border rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-gold transition-all duration-1000"
                    style={{ width: `${indicator.value}%` }}
                  />
                </div>
                <span className="text-lg font-bold text-mars-gold">{indicator.value}%</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Áreas de Mejora */}
        <Card className="p-8 mb-8 border border-mars-crimson/20 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-mars-gold" />
            Áreas de Mejora Identificadas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-mars-crimson mt-1" />
                <div>
                  <h4 className="font-semibold">Tecnología - Sesgo Algorítmico</h4>
                  <p className="text-sm text-muted-foreground">Score: 60% - Requiere implementación de fairness ML</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-mars-gold mt-1" />
                <div>
                  <h4 className="font-semibold">RRHH - Privacidad de Datos</h4>
                  <p className="text-sm text-muted-foreground">Score: 70% - Mejoras en anonimización requeridas</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-mars-gold mt-1" />
                <div>
                  <h4 className="font-semibold">Explicabilidad General</h4>
                  <p className="text-sm text-muted-foreground">Implementar LIME/SHAP para transparencia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-mars-gold mt-1" />
                <div>
                  <h4 className="font-semibold">Trazabilidad de Modelos</h4>
                  <p className="text-sm text-muted-foreground">MLOps y versionado de datasets requerido</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Botón Continuar */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={onContinue} className="group">
            Explorar Servicios de Mejora
            <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnalysisDashboard;