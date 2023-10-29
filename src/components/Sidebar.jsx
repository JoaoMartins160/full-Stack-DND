import Button from "./Button";
import styled from "styled-components";

const SidebarElements = styled.div`
  background-color: #2e2e2e;
  padding: 15px;
  text-align: center;
  position: fixed;
  width: 150px;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  border-right: 3px solid #ff1111;
`;

function Sidebar() {
  return (
    <SidebarElements>
      <img src="#" alt="Logo Codex Inicial" />
      <Button redirection={"/"} Name={"Home"}></Button>
      <Button redirection={"Regras"} Name={"Regras"}></Button>
      <Button redirection={"Classes"} Name={"Classes"}></Button>
      <Button redirection={"Equipamentos"} Name={"Equipamentos"}></Button>
      <Button redirection={"Monstros"} Name={"Monstros"}></Button>
      <Button redirection={"Habilidades"} Name={"Habilidades"}></Button>
      <Button redirection={"Raças"} Name={"Raças"}></Button>
    </SidebarElements>
  );
}

export default Sidebar;
