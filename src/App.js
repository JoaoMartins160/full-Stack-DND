import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Classes from "./pages/Classes";
import Equipamentos from "./pages/Equipamentos";
import Habilidades from "./pages/Habilidades";
import Monstros from "./pages/Monstros";
import Racas from "./pages/Racas";
import Regras from "./pages/Regras";
import Home from "./pages/Home";
import useWebSocket from "./websocket";
import { useEffect } from "react";

function App() {
  const socket = useWebSocket("ws://localhost:8080");

  useEffect(() => {
    if (socket) {
      socket.onmessage = (message) => {
        console.log("Mensagem recebida do servidor:", message.data);
      };
    }
  }, [socket]);

  return (
    <>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Equipamentos" element={<Equipamentos />} />
        <Route path="/Habilidades" element={<Habilidades />} />
        <Route path="/Monstros" element={<Monstros />} />
        <Route path="/Raças" element={<Racas />} />
        <Route path="/Regras" element={<Regras />} />
      </Routes>
    </>
  );
}

export default App;
