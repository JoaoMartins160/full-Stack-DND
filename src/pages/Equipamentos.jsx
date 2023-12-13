import { useApi } from "../hooks/useApi";
import { useState } from "react";
import { useCookies } from "react-cookie";
import CardEquip from "../components/CardEquip";

function Equipamentos() {
  const [equipsList, setEquipsList] = useState([]);
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
      await request("api/equipment", options);
      if (data) {
        setEquipsList(data);
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
      await request(`api/equipment/${search}`, options);
      if (data) {
        setEquipsList([data]);
      }
    } catch (e) {
      setFind(false);
      console.error(e);
    }
  };

  const cardList = () => {
    if (equipsList.length === 0) {
      return;
    }
    return equipsList.map(handleCards);
  };

  const handleCards = (equip) => {
    return (
      <>
        <CardEquip
          key={equip.index}
          title={equip.name}
          equipment_category={equip.equipment_category}
          weapon_category={equip.weapon_category}
          weapon_range={equip.weapon_range}
          cost={equip.cost}
          damage={equip.damage}
          range={equip.range}
          weight={equip.weight}
          special={equip.special}
          properties={equip.properties}
          desc={equip.desc}
        ></CardEquip>
      </>
    );
  };

  function handleReset() {
    setSearch("");
    setFind(true);
    setEquipsList(0);
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
      {equipsList.length > 0 && (
        <div className="cardContainer">{cardList()}</div>
      )}
    </div>
  );
}

export default Equipamentos;
