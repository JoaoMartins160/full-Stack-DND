import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="content">
        <h1 className="title">Códex Inicial</h1>
        <h2>Introdução</h2>
        <p>
          &nbsp; Criado por Gary Gygax e Dave Arneson, Dungeons n' Dragons, frequentemente abreviado como DnD, é um dos jogos de role-playing mais icônicos e influentes do mundo. No coração do DnD está a ideia de contar histórias, onde os jogadores assumem o papel de personagens fictícios em um mundo de fantasia medieval. A essência é a criação conjunta de uma narrativa épica. Um grupo de jogadores, liderado por um mestre (ou mestre de jogo), embarca em aventuras imaginárias onde eles enfrentam monstros, resolvem quebra-cabeças, exploram masmorras perigosas e interagem com personagens em um mundo ricamente detalhado.
        </p>
        <h2>Sobre</h2>
        <p>
          &nbsp; O Códex Inicial é uma porta de entrada para as pessoas falante do português, para remover a barreira do inglês e apresentar o incrível universo do Dungeons n' Dragons. Esta é uma aplicação web que utiliza a poderosa API de DnD para trazer informações detalhadas, pasmem, em português, Sensei Watanabe.
        </p>
      </div>
    </>
  );
}

export default App;
