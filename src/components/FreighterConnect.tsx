import React, { useState } from "react";
import { isConnected, getPublicKey } from "@stellar/freighter-api";

const FreighterConnect: React.FC = () => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    setError(null);
    try {
      const connected = await isConnected();
      setConnected(connected);
      if (connected) {
        const key = await getPublicKey();
        setPublicKey(key);
      } else {
        setError("Freighter no está conectado. Instala la extensión y recarga la página.");
      }
    } catch (e: any) {
      setError(e.message || "Error al conectar con Freighter");
    }
  };

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-bold mb-2">Conectar Wallet Freighter</h2>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleConnect}
      >
        {connected ? "Conectado" : "Conectar"}
      </button>
      {publicKey && (
        <div className="mt-4">
          <span className="font-semibold">Dirección pública:</span>
          <div className="break-all text-sm mt-1">{publicKey}</div>
        </div>
      )}
      {error && (
        <div className="mt-2 text-red-600 text-sm">{error}</div>
      )}
    </div>
  );
};

export default FreighterConnect;
