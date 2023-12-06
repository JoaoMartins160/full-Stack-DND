import { Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Classes from "./pages/Classes";
import Equipamentos from "./pages/Equipamentos";
import Habilidades from "./pages/Habilidades";
import Monstros from "./pages/Monstros";
import Racas from "./pages/Racas";
import Regras from "./pages/Regras";
import Home from "./pages/Home";
import useWebSocket from "./websocket";
import { useEffect, useState } from "react";
import Login from "./pages/Login"

function App() {
  const socket = useWebSocket("ws://localhost:8080");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (socket) {
      socket.onmessage = (message) => {
        console.log("Mensagem recebida do servidor:", message.data);
      };
    }
  }, [socket]);

  const handleLogin = (username, password) => {
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} />
        <Route path="/*" element={isLoggedIn ? <Sidebar /> : <Login onLogin={handleLogin} />} />
        <Route path="/" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} />
        <Route path="/Classes" element={isLoggedIn ? <Classes /> : <Login onLogin={handleLogin} />} />
        <Route path="/Equipamentos" element={isLoggedIn ? <Equipamentos /> : <Login onLogin={handleLogin} />} />
        <Route path="/Habilidades" element={isLoggedIn ? <Habilidades /> : <Login onLogin={handleLogin} />} />
        <Route path="/Monstros" element={isLoggedIn ? <Monstros /> : <Login onLogin={handleLogin} />} />
        <Route path="/Raças" element={isLoggedIn ? <Racas /> : <Login onLogin={handleLogin} />} />
        <Route path="/Regras" element={isLoggedIn ? <Regras /> : <Login onLogin={handleLogin} />} />
      </Routes>
    </>
  );
}

export default App;
