import { useApi } from "../hooks/useApi";
import Card from "../components/Card";

function Habilidades() {
  const { getdata } = useApi("/api/spells", "results");

  return (
    <>
      {getdata.map((results) => (
        <Card key={results.id} title={results.name} content={"Ver mais"}></Card>
      ))}
    </>
  );
}

export default Habilidades;
