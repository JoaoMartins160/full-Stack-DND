import styled from "styled-components";

const TextIn = styled.span`
  text-transform: capitalize;
`;

function Modal(props) {
  const title = props.title;
  const type = props.type;
  const size = props.size;
  const alignment = props.alignment;

  return (
    <div>
      <h2>{title}</h2>
      <TextIn>{type}</TextIn>
      <TextIn>{size}</TextIn>
      <TextIn>{alignment}</TextIn>
    </div>
  );
}

export default Modal;
