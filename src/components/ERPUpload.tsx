import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Upload, FileText, Shield, ArrowRight, Check } from 'lucide-react';

interface ERPUploadProps {
  agentType: 'ai' | 'human';
  onERPUploaded: (erpData: any) => void;
}

const ERPUpload: React.FC<ERPUploadProps> = ({ agentType, onERPUploaded }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    setUploadedFile(file);
    // Simular procesamiento
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onERPUploaded({
        fileName: file.name,
        size: file.size,
        areas: ['Finanzas', 'Recursos Humanos', 'Operaciones', 'Tecnología', 'Cumplimiento', 'Sostenibilidad'],
        processed: true
      });
    }, 3000);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Cargue su ERP
            </span>
          </h2>
          <div className="max-w-2xl mx-auto">
            {agentType === 'ai' ? (
              <div className="bg-gradient-to-r from-mars-gold/20 to-mars-crimson/20 border border-mars-gold/30 rounded-lg p-6 mb-8">
                <p className="text-lg font-semibold text-foreground leading-relaxed">
                  Su agente de IA analiza los datos y garantiza una validación automática, detallada y segura, protegiendo siempre la confidencialidad de su información.
                </p>
              </div>
            ) : (
              <p className="text-lg text-muted-foreground mb-8">
                Nuestro experto revisará su información de forma confidencial
              </p>
            )}
            
            {/* ERP Explanation */}
            <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-6 text-left space-y-4">
              <div>
                <h3 className="text-xl font-bold text-mars-gold mb-3">📌 ERP en las empresas</h3>
                <p className="text-muted-foreground mb-4">
                  Un ERP es el sistema nervioso central de una empresa: conecta finanzas, ventas, operaciones, RRHH e inventario en un solo software.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">📌 ¿Para qué sirve?</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Centraliza datos en tiempo real</li>
                  <li>• Aumenta eficiencia y elimina errores</li>
                  <li>• Mejora la toma de decisiones</li>
                  <li>• Escala con el crecimiento de la empresa</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">📌 Integración con Ethic IA Validator</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• <strong>Conexión inicial:</strong> el ERP se vincula con un contrato inteligente (depósito de garantía).</li>
                  <li>• <strong>Monitoreo real:</strong> analizamos indicadores desde el ERP.</li>
                  <li>• <strong>IA ética:</strong> proponemos mejoras sostenibles y transparentes.</li>
                  <li>• <strong>Sello de confianza:</strong> blockchain certifica cumplimiento y abre acceso a inversión.</li>
                  <li>• <strong>Mejora continua:</strong> actualización constante con nuevas regulaciones.</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-mars-gold/10 to-mars-crimson/10 border border-mars-gold/20 rounded-lg p-4">
                <p className="text-foreground font-medium">
                  👉 <strong>En simple palabras.</strong>
                </p>
                <p className="text-muted-foreground mt-2">
                  Conectamos el ERP de las grandes empresas a blockchain, aplicamos IA ética y transformamos los datos en confianza, inversión y crecimiento sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Upload Area */}
        <Card 
          className={`p-12 border-2 border-dashed transition-all duration-300 ${
            isDragOver 
              ? 'border-mars-gold bg-mars-gold/10 mars-glow' 
              : 'border-border hover:border-mars-gold/50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!uploadedFile ? (
            <div className="text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-gradient-mars rounded-full flex items-center justify-center">
                <Upload className="w-10 h-10 text-foreground" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-3">Suba su archivo ERP</h3>
                <p className="text-muted-foreground mb-6">
                  CSV, XML, JSON, Excel, PDF
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <label className="cursor-pointer">
                    <FileText className="w-5 h-5 mr-2" />
                    Seleccionar Archivo
                    <input 
                      type="file" 
                      className="hidden" 
                      onChange={handleFileInput}
                      accept=".csv,.xml,.json,.xlsx,.xls,.pdf"
                    />
                  </label>
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6">
              {isProcessing ? (
                <>
                  <div className="mx-auto w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center animate-pulse">
                    <FileText className="w-10 h-10 text-mars-dark" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Procesando ERP...</h3>
                    <p className="text-muted-foreground mb-6">
                      {agentType === 'ai' 
                        ? 'Analizando estructuras de datos y identificando áreas de evaluación...'
                        : 'Nuestro experto está revisando su archivo de forma segura...'
                      }
                    </p>
                    <div className="w-64 h-2 bg-border rounded-full mx-auto overflow-hidden">
                      <div className="w-full h-full bg-gradient-gold animate-pulse"></div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="mx-auto w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Check className="w-10 h-10 text-mars-dark" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">ERP Procesado Exitosamente</h3>
                    <p className="text-muted-foreground mb-6">
                      Archivo: {uploadedFile.name} ({Math.round(uploadedFile.size / 1024)} KB)
                    </p>
                    <Button variant="stellar" size="lg">
                      Continuar al Análisis
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
        </Card>

        {/* Process Steps */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Carga Segura', status: uploadedFile ? 'completed' : 'current' },
            { step: '2', title: 'Análisis IA', status: uploadedFile && !isProcessing ? 'current' : 'pending' },
            { step: '3', title: 'Certificación', status: 'pending' }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                item.status === 'completed' 
                  ? 'bg-gradient-gold text-mars-dark' 
                  : item.status === 'current'
                    ? 'bg-mars-crimson text-foreground'
                    : 'bg-border text-muted-foreground'
              }`}>
                {item.status === 'completed' ? <Check className="w-5 h-5" /> : item.step}
              </div>
              <span className={`font-medium ${
                item.status === 'completed' || item.status === 'current' 
                  ? 'text-foreground' 
                  : 'text-muted-foreground'
              }`}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPUpload;