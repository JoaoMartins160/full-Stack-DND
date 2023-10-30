import { Link, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import "../styles/Button.css";

const ButtonNav = styled.li`
  color: black;
  text-decoration: none;
  display: block;
  border: 3px solid #000;
  background-color: #d9d9d9;
  margin-top: 24px;
  border-radius: 5px;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  letter-spacing: 0.5px;
  &:hover {
    color: #fff;
    background-color: #000;
    transition: 200ms linear;
    border: 3px solid #fff;
  }
`;

function Button(props) {
  let Name = props.Name;
  let redirection = props.redirection;
  return <CustomLink to={redirection}>{Name}</CustomLink>;
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <ButtonNav to={to} {...props} className={isActive}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </ButtonNav>
  );
}
export default Button;
