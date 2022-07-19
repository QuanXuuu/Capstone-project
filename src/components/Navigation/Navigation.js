import {IoMdAddCircle} from 'react-icons/io';
import {MdOutlineFoodBank} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavContainer>
      <Nav>
        <StyledNavLink to="/">
          <LogoContainer>
            <MdOutlineFoodBank id="logo-home" />
            <LogoSpan> YUMME</LogoSpan>
          </LogoContainer>
        </StyledNavLink>

        <StyledNavLink to="/recipes/new">
          <AddContainer>
            <IoMdAddCircle id="logo-add" />
            <AddSpan>Add Recipe</AddSpan>
          </AddContainer>
        </StyledNavLink>
      </Nav>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  z-index: 999;
`;

const Nav = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  background-color: var(--blue);
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 8px;
  margin: 2rem;
  color: white;
  cursor: pointer;

  #logo-home {
    font-size: 4rem;
  }
  #logo-add {
    font-size: 2rem;
  }
`;

const LogoSpan = styled.span`
  font-size: 1.8rem;
  padding-top: 15px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddSpan = styled.span`
  font-size: 1rem;
`;
