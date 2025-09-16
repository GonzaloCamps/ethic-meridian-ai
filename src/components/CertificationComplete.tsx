import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Award, 
  Download, 
  Share2, 
  CheckCircle,
  Sparkles,
  Globe,
  Shield,
  Star
} from 'lucide-react';
import ethicaiLogo from '@/assets/ethicai-logo.png';

interface CertificationCompleteProps {
  certificationLevel: string;
  onRestart: () => void;
}

const CertificationComplete: React.FC<CertificationCompleteProps> = ({ certificationLevel, onRestart }) => {
  const [nftMinted, setNftMinted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    // Simular minteo del NFT
    setTimeout(() => {
      setNftMinted(true);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3000);
    }, 2000);
  }, []);

  const nftDetails = {
    tokenId: `ETHIC-AI-${Date.now()}`,
    blockchain: 'Stellar',
    certLevel: certificationLevel,
    issuedDate: new Date().toLocaleDateString(),
    validUntil: new Date(Date.now() + (certificationLevel === '100%' ? 3 : certificationLevel === '75%' ? 2 : 1) * 365 * 24 * 60 * 60 * 1000).toLocaleDateString()
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Celebration Animation */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <Star className="w-4 h-4 text-mars-gold" />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <img 
                src={ethicaiLogo} 
                alt="EthicAI Validator" 
                className="h-24 w-auto floating opacity-90"
              />
            </div>
            <Award className="w-24 h-24 text-mars-gold mx-auto mb-6 animate-bounce" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                ¡Certificación Completa!
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground">
              Su NFT de Certificación ha sido generado exitosamente
            </p>
          </div>
        </div>

        {/* NFT Card */}
        <Card className="p-8 mb-8 border-2 border-mars-gold bg-gradient-to-br from-card/50 to-mars-gold/5 mars-glow relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-mars-gold/5 to-transparent"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* NFT Visual */}
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-mars rounded-xl border-2 border-mars-gold/50 flex items-center justify-center mb-6 relative overflow-hidden">
                {/* NFT Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-mars-gold/30 to-mars-crimson/30"></div>
                  <div className="absolute inset-4 border border-mars-gold/30 rounded-lg"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <Shield className="w-20 h-20 text-mars-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">EthicAI</h3>
                  <p className="text-lg text-mars-gold">Certificación {certificationLevel}</p>
                  <p className="text-sm text-muted-foreground mt-2">#{nftDetails.tokenId.slice(-6)}</p>
                </div>
              </div>
              
              {nftMinted ? (
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">NFT Minteado en Stellar</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-mars-gold">
                  <Sparkles className="w-5 h-5 animate-spin" />
                  <span className="font-semibold">Minteando NFT...</span>
                </div>
              )}
            </div>

            {/* NFT Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Detalles de Certificación</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Token ID:</span>
                  <span className="font-mono text-mars-gold">{nftDetails.tokenId}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Blockchain:</span>
                  <span className="font-semibold">{nftDetails.blockchain}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nivel:</span>
                  <span className="font-semibold text-mars-gold">{nftDetails.certLevel}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fecha de Emisión:</span>
                  <span className="font-semibold">{nftDetails.issuedDate}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Válido Hasta:</span>
                  <span className="font-semibold">{nftDetails.validUntil}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold mb-2">Beneficios del Ecosistema NFT:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Sello verificable on-chain
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Acceso a capital responsable del ecosistema
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Oportunidades de financiamiento adicionales
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Auditoría continua automatizada
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-mars-gold" />
                    Portafolio de NFTs para mayor credibilidad
                  </li>
                  {certificationLevel === '100%' && (
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-mars-gold" />
                      Consultoría estratégica premium
                    </li>
                  )}
                </ul>
                <p className="text-xs text-muted-foreground mt-3 p-3 bg-mars-gold/10 rounded-lg border border-mars-gold/20">
                  <span className="font-semibold text-mars-gold">Ecosistema EthicAI:</span> Este NFT le permite acceder a más oportunidades 
                  de financiamiento. Cada certificación aumenta su credibilidad con inversores especializados.
                  <br />
                  <span className="italic text-xs">
                    (This NFT enables access to additional funding opportunities within our ecosystem)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Button variant="stellar" className="group" disabled={!nftMinted}>
            <Download className="w-5 h-5 mr-2" />
            Descargar Certificado
          </Button>
          
          <Button variant="outline" className="group" disabled={!nftMinted}>
            <Share2 className="w-5 h-5 mr-2" />
            Compartir Logro
          </Button>
          
          <Button variant="outline" className="group" disabled={!nftMinted}>
            <Globe className="w-5 h-5 mr-2" />
            Ver en Blockchain
          </Button>
        </div>

        {/* Impact Summary */}
        <Card className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm text-center">
          <h3 className="text-2xl font-bold mb-6">Impacto Logrado</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-mars-gold mb-2">+32%</p>
              <p className="text-sm text-muted-foreground">Mejora en Score Global</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-400 mb-2">90%</p>
              <p className="text-sm text-muted-foreground">Cumplimiento Normativo</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-mars-copper mb-2">0</p>
              <p className="text-sm text-muted-foreground">Riesgos Críticos</p>
            </div>
          </div>
        </Card>

        {/* Restart Journey */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Desea validar otra organización o área de su empresa para expandir su portafolio de NFTs?
          </p>
          <Button variant="hero" onClick={onRestart}>
            Comenzar Nueva Validación
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificationComplete;