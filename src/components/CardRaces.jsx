import styled from "styled-components";

const TextIn = styled.span`
  text-transform: capitalize;
  font-size: 14px;
`;

const MainCard = styled.div`
  display: flex;
  margin-left: 30%;
  border-radius: 8px;
  width: 30%;
  padding: 48px;
  background: #2e2e2e;
  border: 1px solid #ff1111;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
  flex-direction: column;
`;

const LineRaces = styled.div`
  display: flex;
  border-bottom: solid gold;
  flex-direction: row;
`;

const CollumnRaces = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: ${(props) => props.$customBorder};
`;

function CardRaces(props) {
  const title = props.title;
  const ability_bonuses = props.ability_bonuses;
  const speed = props.speed;
  const traits = props.traits;
  const desc = props.desc;
  const starting_proficiencies = props.starting_proficiencies;
  const languages = props.languages;

  return (
    <MainCard>
      <h2>{title}</h2>
      <LineRaces>
        <TextIn>Aumento no valor de habilidade: {ability_bonuses}</TextIn>
        <TextIn>Velocidade: {speed}</TextIn>
      </LineRaces>
      <CollumnRaces>
        <LineRaces>
          <TextIn>Tipo: {traits}</TextIn>
          <TextIn>Descrição: {desc}</TextIn>
          <TextIn>{starting_proficiencies}</TextIn>
          <TextIn>Linguagens: {languages}</TextIn>
        </LineRaces>
      </CollumnRaces>
    </MainCard>
  );
}

export default CardRaces;