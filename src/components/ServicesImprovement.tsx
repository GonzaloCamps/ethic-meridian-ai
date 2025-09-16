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
import ethicaiLogo from '@/assets/ethicai-logo.png';

interface ServicesImprovementProps {
  erpData: any;
  onSelectService: (service: any) => void;
}

const ServicesImprovement: React.FC<ServicesImprovementProps> = ({ erpData, onSelectService }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const improvementOptions = [
    {
      id: 'ai-area',
      title: 'Area-specific AI Implementation',
      description: 'Deploy AI solutions for individual areas',
      icon: Zap,
      areas: [
        { name: 'Technology - Intelligent Automation', improvement: '+25 performance points', cost: '7,500 USDC' },
        { name: 'HR - AI for Talent Management', improvement: '+20 performance points', cost: '6,000 USDC' },
        { name: 'Operations - Predictive Optimization', improvement: '+15 performance points', cost: '5,000 USDC' }
      ]
    },
    {
      id: 'cross-indicator',
      title: 'Enterprise-wide AI',
      description: 'Deploy AI systems that optimize specific aspects across all areas',
      icon: TrendingUp,
      indicators: [
        { name: 'Comprehensive Predictive Analytics', improvement: 'All areas +30%', cost: '12,500 USDC' },
        { name: 'Intelligent Decision Systems', improvement: 'All areas +25%', cost: '10,000 USDC' },
        { name: 'AI-powered Process Automation', improvement: 'All areas +20%', cost: '9,000 USDC' }
      ]
    }
  ];

  const certifications = [
    {
      level: '50%',
      title: 'Basic Responsible AI Certification',
      description: 'Fundamental standard for responsible AI',
      requirements: 'Improved performance ≥ 50% in all areas',
      cost: '2,500 USDC',
      benefits: ['Certification NFT', 'Verifiable on-chain seal', '1 year validity']
    },
    {
      level: '75%',
      title: 'Advanced Business AI Certification',
      description: 'Superior standard for leaders',
      requirements: 'Improved performance ≥ 75% in all areas',
      cost: '6,000 USDC',
      benefits: ['Premium NFT', 'Access to responsible capital', '2 year validity', 'Continuous auditing']
    },
    {
      level: '100%',
      title: 'Elite Business AI Certification',
      description: 'Maximum standard of business excellence',
      requirements: 'Improved performance = 100% in all areas',
      cost: '12,500 USDC',
      benefits: ['Elite NFT', 'Preferential financing', '3 year validity', 'Strategic consulting']
    }
  ];

  const aiStrategies = [
    'Bias mitigation with fairness constraints',
    'Privacy protection with differential privacy',
    'Ethical training with human feedback (RLHF)',
    'Transparent information systems (RAG)',
    'Continuous quality and fairness monitoring',
    'Automated security testing (Red-teaming)',
    'Data and model hardening',
    'Secure access control (RBAC)',
    'Continuous evaluation with sector-specific rules',
    'Automatic blockchain evidence (Soroban integration)'
  ];

  const handleServiceSelect = (serviceId: string, details: any) => {
    setSelectedService(serviceId);
    onSelectService({ type: serviceId, details });
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
              AI Implementation for Business Improvements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We implement AI to improve business indicators with ethical validation, 
            facilitating access to responsible investment and continuous regulatory compliance
          </p>
        </div>

        {/* Improvement Options */}
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
                        Select
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
                        Select
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Available Business AI Certifications
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
                    <p className="font-semibold text-sm mb-2">Requirements:</p>
                    <p className="text-xs text-muted-foreground">{cert.requirements}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-sm mb-2">Benefits:</p>
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
                      Get Certification
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Strategies */}
        <Card className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm mb-8">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-mars-gold" />
            Available AI Technologies
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

        {/* Pool Explanation */}
        <Card className="p-6 border border-mars-gold/20 bg-card/30 backdrop-blur-sm mb-8">
          <h3 className="text-xl font-bold mb-4 text-mars-gold">What is the Funding Pool?</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>• The pool is a common fund on Stellar, backed by a smart contract.</p>
            <p>• The client commits to using funds for responsible AI, with transparent monitoring and results.</p>
            <p>• Investors see financial statements and automatically receive their proportional return.</p>
          </div>
        </Card>

        {/* Stellar Pool */}
        <Card className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm text-center">
          <div className="mb-6">
            <Globe className="w-16 h-16 text-mars-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Stellar-based Financing</h3>
            <p className="text-muted-foreground">
              Leverage Stellar ecosystem advantages to fund responsible business AI improvements, transforming them into a true competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">Ultra-low costs</p>
              <p className="text-muted-foreground">~0.00001 XLM per transaction</p>
            </div>
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">Instant processing</p>
              <p className="text-muted-foreground">3-5 seconds</p>
            </div>
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">Full transparency</p>
              <p className="text-muted-foreground">Public blockchain</p>
            </div>
            <div className="p-4 bg-background/10 rounded-lg">
              <p className="font-semibold text-mars-gold">Investment pools</p>
              <p className="text-muted-foreground">5% APY return</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ServicesImprovement;