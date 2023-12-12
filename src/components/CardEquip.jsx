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

const LineEquip = styled.div`
  display: flex;
  border-bottom: solid gold;
  flex-direction: row;
`;

const CollumnEquip = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: ${(props) => props.$customBorder};
`;

function CardEquip(props) {
  const title = props.title;
  const equipment_category = props.equipment_category;
  const weapon_category = props.weapon_category;
  const cost = props.cost;
  const damage = props.damage;
  const weight = props.weight;
  const weapon_range = props.weapon_range;
  const range = props.range;
  const special = props.special;
  const properties = props.properties;
  const desc = props.desc;

  return (
    <MainCard>
      <h2>{title}</h2>
      <LineEquip>
        <TextIn>{equipment_category}</TextIn>
        <TextIn>{weapon_category} | {weapon_range}</TextIn>
        <TextIn>{cost}</TextIn>
        <TextIn>{damage} | {range} | {weight}</TextIn>
      </LineEquip>
      <CollumnEquip>
        <LineEquip>
          <TextIn>{special}</TextIn>
          <TextIn>{properties}</TextIn>
          <TextIn>{desc}</TextIn>
        </LineEquip>
      </CollumnEquip>
    </MainCard>
  );
}

export default CardEquip;