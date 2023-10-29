import styled from "styled-components";
import Button from "./Button";

const MainCard = styled.div`
  display: flex;
  margin-left: 30%;
  border-radius: 8px;
  width: 30%;
  padding: 48px;
  background: #0238b8;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
  flex-direction: column;
`;

function Card(props) {
  let title = props.title;
  let content = props.content;
  return (
    <>
      <MainCard>
        <h2>{title}</h2>
        <Button Name={content}></Button>
      </MainCard>
    </>
  );
}

export default Card;
