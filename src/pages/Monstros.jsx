import Sidebar from "../components/Sidebar";
import useApi from "../hooks/useApi";
import styled from "styled-components";

const RetultsData = styled.h2`
  display: flex;
  flex-direction: column;
  padding-left: 30%;
`;

function Monstros() {
  const { getdata } = useApi("monsters", "results");

  return (
    <>
      <Sidebar></Sidebar>
      {getdata.map((monster) => (
        <RetultsData key={monster.id}>{monster.name}</RetultsData>
      ))}
    </>
  );
}

export default Monstros;
