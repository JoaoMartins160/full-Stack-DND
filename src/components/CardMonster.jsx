import styled from "styled-components";

const TextIn = styled.span`
  text-transform: capitalize;
  font-size: 14px;
`;

const TextCol = styled(TextIn)`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const LineMonster = styled.div`
  display: flex;
  border-bottom: solid gold;
  flex-direction: row;
`;

const SpaceMonster = styled(LineMonster)`
  justify-content: space-between;
`;

const CollumnMonster = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: ${(props) => props.$customBorder};
`;

function CardMonster(props) {
  const title = props.title;
  const type = props.type;
  const size = props.size;
  const alignment = props.alignment;
  const CA = props.CA;
  const HP = props.HP;
  const SpeedWalk = props.SpeedWalk;
  const SpeedSwin = props.SpeedSwin;

  return (
    <MainCard>
      <h2>{title}</h2>
      <LineMonster>
        <TextIn>{size} </TextIn>
        <TextIn> {type}</TextIn>
        <TextIn>, {alignment}</TextIn>
      </LineMonster>
      <CollumnMonster $customBorder="solid gold">
        <TextIn>Classe de Armadura: {CA}</TextIn>
        <TextIn>Pontos de Vida: {HP}</TextIn>
        <TextIn>
          Velocidade: {SpeedWalk} , Nado: {SpeedSwin}
        </TextIn>
      </CollumnMonster>
      <SpaceMonster>
        <CollumnMonster>
          <TextCol>Força</TextCol>
          <TextCol>{props.STR}</TextCol>
        </CollumnMonster>
        <CollumnMonster>
          <TextCol>Destreza</TextCol>
          <TextCol>{props.DEX}</TextCol>
        </CollumnMonster>
        <CollumnMonster>
          <TextCol>Consti</TextCol>
          <TextCol>{props.CONS}</TextCol>
        </CollumnMonster>
        <CollumnMonster>
          <TextCol>Inteli</TextCol>
          <TextCol>{props.INT}</TextCol>
        </CollumnMonster>
        <CollumnMonster>
          <TextCol>Sabedoria</TextCol>
          <TextCol>{props.WIS}</TextCol>
        </CollumnMonster>
        <CollumnMonster>
          <TextCol>Carisma</TextCol>
          <TextCol>{props.CHA}</TextCol>
        </CollumnMonster>
      </SpaceMonster>
      <LineMonster>
        <TextIn>Desafio: {props.Challenge}</TextIn>
      </LineMonster>
    </MainCard>
  );
}

export default CardMonster;
