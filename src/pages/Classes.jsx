import useApi from "../hooks/useApi";
import Card from "../components/Card";

function Classes() {
  const { getdata } = useApi("classes", "results");

  return (
    <>
      {getdata.map((results) => (
        <Card key={results.id} title={results.name} content={"Ver mais"}></Card>
      ))}
    </>
  );
}

export default Classes;
