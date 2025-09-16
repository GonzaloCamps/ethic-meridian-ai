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
import ethicaiLogo from '@/assets/ethicai-logo.png';

interface AnalysisDashboardProps {
  erpData: any;
  onContinue: () => void;
}

const AnalysisDashboard: React.FC<AnalysisDashboardProps> = ({ erpData, onContinue }) => {
  // Simulated performance analysis data
  const overallPerformance = 58;
  const aiPotentialBonus = 32; // AI potential
  const totalPotential = overallPerformance + aiPotentialBonus;

  const areas = [
    { name: 'Finance', score: 65, potential: 'medium', description: 'Predictive analytics to optimize cash flow' },
    { name: 'HR', score: 52, potential: 'high', description: 'AI for recruitment and talent retention' },
    { name: 'Operations', score: 70, potential: 'medium', description: 'Manual process automation' },
    { name: 'Technology', score: 45, potential: 'high', description: 'AI infrastructure modernization' },
    { name: 'Compliance', score: 58, potential: 'high', description: 'Automated regulatory monitoring' },
    { name: 'Sustainability', score: 55, potential: 'high', description: 'Energy optimization with ML' }
  ];

  const performanceIndicators = [
    { name: 'Productividad (Efficiency Score)', value: 62, trend: 'down' },
    { name: 'Satisfacción Cliente (NPS Score)', value: 48, trend: 'down' },
    { name: 'Calidad Procesos (Quality Index)', value: 71, trend: 'stable' },
    { name: 'Innovación (Innovation Rate)', value: 54, trend: 'down' },
    { name: 'Rentabilidad (ROI)', value: 68, trend: 'stable' },
    { name: 'Tiempo Respuesta (Response Time)', value: 57, trend: 'down' }
  ];

  const stellarPool = {
    collateral: 50000, // XLM
    apy: 12.5,
    returns: 6250
  };

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-mars-gold';
      case 'high': return 'text-mars-crimson';
      default: return 'text-muted-foreground';
    }
  };

  const getPotentialIcon = (potential: string) => {
    switch (potential) {
      case 'low': return CheckCircle;
      case 'medium': return TrendingUp;
      case 'high': return Zap;
      default: return Shield;
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src={ethicaiLogo} 
              alt="EthicAI Validator" 
              className="h-20 w-auto floating opacity-90"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Performance Analysis
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We integrate AI ethically to elevate performance and attract reliable investment.
          </p>
        </div>

        {/* Score Principal */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 col-span-2 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold">Global Performance with AI</h3>
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
                    strokeDasharray={`${(totalPotential / 130) * 440} 440`}
                    strokeLinecap="round"
                    transform="rotate(-90 80 80)"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-mars-gold">{totalPotential}</span>
                  <span className="text-sm text-muted-foreground">/ 130</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-lg">
                  Current performance: <span className="text-mars-gold font-semibold">{overallPerformance}/100</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Ethical AI potential: <span className="text-green-400">+{aiPotentialBonus}</span>
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-mars-gold" />
              Available Funding
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Available investment for AI implementation</p>
                <p className="text-2xl font-bold text-mars-gold">{stellarPool.collateral.toLocaleString()} USDC</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Expected ROI with improvements</p>
                <p className="text-lg font-semibold text-green-400">5% APY</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Expected annual earnings</p>
                <p className="text-lg font-semibold">Company expected to earn {Math.round(stellarPool.returns * 0.5).toLocaleString()} USDC more per year.</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Hexágono de Áreas */}
        <Card className="p-8 mb-12 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-8 text-center">Area Evaluation with AI Potential</h3>
          <p className="text-center text-muted-foreground mb-8">Performance by area with AI improvement opportunities</p>
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
              const PotentialIcon = getPotentialIcon(area.potential);

              return (
                <div
                  key={area.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: x, top: y }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-mars rounded-full flex items-center justify-center mars-glow group-hover:scale-110 transition-transform">
                      <PotentialIcon className={`w-6 h-6 ${getPotentialColor(area.potential)}`} />
                    </div>
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center w-32">
                      <p className="text-xs font-semibold whitespace-nowrap">{area.name}</p>
                      <p className="text-xs text-mars-gold">{area.score}% performance</p>
                      <p className="text-xs text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Indicadores de Rendimiento */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {performanceIndicators.map((indicator, index) => (
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

        {/* Identified AI Opportunities */}
        <Card className="p-8 mb-8 border border-mars-crimson/20 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-mars-gold" />
            Highest Impact Opportunities
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-mars-crimson mt-1" />
                <div>
                  <h4 className="font-semibold">Technology - Intelligent Automation</h4>
                  <p className="text-sm text-muted-foreground">Performance: 45% - Implement transparent AI</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-mars-gold mt-1" />
                <div>
                  <h4 className="font-semibold">HR - Responsible Talent Management</h4>
                  <p className="text-sm text-muted-foreground">Performance: 52% - Bias-free systems</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-mars-gold mt-1" />
                <div>
                  <h4 className="font-semibold">Transparent Predictive Analytics</h4>
                  <p className="text-sm text-muted-foreground">Explainable analysis with complete traceability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-mars-gold mt-1" />
                <div>
                  <h4 className="font-semibold">Auditable Decision Systems</h4>
                  <p className="text-sm text-muted-foreground">MLOps with versioning and continuous monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Botón Continuar */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={onContinue} className="group">
            Explore Implementation
            <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnalysisDashboard;