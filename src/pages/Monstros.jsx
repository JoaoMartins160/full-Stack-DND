import { useApi } from "../hooks/useApi";
import { useState } from "react";
import { useCookies } from "react-cookie";
import CardMonster from "../components/CardMonster";

function Monstros() {
  const [monsterList, setMonsterList] = useState([]);
  const [search, setSearch] = useState("");
  const [find, setFind] = useState(true);
  const [cookies] = useCookies(["userToken"]);
  const { data, request } = useApi();

  const handleAllSubmit = async (e) => {
    e.preventDefault();
    handleReset();
    try {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      };
      await request("api/monsters", options);
      if (data) {
        setMonsterList(data);
      }
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
      setSearch(input);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleReset();
    try {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      };
      await request(`api/monsters/${search}`, options);
      if (data) {
        setMonsterList([data]);
      }
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
      <>
        <CardMonster
          key={monster.id}
          title={monster.name}
          type={monster.type}
          size={monster.size}
          alignment={monster.alignment}
          CA={monster.armor_class}
          HP={monster.hit_points}
          SpeedWalk={monster.speed.walk}
          SpeedSwin={monster.speed.swim}
          STR={monster.strength}
          DEX={monster.dexterity}
          CONS={monster.constitution}
          INT={monster.intelligence}
          WIS={monster.wisdom}
          CHA={monster.charisma}
          Challenge={monster.challenge_rating}
        ></CardMonster>
      </>
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
            SEARCH
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
