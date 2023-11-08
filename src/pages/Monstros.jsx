import { BASE_URL, dndapi } from "../hooks/useApi";
import { useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import axios from "axios";

function Monstros() {
  const [monsterList, setMonsterList] = useState([]);
  const [search, setSearch] = useState("");

  /*   const handleSubmit = async (e) => {
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
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dndapi.get(`/api/monsters/${search}`);
      if (response.data.count === 0) {
        // Aqui você pode lidar com o caso em que nenhum monstro foi encontrado com o nome fornecido.
        console.log("Nenhum monstro encontrado com esse nome.");
      } else {
        const monsterResponse = await axios.get(
          BASE_URL + response.data.results[0].url
        );
        setMonsterList([monsterResponse.data]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  function handleReset() {
    setSearch("");
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
            className="monster-input"
            type="text"
            placeholder="Digite o nome do anime"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button className="monster-button" type="submit">
            SEARCH
          </button>
          <button className="monster-button" onClick={handleReset}>
            CLEAN RESEARCH
          </button>
        </form>
      </header>
      {monsterList.length > 0 && (
        <div className="cardContainer">{cardList()}</div>
      )}
    </div>
  );
}

export default Monstros;
