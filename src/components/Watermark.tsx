import React from 'react';
import ethicaiLogo from '@/assets/ethicai-logo.png';
import stellarLogo from '@/assets/stellar-logo.png';

const Watermark = () => {
  return (
    <div className="watermark">
      <div className="flex items-center gap-3 bg-background/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-mars-gold/20">
        <img 
          src={ethicaiLogo} 
          alt="EthicAiValidator" 
          className="h-12 w-auto floating opacity-90"
        />
        <div className="w-px h-8 bg-mars-gold/40"></div>
        <img 
          src={stellarLogo} 
          alt="Stellar" 
          className="h-8 w-auto opacity-80"
        />
      </div>
    </div>
  );
};

export default Watermark;