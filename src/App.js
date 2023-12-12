import { Route, Routes, useNavigate } from "react-router-dom";
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
import Login from "./pages/Login";

function App() {
  const socket = useWebSocket("wss://localhost:8080");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (socket) {
      socket.onmessage = (message) => {
        console.log("Mensagem recebida do servidor:", message.data);
      };
    }
  }, [socket]);

  const handleSuccessfullLogin = () => {
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <>
      {isLoggedIn && <Sidebar />}
      <Routes>
        <Route
          path="/login"
          element={<Login onSuccessfullLogin={handleSuccessfullLogin} />}
        />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home />
            ) : (
              <Login onSuccessfullLogin={handleSuccessfullLogin} />
            )
          }
        />
        <Route
          path="/Classes"
          element={
            isLoggedIn ? (
              <Classes />
            ) : (
              <Login onSuccessfullLogin={handleSuccessfullLogin} />
            )
          }
        />
        <Route
          path="/Equipamentos"
          element={
            isLoggedIn ? (
              <Equipamentos />
            ) : (
              <Login onSuccessfullLogin={handleSuccessfullLogin} />
            )
          }
        />
        <Route
          path="/Habilidades"
          element={
            isLoggedIn ? (
              <Habilidades />
            ) : (
              <Login onSuccessfullLogin={handleSuccessfullLogin} />
            )
          }
        />
        <Route
          path="/Monstros"
          element={
            isLoggedIn ? (
              <Monstros />
            ) : (
              <Login onSuccessfullLogin={handleSuccessfullLogin} />
            )
          }
        />
        <Route
          path="/Raças"
          element={
            isLoggedIn ? (
              <Racas />
            ) : (
              <Login onSuccessfullLogin={handleSuccessfullLogin} />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
