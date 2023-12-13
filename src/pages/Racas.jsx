import { useApi } from "../hooks/useApi";
import { useState } from "react";
import { useCookies } from "react-cookie";
import CardRaces from "../components/CardRaces";

function Racas() {
  const [racesList, setRacesList] = useState([]);
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
      await request("api/races", options);
      if (data) {
        setRacesList(data);
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
      await request(`api/races/${search}`, options);
      if (data) {
        setRacesList([data]);
      }
    } catch (e) {
      setFind(false);
      console.error(e);
    }
  };

  const cardList = () => {
    if (racesList.length === 0) {
      return;
    }
    return racesList.map(handleCards);
  };

  const handleCards = (races) => {
    return (
      <>
        <CardRaces
          key={races.index}
          title={races.name}
          ability_bonuses={races.ability_bonuses}
          speed={races.speed}
          traits={races.traits}
          desc={races.desc}
          starting_proficiencies={races.starting_proficiencies}
          languages={races.languages}
        ></CardRaces>
      </>
    );
  };

  function handleReset() {
    setSearch("");
    setFind(true);
    setRacesList(0);
  }

  return (
    <div className="api-block">
      <header className="search-bar">
        <form className="search-container" onSubmit={handleSubmit}>
          <input
            id="monster-input"
            type="text"
            placeholder="Digite o nome da raça"
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
        {find ? <></> : <p>Nenhuma raça encontrada com esse nome.</p>}
      </header>
      {racesList.length > 0 && (
        <div className="cardContainer">{cardList()}</div>
      )}
    </div>
  );
}

export default Racas;
