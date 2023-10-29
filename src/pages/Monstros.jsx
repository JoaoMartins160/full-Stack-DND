import Sidebar from "../components/Sidebar";
import useApi from "../hooks/useApi";
import Card from "../components/Card";

function Monstros() {
  const { getdata } = useApi("monsters", "results");

  return (
    <>
      <Sidebar></Sidebar>
      {getdata.map((monster) => (
        <Card key={monster.id} title={monster.name} content={"Ver mais"}></Card>
      ))}
    </>
  );
}

export default Monstros;
