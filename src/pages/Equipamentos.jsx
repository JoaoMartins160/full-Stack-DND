import useApi from "../hooks/useApi";
import Card from "../components/Card";

function Equipamentos() {
  const { getdata } = useApi("equipment", "results");
  return (
    <>
      {getdata.map((results) => (
        <Card key={results.id} title={results.name} content={"Ver mais"}></Card>
      ))}
    </>
  );
}

export default Equipamentos;
