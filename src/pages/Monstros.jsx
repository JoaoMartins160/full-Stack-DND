import { BASE_URL, dndapi } from "../hooks/useApi";
import { useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";

function Monstros() {
  const [monsterList, setMonsterList] = useState([]);
  const [search, setSearch] = useState("");
  const [find, setFind] = useState(true);

  const handleAllSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dndapi.get(`/api/monsters`);
      const monsterPromises = response.data.results.map((index) =>
        axios.get(BASE_URL + index.url)
      );
      const allMonsterResponses = await Promise.all(monsterPromises);
      setMonsterList(allMonsterResponses.map((response) => response.data));
    } catch (e) {
      console.error(e);
    }
  };

  const handleButtonClick = () => {
    const input = document.getElementById("monster-input").value.toLowerCase();
    const regex = /\s/g;
    if (regex.test(input)) {
      const searchResult = input.replace(regex, "-");
      setSearch(searchResult);
    } else {
      console.log("A entrada não contém espaços em branco.");
      setSearch(input);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleReset();
    try {
      const response = await dndapi.get(`/api/monsters/${search}`);
      setMonsterList([response.data]);
      // if (response.data.count === 0) {
      //   console.log("Nenhum monstro encontrado com esse nome.");
      // } else {
      // }
    } catch (e) {
      setFind(false);
      console.error(e);
    }
  };

  function handleReset() {
    setSearch("");
    setFind(true);
    setMonsterList(0);
  }

  const handleCards = (monster) => {
    return (
      <Modal
        key={monster.index}
        title={monster.name}
        type={monster.type}
        size={monster.size}
        alignment={monster.alignment}
      ></Modal>
    );
  };

  const cardList = () => {
    if (monsterList.length === 0) {
      return;
    }
    return monsterList.map(handleCards);
  };

  return (
    <div className="api-block">
      <header className="search-bar">
        <form className="search-container" onSubmit={handleSubmit}>
          <input
            id="monster-input"
            type="text"
            placeholder="Digite o nome do monstro"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button id="monsterButton" type="submit" onClick={handleButtonClick}>
            > SEARCH
          </button>
          <button className="monster-button" onClick={handleReset}>
            CLEAN RESEARCH
          </button>
          <button type="button" onClick={handleAllSubmit}>
            All Elements
          </button>
        </form>
        {find ? <></> : <p>Nenhum monstro encontrado com esse nome.</p>}
      </header>
      {monsterList.length > 0 && (
        <div className="cardContainer">{cardList()}</div>
      )}
    </div>
  );
}

export default Monstros;
