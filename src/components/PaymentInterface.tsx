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

interface PaymentInterfaceProps {
  selectedService: any;
  onPaymentComplete: () => void;
}

const PaymentInterface: React.FC<PaymentInterfaceProps> = ({ selectedService, onPaymentComplete }) => {
  const [paymentMethod, setPaymentMethod] = useState<'stellar' | 'traditional' | null>(null);
  const [showCollateral, setShowCollateral] = useState(false);

  const collateralDetails = {
    baseAmount: parseInt(selectedService?.details?.cost?.replace(/[^\d]/g, '') || '15000'),
    erpSize: 'Grande', // Simulado
    multiplier: 2.5,
    get totalCollateral() {
      return this.baseAmount * this.multiplier;
    },
    apy: 12.5,
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Proceso de Pago
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Configure el pago y colateral para su servicio seleccionado
          </p>
        </div>

        {/* Resumen del Servicio */}
        <Card className="p-8 mb-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Resumen del Servicio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Servicio Seleccionado</p>
              <p className="font-semibold">{selectedService?.details?.name || 'Mejora de IA'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Costo Fijo</p>
              <p className="text-2xl font-bold text-mars-gold">{selectedService?.details?.cost || '15,000 XLM'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Mejora Esperada</p>
              <p className="font-semibold text-green-400">{selectedService?.details?.improvement || '+25 puntos'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Tiempo de Implementación</p>
              <p className="font-semibold">30-60 días</p>
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
                  <h3 className="text-xl font-bold">Pago con Stellar (XLM)</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-mars-gold">✓ Comisiones ultra bajas</p>
                    <p className="text-mars-gold">✓ Liquidación inmediata</p>
                    <p className="text-mars-gold">✓ Descuento 10%</p>
                  </div>
                  <p className="text-2xl font-bold text-mars-gold">
                    {Math.round(collateralDetails.baseAmount * 0.9).toLocaleString()} XLM
                  </p>
                </div>
              </Card>

              <Card 
                className={`p-6 border-2 cursor-pointer transition-all duration-300 ${
                  paymentMethod === 'traditional' 
                    ? 'border-mars-gold bg-card mars-glow' 
                    : 'border-border hover:border-mars-gold/50'
                }`}
                onClick={() => setPaymentMethod('traditional')}
              >
                <div className="text-center space-y-4">
                  <CreditCard className="w-12 h-12 text-mars-copper mx-auto" />
                  <h3 className="text-xl font-bold">Pago Tradicional</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">• Tarjeta de crédito</p>
                    <p className="text-muted-foreground">• Transferencia bancaria</p>
                    <p className="text-muted-foreground">• Procesamiento 3-5 días</p>
                  </div>
                  <p className="text-2xl font-bold text-mars-copper">
                    ${(collateralDetails.baseAmount * 0.1).toLocaleString()} USD
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
                  Proceder al Pago
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            )}
          </>
        ) : (
          <Card className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-mars-gold" />
              Firma de Compromiso y Colateral
            </h3>

            <div className="mb-6 p-4 bg-mars-gold/10 rounded-lg border border-mars-gold/20">
              <h4 className="font-semibold text-mars-gold mb-2">¿Qué es el Colateral? (What is Collateral?)</h4>
              <p className="text-sm text-muted-foreground">
                El colateral es su <strong>firma de compromiso para que el ERP quede conectado y podamos monitorear las mejoras</strong> 
                de ahí en adelante (Your engagement signature to keep the ERP connected for ongoing improvement monitoring). 
                No es un costo adicional: usted conserva su inversión y gana rentabilidad mientras implementamos 
                las mejoras de IA acordadas (Not an additional cost: you keep your investment and earn returns while we implement the agreed AI improvements).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Cálculo del Colateral</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Costo base del servicio:</span>
                      <span className="font-semibold">{collateralDetails.baseAmount.toLocaleString()} XLM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Multiplicador ERP ({collateralDetails.erpSize}):</span>
                      <span className="font-semibold">{collateralDetails.multiplier}x</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Colateral Total:</span>
                        <span className="font-bold text-mars-gold">
                          {collateralDetails.totalCollateral.toLocaleString()} XLM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-mars-gold/10 rounded-lg border border-mars-gold/20">
                  <h5 className="font-semibold text-mars-gold mb-2">💰 Rentabilidad del Colateral</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>APY Pool Stellar:</span>
                      <span className="font-semibold text-green-400">{collateralDetails.apy}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Retorno anual estimado:</span>
                      <span className="font-semibold text-green-400">
                        +{collateralDetails.yearlyReturn.toLocaleString()} XLM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4">Condiciones del Depósito</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-mars-gold" />
                      <span>Colateral asegurado en smart contract</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-400" />
                      <span>Usted conserva las ganancias del pool</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-mars-copper" />
                      <span>Liberación tras completar implementación</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-mars-gold" />
                      <span>Sin riesgo de pérdida del principal</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background/10 rounded-lg">
                  <h5 className="font-semibold mb-2">🔄 Proceso de Búsqueda de Financiamiento (Funding Search Process)</h5>
                  <p className="text-sm text-muted-foreground">
                    Su colateral habilitará la búsqueda de inversionistas del mercado primario especializados en IA ética 
                    para financiar la implementación. Pago en formato vesting: 6, 12, 24 meses 
                    (Enables search for primary market investors specialized in ethical AI. Vesting payments: 6, 12, 24 months).
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
                Depositar Colateral y Comenzar
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Al continuar, acepta los términos del smart contract de Soroban
              </p>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default PaymentInterface;