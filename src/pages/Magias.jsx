import { useApi } from "../hooks/useApi";
import { useState } from "react";
import { useCookies } from "react-cookie";
import CardSpells from "../components/CardSpells";

function Magias() {
  const [spellsList, setSpellsList] = useState([]);
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
      await request("api/spells", options);
      if (data) {
        setSpellsList(data);
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
      await request(`api/spells/${search}`, options);
      if (data) {
        setSpellsList([data]);
      }
    } catch (e) {
      setFind(false);
      console.error(e);
    }
  };

  const cardList = () => {
    if (spellsList.length === 0) {
      return;
    }
    return spellsList.map(handleCards);
  };

  const handleCards = (spells) => {
    return (
      <>
        <CardSpells
          key={spells.index}
          title={spells.name}
          level={spells.level}
          school={spells.school}
          casting_time={spells.casting_time}
          range={spells.range}
          components={spells.components}
          duration={spells.duration}
          desc={spells.desc}
          higher_level={spells.higher_level}
          classes={spells.classes}
        ></CardSpells>
      </>
    );
  };

  function handleReset() {
    setSearch("");
    setFind(true);
    setSpellsList(0);
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
      {spellsList.length > 0 && (
        <div className="cardContainer">{cardList()}</div>
      )}
    </div>
  );
}

export default Magias;
