import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import useApi from "../hooks/useApi";

const RetultsData = styled.h2`
  display: flex;
  flex-direction: column;
  padding-left: 30%;
`;

function Habilidades() {
  const { getdata } = useApi("spells", "results");

  return (
    <>
      <Sidebar></Sidebar>
      {getdata.map((results) => (
        <RetultsData key={results.id}>{results.name}</RetultsData>
      ))}
    </>
  );
}

export default Habilidades;
