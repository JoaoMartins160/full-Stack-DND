import styled from "styled-components";

const Button_Nav = styled.a`
  color: black;
  text-decoration: none;
  padding: 14px 0;
  display: block;
  border: 3px solid #000;
  background-color: #D9D9D9;
  margin-top: 24px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
  &hover{
    color: #FFF;
    background-color: #000;
    transition: 200ms linear;
    border: 3px solid #FFF;
  }
`;


function Button(props) {
  let Name = props.Name;
  return (
    <Button_Nav href="#">{Name}</Button_Nav>
  );
}

export default Button;
