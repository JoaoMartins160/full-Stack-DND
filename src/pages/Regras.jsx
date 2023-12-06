import useApi from "../hooks/useApi";
import Card from "../components/Card";

function Regras() {
  const { getdata } = useApi("/api/rules", "results");

  return (
    <>
      {getdata.map((results) => (
        <Card key={results.id} title={results.name} content={"Ver mais"}></Card>
      ))}
    </>
  );
}

export default Regras;
