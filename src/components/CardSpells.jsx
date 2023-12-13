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

const LineSpells = styled.div`
  display: flex;
  border-bottom: solid gold;
  flex-direction: row;
`;

const CollumnSpells = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: ${(props) => props.$customBorder};
`;

function CardSpells(props) {
  const title = props.title;
  const level = props.level;
  const school = props.school;
  const casting_time = props.casting_time;
  const range = props.range;
  const components = props.components;
  const duration = props.duration;
  const desc = props.desc;
  const higher_level = props.higher_level;
  const classes = props.classes;

  return (
    <MainCard>
      <h2>{title}</h2>
      <LineSpells>
        <TextIn>{level} - </TextIn>
        <TextIn>{school}</TextIn>
      </LineSpells>
      <LineSpells>
        <TextIn>Tempo de Conjuração: {casting_time}</TextIn>
      </LineSpells>
      <LineSpells>
        <TextIn>Alcance: {range}</TextIn>
      </LineSpells>
      <LineSpells>
        <TextIn>Componentes: {components}</TextIn>
      </LineSpells>
      <LineSpells>
        <TextIn>Duração: {duration}</TextIn>
      </LineSpells>
      <CollumnSpells>
        <TextIn>Descrição: {desc}</TextIn>
      </CollumnSpells>
      <CollumnSpells>
        <TextIn>Em níveis superiores: {higher_level}</TextIn>
        <TextIn>Classes: {classes}</TextIn>
      </CollumnSpells>
    </MainCard>
  );
}

export default CardSpells;
