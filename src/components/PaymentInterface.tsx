import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  CreditCard, 
  Wallet, 
  ArrowRight, 
  Shield,
  Clock,
  DollarSign,
  Star
} from 'lucide-react';
import ethicaiLogo from '@/assets/ethicai-logo.png';

interface PaymentInterfaceProps {
  selectedService: any;
  onPaymentComplete: () => void;
}

const PaymentInterface: React.FC<PaymentInterfaceProps> = ({ selectedService, onPaymentComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState<'stellar' | 'traditional' | null>(null);
  const [showCollateral, setShowCollateral] = useState(false);

  const collateralDetails = {
    baseAmount: Math.round((parseInt(selectedService?.details?.cost?.replace(/[^\d]/g, '') || '15000') * 0.5)), // Convert XLM to USD at 0.5 rate
    erpSize: 'Large', // Simulated
    multiplier: 2.5,
    get totalCollateral() {
      return this.baseAmount * this.multiplier;
    },
    apy: 5.0, // Changed to 5% USDC
    get yearlyReturn() {
      return this.totalCollateral * (this.apy / 100);
    }
  };

  const handlePayment = () => {
    setShowCollateral(true);
  };

  const handleCollateralDeposit = () => {
    // Simular proceso de depósito e iniciar búsqueda de financiamiento
    setTimeout(() => {
      onPaymentComplete();
    }, 2000);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
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
              Payment Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Configure payment and collateral for your selected service
          </p>
        </div>

        {/* Resumen del Servicio */}
        <Card className="p-8 mb-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Service Summary</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Selected Service</p>
              <p className="font-semibold">{selectedService?.details?.name || 'AI Improvement'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Fixed Cost</p>
              <p className="text-2xl font-bold text-mars-gold">{Math.round((parseInt(selectedService?.details?.cost?.replace(/[^\d]/g, '') || '15000') * 0.5)).toLocaleString()} USDC</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Expected Improvement</p>
              <p className="font-semibold text-green-400">{selectedService?.details?.improvement || '+25 points'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Implementation Time</p>
              <p className="font-semibold">12 months</p>
            </div>
          </div>
        </Card>

        {!showCollateral ? (
          <>
            {/* Métodos de Pago */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card 
                className={`p-6 border-2 cursor-pointer transition-all duration-300 ${
                  paymentMethod === 'stellar' 
                    ? 'border-mars-gold bg-card mars-glow' 
                    : 'border-border hover:border-mars-gold/50'
                }`}
                onClick={() => setPaymentMethod('stellar')}
              >
                <div className="text-center space-y-4">
                  <Wallet className="w-12 h-12 text-mars-gold mx-auto" />
                  <h3 className="text-xl font-bold">Payment with USDC</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-mars-gold">✓ Stable value guarantee</p>
                    <p className="text-mars-gold">✓ Fast settlement</p>
                    <p className="text-mars-gold">✓ 5% APY returns</p>
                  </div>
                  <p className="text-2xl font-bold text-mars-gold">
                    {Math.round(collateralDetails.baseAmount * 0.9).toLocaleString()} USDC
                  </p>
                </div>
              </Card>

            </div>

            {paymentMethod && (
              <div className="text-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handlePayment}
                  className="group"
                >
                  Proceed to Payment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </>
        ) : (
          <Card className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-mars-gold" />
              Commitment Agreement and Collateral
            </h3>

            <div className="mb-6 p-4 bg-mars-gold/10 rounded-lg border border-mars-gold/20">
              <h4 className="font-semibold text-mars-gold mb-2">What is Collateral?</h4>
              <p className="text-sm text-muted-foreground">
                The collateral deposit is the commitment signature that connects your ERP and allows us to monitor improvements going forward. Through ethical AI strategies, we optimize business indicators, facilitate access to investment, and reduce risks. Continuous monitoring, in pursuit of constant and permanent improvements, adapts to new regulations to ensure sustainable performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Collateral Calculation</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Base service cost:</span>
                      <span className="font-semibold">{collateralDetails.baseAmount.toLocaleString()} USDC</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ERP multiplier ({collateralDetails.erpSize}):</span>
                      <span className="font-semibold">{collateralDetails.multiplier}x</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Total Collateral:</span>
                        <span className="font-bold text-mars-gold">
                          {collateralDetails.totalCollateral.toLocaleString()} USDC
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-mars-gold/10 rounded-lg border border-mars-gold/20">
                  <h5 className="font-semibold text-mars-gold mb-2">💰 Collateral Profitability</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>USDC Pool APY:</span>
                      <span className="font-semibold text-green-400">{collateralDetails.apy}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated annual return:</span>
                      <span className="font-semibold text-green-400">
                        +{collateralDetails.yearlyReturn.toLocaleString()} USDC
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Deposit Conditions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-mars-gold" />
                      <span>Collateral secured in smart contract</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span>You keep the pool earnings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-mars-copper" />
                      <span>Release after implementation completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-mars-gold" />
                      <span>No risk of principal loss</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background/10 rounded-lg">
                  <h5 className="font-semibold mb-2">🔄 Funding Search Process</h5>
                   <p className="text-sm text-muted-foreground">
                     Your collateral enables specialized funding search. 
                     Improvements with ethical validation facilitate access to investment.
                     Payment in vesting format: 6, 12, 24 months with continuous monitoring.
                   </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button 
                variant="stellar" 
                size="lg" 
                onClick={handleCollateralDeposit}
                className="group"
              >
                Deposit Collateral and Begin
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                By continuing, you accept the terms of the Soroban smart contract
              </p>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default PaymentInterface;