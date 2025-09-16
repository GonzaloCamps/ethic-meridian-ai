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
      title: 'Mejoras de IA por Área',
      description: 'Implementar IA específica para mejorar indicadores de áreas individuales',
      icon: Zap,
      areas: [
        { name: 'Tecnología - Sesgo Algorítmico', improvement: '+25 puntos', cost: '15,000 XLM' },
        { name: 'RRHH - Privacidad de Datos', improvement: '+20 puntos', cost: '12,000 XLM' },
        { name: 'Operaciones - Explicabilidad', improvement: '+15 puntos', cost: '10,000 XLM' }
      ]
    },
    {
      id: 'cross-indicator',
      title: 'Mejora de Indicador Transversal',
      description: 'Optimizar un indicador específico a través de todas las áreas organizacionales',
      icon: TrendingUp,
      indicators: [
        { name: 'Trazabilidad de Datos', improvement: 'Todas las áreas +30%', cost: '25,000 XLM' },
        { name: 'Seguridad/Abuso', improvement: 'Todas las áreas +25%', cost: '20,000 XLM' },
        { name: 'Explicabilidad', improvement: 'Todas las áreas +20%', cost: '18,000 XLM' }
      ]
    }
  ];

  const certifications = [
    {
      level: '50%',
      title: 'Certificación Básica',
      description: 'Cumplimiento mínimo para operaciones estándar',
      requirements: 'Score ético ≥ 50% en todas las áreas',
      cost: '5,000 XLM',
      benefits: ['NFT de certificación', 'Sello verificable on-chain', 'Validez 1 año']
    },
    {
      level: '75%',
      title: 'Certificación Avanzada',
      description: 'Estándar superior para organizaciones líderes',
      requirements: 'Score ético ≥ 75% en todas las áreas',
      cost: '12,000 XLM',
      benefits: ['NFT premium', 'Acceso a capital responsable', 'Validez 2 años', 'Auditoría continua']
    },
    {
      level: '100%',
      title: 'Certificación Elite',
      description: 'Máximo estándar de ética en IA',
      requirements: 'Score ético = 100% en todas las áreas',
      cost: '25,000 XLM',
      benefits: ['NFT elite', 'Financiamiento preferencial', 'Validez 3 años', 'Consultoría estratégica']
    }
  ];

  const aiStrategies = [
    'Mitigación de sesgos con fairness constraints',
    'Privacidad diferencial para protección de datos',
    'RLHF con restricciones éticas integradas',
    'RAG con trazabilidad completa de fuentes',
    'Monitoreo de deriva y fairness en producción',
    'Red-teaming automático de modelos',
    'Hardening de datasets y modelos',
    'RBAC y segregación de ambientes',
    'Evaluación continua con biblioteca de reglas por país/sector',
    'Integración con Soroban para evidencias automáticas'
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
              Servicios de Mejora
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seleccione el tipo de mejora que desea implementar para alcanzar la certificación ética deseada
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
              Certificaciones Disponibles
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
            Estrategias de IA Disponibles
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
            <h3 className="text-2xl font-bold mb-2">Sistema Financiero Stellar</h3>
            <p className="text-muted-foreground">
              Aproveche las ventajas del ecosistema Stellar para financiar sus mejoras
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">Bajas Comisiones</p>
              <p className="text-muted-foreground">~0.00001 XLM por transacción</p>
            </div>
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">Liquidación Rápida</p>
              <p className="text-muted-foreground">3-5 segundos</p>
            </div>
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">Transparencia</p>
              <p className="text-muted-foreground">Blockchain público</p>
            </div>
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">AMM/Pools</p>
              <p className="text-muted-foreground">8-15% APY rendimiento</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServicesImprovement;