import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Classes from "./pages/Classes";
import Equipamentos from "./pages/Equipamentos";
import Habilidades from "./pages/Habilidades";
import Monstros from "./pages/Monstros";
import Racas from "./pages/Racas";
import Regras from "./pages/Regras";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main></Main>);

export default function Main() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Equipamentos" element={<Equipamentos />} />
        <Route path="/Habilidades" element={<Habilidades />} />
        <Route path="/Monstros" element={<Monstros />} />
        <Route path="/Raças" element={<Racas />} />
        <Route path="/Regras" element={<Regras />} />
      </Routes>
    </BrowserRouter>
  );
}
