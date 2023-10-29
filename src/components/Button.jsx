import styled from "styled-components";

const ButtonNav = styled.a`
  color: black;
  text-decoration: none;
  padding: 14px 0;
  display: block;
  border: 3px solid #000;
  background-color: #d9d9d9;
  margin-top: 24px;
  border-radius: 5px;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  letter-spacing: 0.5px;
  &hover {
    color: #fff;
    background-color: #000;
    transition: 200ms linear;
    border: 3px solid #fff;
  }
`;

function Button(props) {
  let Name = props.Name;
  let redirection = props.redirection;
  return <ButtonNav href={redirection}>{Name}</ButtonNav>;
}

export default Button;
