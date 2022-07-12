import {AiTwotoneHome} from 'react-icons/ai';
import {AiFillFolderAdd} from 'react-icons/ai';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavContainer>
      <LinkButton to="/">
        <AiTwotoneHome /> Home
      </LinkButton>
      <LinkButton to="/recipes/new">
        <AiFillFolderAdd /> Add Recipe
      </LinkButton>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  padding: 5px;
  display: flex;
  justify-content: center;
  background-color: rgb(224, 255, 255);
`;

const LinkButton = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  border: 1px solid rgb(70, 130, 180);
  border-radius: 8px;
  color: black;
  margin: 2rem;
  color: inherit;

  &.active {
    background-color: rgb(70, 130, 180);
    color: white;
  }
`;
