import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavContainer>
      <LinkButton to="/">Home</LinkButton>
      <LinkButton to="/recipes/new">Add Recipe</LinkButton>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const LinkButton = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  border: 1px solid grey;
  border-radius: 8px;
  color: black;
  margin: 1rem;

  &.active {
    background-color: rgb(70, 130, 180);
    color: white;
  }
`;
