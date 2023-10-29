import Sidebar from "../components/Sidebar";
import useApi from "../hooks/useApi";
import Card from "../components/Card";

function Equipamentos() {
  const { getdata } = useApi("equipment", "results");
  return (
    <>
      <Sidebar></Sidebar>
      {getdata.map((results) => (
        <Card
          key={results.id}
          title={results.name}
          content={results.url}
        ></Card>
      ))}
    </>
  );
}

export default Equipamentos;
