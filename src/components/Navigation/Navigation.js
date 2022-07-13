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
  display: flex;
  justify-content: center;
`;

const LinkButton = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  border: 1px solid var(--lightcyan);
  border-radius: 8px;
  margin: 2rem;
  color: inherit;
  cursor: pointer;

  &.active {
    background-color: var(--blue);
    color: white;
  }
`;
