import { useEffect, useState } from "react";

export default function useWebSocket(url) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log("Conectado ao servidor WebSocket");
    };

    ws.onmessage = (message) => {
      console.log("Mensagem recebida do servidor:", message.data);
    };

    ws.onclose = () => {
      console.log("Desconectado do servidor WebSocket");
    };

    ws.onerror = (error) => {
      console.log("Erro na conexão WebSocket:", error);
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [url]);

  return socket;
}
