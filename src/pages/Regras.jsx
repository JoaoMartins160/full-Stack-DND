import Sidebar from "../components/Sidebar";
import useApi from "../hooks/useApi";
import styled from "styled-components";

const RetultsData = styled.h2`
  display: flex;
  flex-direction: column;
  padding-left: 30%;
`;

function Regras() {
  const { getdata } = useApi("rules", "results");

  return (
    <>
      <Sidebar></Sidebar>
      {getdata.map((results) => (
        <RetultsData key={results.id}>{results.name}</RetultsData>
      ))}
    </>
  );
}

export default Regras;
