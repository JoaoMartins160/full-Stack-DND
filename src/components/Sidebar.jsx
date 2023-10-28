import Button from "./Button";
import styled from "styled-components";

const Sidebar_Elements = styled.div`
  background-color: #2E2E2E;
  padding: 15px;
  text-align: center;
  position: fixed;
  width: 150px;
  height: 100vh;
  left: 0;
  top: 0;
  display: fixed;
  border-right: 3px solid #FF1111;
`;

function Sidebar() {
  return (
    <Sidebar_Elements>
      <img src="#" alt="Logo Codex Inicial" />
      <Button>{Regras.Name}</Button>
      <Button>{Classes.Name}</Button>
      <Button>{Equipamentos.Name}</Button>
      <Button>{Monstros.Name}</Button>
      <Button>{Habilidades.Name}</Button>
      <Button>{Raças.Name}</Button>
    </Sidebar_Elements>
  );
}

export default Sidebar;
