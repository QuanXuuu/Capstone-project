import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavContainer>
      <LinkButton to="/">Home</LinkButton>
      <LinkButton to="/recipes/new">Add Recipe</LinkButton>
      <LinkButton to="/recipes/all">Show All</LinkButton>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  padding: 30px;
`;

const LinkButton = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  border: 1px solid grey;
  border-radius: 8px;
  color: black;
  margin: 0.5rem;

  &.active {
    background-color: rgb(70, 130, 180);
    color: white;
  }
`;
