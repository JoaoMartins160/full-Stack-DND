import useApi from "../hooks/useApi";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const RetultsData = styled.h2`
  display: flex;
  flex-direction: column;
  padding-left: 30%;
`;

function Classes() {
  const { getdata } = useApi("classes", "results");

  return (
    <>
      <Sidebar></Sidebar>
      {getdata.map((results) => (
        <div>
          <RetultsData key={results.id}>{results.name}</RetultsData>
          <p>{results.url}</p>
        </div>
      ))}
    </>
  );
}

export default Classes;
