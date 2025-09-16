import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Zap, 
  Award, 
  TrendingUp, 
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Globe
} from 'lucide-react';

interface ServicesImprovementProps {
  erpData: any;
  onSelectService: (service: any) => void;
}

const ServicesImprovement: React.FC<ServicesImprovementProps> = ({ erpData, onSelectService }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const improvementOptions = [
    {
      id: 'ai-area',
      title: 'Implementación de IA por área (Area-specific AI implementation)',
      description: 'Implementar soluciones de IA ética específicas para mejorar el rendimiento de áreas individuales (Deploy ethical AI solutions to improve individual area performance)',
      icon: Zap,
      areas: [
        { name: 'Tecnología - Automatización inteligente (Intelligent automation)', improvement: '+25 puntos rendimiento', cost: '15,000 XLM' },
        { name: 'RRHH - IA para gestión de talento (AI for talent management)', improvement: '+20 puntos rendimiento', cost: '12,000 XLM' },
        { name: 'Operaciones - Optimización predictiva (Predictive optimization)', improvement: '+15 puntos rendimiento', cost: '10,000 XLM' }
      ]
    },
    {
      id: 'cross-indicator',
      title: 'IA transversal empresarial (Enterprise-wide AI)',
      description: 'Implementar sistemas de IA que optimicen un aspecto específico a través de todas las áreas (Deploy AI systems that optimize specific aspects across all areas)',
      icon: TrendingUp,
      indicators: [
        { name: 'Análisis predictivo integral (Comprehensive predictive analytics)', improvement: 'Todas las áreas +30%', cost: '25,000 XLM' },
        { name: 'Sistemas de decisión inteligente (Intelligent decision systems)', improvement: 'Todas las áreas +25%', cost: '20,000 XLM' },
        { name: 'Automatización de procesos con IA (AI-powered process automation)', improvement: 'Todas las áreas +20%', cost: '18,000 XLM' }
      ]
    }
  ];

  const certifications = [
    {
      level: '50%',
      title: 'Certificación IA Responsable Básica (Basic Responsible AI Certification)',
      description: 'Estándar fundamental para implementación ética de IA (Fundamental standard for ethical AI implementation)',
      requirements: 'Rendimiento con IA ética ≥ 50% en todas las áreas',
      cost: '5,000 XLM',
      benefits: ['NFT de certificación', 'Sello verificable on-chain', 'Validez 1 año']
    },
    {
      level: '75%',
      title: 'Certificación IA Ética Avanzada (Advanced Ethical AI Certification)',
      description: 'Estándar superior para organizaciones líderes en IA responsable (Superior standard for responsible AI leaders)',
      requirements: 'Rendimiento con IA ética ≥ 75% en todas las áreas',
      cost: '12,000 XLM',
      benefits: ['NFT premium', 'Acceso a capital responsable', 'Validez 2 años', 'Auditoría continua']
    },
    {
      level: '100%',
      title: 'Certificación IA Ética Elite (Elite Ethical AI Certification)',
      description: 'Máximo estándar de excelencia en IA ética (Maximum standard of ethical AI excellence)',
      requirements: 'Rendimiento con IA ética = 100% en todas las áreas',
      cost: '25,000 XLM',
      benefits: ['NFT elite', 'Financiamiento preferencial', 'Validez 3 años', 'Consultoría estratégica']
    }
  ];

  const aiStrategies = [
    'Eliminación de sesgos con restricciones de equidad (Bias mitigation with fairness constraints)',
    'Protección de privacidad con técnicas avanzadas (Privacy protection with differential privacy)',
    'Entrenamiento ético con retroalimentación humana (Ethical training with human feedback - RLHF)',
    'Sistemas de información con total transparencia (Transparent information systems - RAG)',
    'Monitoreo continuo de calidad y equidad (Continuous quality and fairness monitoring)',
    'Pruebas de seguridad automatizadas (Automated security testing - Red-teaming)',
    'Fortalecimiento de datos y modelos (Data and model hardening)',
    'Control de acceso y segregación segura (Secure access control - RBAC)',
    'Evaluación continua con reglas por sector (Continuous evaluation with sector-specific rules)',
    'Evidencia automática en blockchain (Automatic blockchain evidence - Soroban integration)'
  ];

  const handleServiceSelect = (serviceId: string, details: any) => {
    setSelectedService(serviceId);
    onSelectService({ type: serviceId, details });
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Implementación de IA Ética
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Implementamos IA para mejorar sus indicadores empresariales. Además de las mejoras valiosas por sí mismas, 
            validamos éticamente el uso de IA, facilitando acceso a inversión y reduciendo riesgos. 
            El monitoreo se actualiza constantemente con nuevas regulaciones para rendimiento sostenible y mejora continua
            (We implement AI to improve business indicators with ethical validation for investment facilitation and continuous regulatory updates)
          </p>
        </div>

        {/* Opciones de Mejora */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {improvementOptions.map((option, index) => (
            <Card key={option.id} className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="mx-auto w-16 h-16 bg-gradient-mars rounded-full flex items-center justify-center mb-4">
                  <option.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-muted-foreground">{option.description}</p>
              </div>

              <div className="space-y-4">
                {'areas' in option && option.areas.map((area, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-background/10 rounded-lg">
                    <div>
                      <p className="font-semibold text-sm">{area.name}</p>
                      <p className="text-mars-gold text-sm">{area.improvement}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-mars-gold">{area.cost}</p>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleServiceSelect(option.id, area)}
                      >
                        Seleccionar
                      </Button>
                    </div>
                  </div>
                ))}

                {'indicators' in option && option.indicators.map((indicator, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-background/10 rounded-lg">
                    <div>
                      <p className="font-semibold text-sm">{indicator.name}</p>
                      <p className="text-mars-gold text-sm">{indicator.improvement}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-mars-gold">{indicator.cost}</p>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleServiceSelect(option.id, indicator)}
                      >
                        Seleccionar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certificaciones */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Certificaciones en IA Ética Disponibles
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className={`p-6 border-2 transition-all duration-300 ${
                cert.level === '100%' 
                  ? 'border-mars-gold bg-mars-gold/5 mars-glow' 
                  : 'border-border hover:border-mars-gold/50'
              }`}>
                <div className="text-center mb-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-mars-dark" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                  <p className="text-3xl font-bold text-mars-gold mb-2">{cert.level}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">Requisitos:</p>
                    <p className="text-xs text-muted-foreground">{cert.requirements}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">Beneficios:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {cert.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-mars-gold" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-2xl font-bold text-mars-gold mb-3">{cert.cost}</p>
                    <Button 
                      variant={cert.level === '100%' ? 'hero' : 'outline'} 
                      className="w-full"
                      onClick={() => handleServiceSelect('certification', cert)}
                    >
                      Obtener Certificación
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Estrategias de IA */}
        <Card className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-mars-gold" />
            Tecnologías de IA Ética Disponibles (Available Ethical AI Technologies)
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {aiStrategies.map((strategy, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-background/10 rounded-lg">
                <Shield className="w-5 h-5 text-mars-gold" />
                <span className="text-sm">{strategy}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Pool Stellar */}
        <Card className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm text-center">
          <div className="mb-6">
            <Globe className="w-16 h-16 text-mars-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Financiamiento con Stellar (Stellar-based Financing)</h3>
            <p className="text-muted-foreground">
              Aproveche las ventajas del ecosistema Stellar para financiar la implementación de IA ética (Leverage Stellar ecosystem advantages to fund ethical AI implementation)
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">Costos ultra bajos (Ultra-low costs)</p>
              <p className="text-muted-foreground">~0.00001 XLM por transacción</p>
            </div>
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">Procesamiento instantáneo (Instant processing)</p>
              <p className="text-muted-foreground">3-5 segundos</p>
            </div>
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">Total transparencia (Full transparency)</p>
              <p className="text-muted-foreground">Blockchain público</p>
            </div>
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">Pools de inversión (Investment pools)</p>
              <p className="text-muted-foreground">8-15% APY rendimiento</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServicesImprovement;