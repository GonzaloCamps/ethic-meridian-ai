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
import ethicaiLogo from '@/assets/ethicai-logo.png';

interface InvestmentDashboardProps {
  selectedService: any;
  onFundingComplete: () => void;
}

const InvestmentDashboard: React.FC<InvestmentDashboardProps> = ({ selectedService, onFundingComplete }) => {
  const [fundingProgress, setFundingProgress] = useState(0);
  const [investors, setInvestors] = useState<any[]>([]);
  const [isTimeAccelerated, setIsTimeAccelerated] = useState(false);
  
  const targetAmount = Math.round((parseInt(selectedService?.details?.cost?.replace(/[^\d]/g, '') || '15000') * 0.5) * 2.5);
  const currentAmount = (fundingProgress / 100) * targetAmount;

  const potentialInvestors = [
    { name: 'Verde Capital Fund', amount: 4250, risk: 'low', commitment: 'Sustainability' },
    { name: 'TechEth Ventures', amount: 6000, risk: 'medium', commitment: 'Responsible AI' },
    { name: 'Stellar Growth Fund', amount: 3250, risk: 'low', commitment: 'Blockchain' },
    { name: 'Impact AI Partners', amount: 7500, risk: 'medium', commitment: 'Social Impact' },
    { name: 'Mars Innovation VC', amount: 4750, risk: 'medium', commitment: 'Innovation' }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isTimeAccelerated && fundingProgress < 100) {
      interval = setInterval(() => {
        setFundingProgress(prev => {
          const newProgress = Math.min(prev + Math.random() * 8 + 2, 100);
          
          // Add new investors progressively
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
          <div className="flex justify-center mb-6">
            <img 
              src={ethicaiLogo} 
              alt="EthicAI Validator" 
              className="h-20 w-auto floating opacity-90"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Funding Search
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our business improvements facilitate access to specialized funding 
            with risk reduction and regulatory compliance
          </p>
        </div>

        {/* Funding Progress */}
        <Card className="p-8 mb-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-mars-gold mb-2">
                {currentAmount.toLocaleString()} USDC
              </div>
              <p className="text-sm text-muted-foreground">
                Raised so far
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">
                {targetAmount.toLocaleString()} USDC
              </div>
              <p className="text-sm text-muted-foreground">
                Funding target
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {Math.round(fundingProgress)}%
              </div>
              <p className="text-sm text-muted-foreground">
                Progress completed
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span>Funding progress</span>
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
                  Accelerate investor search
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              ) : (
                <div className="flex items-center justify-center gap-2 text-mars-gold">
                  <Clock className="w-5 h-5 animate-spin" />
                  <span>Actively searching for investors...</span>
                </div>
              )}
            </div>
          )}

          {fundingProgress >= 100 && (
            <div className="text-center mt-6">
              <div className="mb-4 p-4 bg-green-400/10 rounded-lg border border-green-400/20">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-green-400">Funding Completed!</h3>
                <p className="text-sm text-muted-foreground">
                  100% funding target achieved
                </p>
              </div>
              <Button 
                variant="stellar" 
                size="lg" 
                onClick={handleProceedToImplementation}
                className="group"
              >
                Proceed to AI Implementation
                <Zap className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </Card>

        {/* Investor List */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-mars-gold" />
              Confirmed Investors
            </h3>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {investors.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Waiting for first investors...
                </p>
              ) : (
                investors.map((investor, index) => (
                  <div key={index} className="p-4 bg-background/10 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{investor.name}</h4>
                      <span className="text-mars-gold font-bold">{investor.amount.toLocaleString()} USDC</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Focus: {investor.commitment}</span>
                      <span className="text-xs text-muted-foreground">{investor.investedAt}</span>
                    </div>
                    <div className="mt-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        investor.risk === 'low' ? 'bg-green-400/20 text-green-400' : 'bg-mars-gold/20 text-mars-gold'
                      }`}>
                        {investor.risk === 'low' ? 'Low Risk' : 'Medium Risk'}
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
              Project Details
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Selected Implementation:</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedService?.details?.name || 'Responsible AI business improvement'}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Expected Return:</h4>
                <p className="text-sm text-muted-foreground">
                  {selectedService?.details?.improvement || '+25 points'} in performance
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Timeline:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Funding:</span>
                    <span className="text-green-400">✓ Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Implementation:</span>
                    <span className="text-mars-gold">12 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monitoring:</span>
                    <span className="text-muted-foreground">Continuous</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Payment Structure:</h4>
                <p className="text-sm text-muted-foreground">
                  Vesting format: 6, 12, 24 months
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Benefits for Investors */}
        <Card className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-mars-gold" />
            Why invest in responsible improvements?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-mars-gold mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Reduced Risk</h4>
              <p className="text-sm text-muted-foreground">
                Ethical validation reduces investment risks and ensures sustainability
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Continuous Compliance</h4>
              <p className="text-sm text-muted-foreground">
                Updated monitoring with new regulations for long-term protection
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-mars-copper mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Continuous Improvement</h4>
              <p className="text-sm text-muted-foreground">
                Permanent optimization processes with ethical validation
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InvestmentDashboard;