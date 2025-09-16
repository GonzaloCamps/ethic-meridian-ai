import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Linkedin, Mail, Globe } from 'lucide-react';
import ethicaiLogo from '@/assets/ethicai-logo.png';
import oliverImage from '@/assets/oliver-founder.jpg';
import gonzaloImage from '@/assets/gonzalo-founder.jpg';

interface FoundersPageProps {
  onContinue: () => void;
}

const FoundersPage: React.FC<FoundersPageProps> = ({ onContinue }) => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src={ethicaiLogo} 
              alt="EthicAI Validator" 
              className="h-24 w-auto floating opacity-90"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Meet the Founders
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Behind this solution is a dedicated team pioneering the future of responsible AI validation
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Oliver Mora - Founder */}
          <Card className="p-8 border-2 border-mars-gold/30 bg-card/30 backdrop-blur-sm mars-glow hover:scale-105 transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-48 h-48 mx-auto rounded-xl overflow-hidden border-4 border-mars-gold/50 bg-gradient-mars p-2 relative futuristic-frame">
                  <div className="w-full h-full rounded-lg overflow-hidden relative">
                    <img 
                      src={oliverImage} 
                      alt="Oliver Mora - Founder" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-mars-gold/10 to-mars-crimson/10"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-mars-gold rounded-full animate-pulse"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-mars-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center border-2 border-background">
                  <Globe className="w-6 h-6 text-mars-dark" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Oliver Mora</h3>
                <p className="text-mars-gold font-semibold mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed">
                  A specialist in Digital Innovation Strategy, Web3, and New Ethical Technologies
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-sm text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full"></div>
                  Digital Innovation Strategy
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full"></div>
                  Web3 & Blockchain Technologies
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full"></div>
                  Ethical AI Frameworks
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </Card>

          {/* Gonzalo Camps - Co-Founder */}
          <Card className="p-8 border-2 border-mars-gold/30 bg-card/30 backdrop-blur-sm mars-glow hover:scale-105 transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-48 h-48 mx-auto rounded-xl overflow-hidden border-4 border-mars-gold/50 bg-gradient-mars p-2 relative futuristic-frame">
                  <div className="w-full h-full rounded-lg overflow-hidden relative">
                    <img 
                      src={gonzaloImage} 
                      alt="Gonzalo Camps - Co-Founder" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-mars-gold/10 to-mars-crimson/10"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-mars-gold rounded-full animate-pulse"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-mars-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center border-2 border-background">
                  <Globe className="w-6 h-6 text-mars-dark" />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Gonzalo Camps</h3>
                <p className="text-mars-gold font-semibold mb-4">Co-Founder & CTO</p>
                <p className="text-muted-foreground leading-relaxed">
                  An expert in enterprise blockchain solutions implementation with a track record of 
                  integrating eight organizations, driving transparency and governance
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-sm text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full"></div>
                  Enterprise Blockchain Solutions
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full"></div>
                  Transparency & Governance
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-mars-gold">
                  <div className="w-2 h-2 bg-mars-gold rounded-full"></div>
                  Systems Integration (8+ Orgs)
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Mission Statement */}
        <Card className="p-8 border border-mars-gold/20 bg-card/30 backdrop-blur-sm text-center mb-12">
          <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
            Behind this solution is a dedicated team. Led by Founder, Oliver Mora, a specialist in Digital Innovation Strategy, Web3, and New Ethical Technologies. He is joined by Co-Founder Gonzalo Camps, an expert in enterprise blockchain solutions implementation with a track record of integrating eight organizations, driving transparency and governance.
          </p>
          <div className="bg-mars-gold/10 border border-mars-gold/20 rounded-lg p-4 inline-block">
            <p className="text-sm text-mars-gold font-bold">
              Building the future from Meridiani Planum - Ethical AI for humanity's journey to the stars
            </p>
          </div>
        </Card>

        {/* Continue Button */}
        <div className="text-center">
          <Button variant="hero" size="lg" onClick={onContinue} className="group">
            Continue Your Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-mars-gold rounded-full animate-ping" />
      <div className="absolute top-3/4 right-20 w-1 h-1 bg-mars-copper rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-mars-rust rounded-full animate-ping delay-1000" />
    </section>
  );
};

export default FoundersPage;