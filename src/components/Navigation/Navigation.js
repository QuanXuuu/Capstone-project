import {IoMdAddCircle} from 'react-icons/io';
import {MdOutlineFoodBank} from 'react-icons/md';
import {MdViewList} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavContainer>
      <Nav>
        <StyledNavLink to="/">
          <AppLogoContainer>
            <MdOutlineFoodBank id="logo-app" />
            <AppTextSpan> YUMME</AppTextSpan>
          </AppLogoContainer>
        </StyledNavLink>

        <IconLinkContainer>
          <StyledNavLink to="/recipes">
            <ViewContainer>
              <MdViewList id="icon-view" />
              <ViewSpan>View</ViewSpan>
            </ViewContainer>
          </StyledNavLink>

          <StyledNavLink to="/recipes/new">
            <AddContainer>
              <IoMdAddCircle id="icon-add" />
              <AddSpan>Add</AddSpan>
            </AddContainer>
          </StyledNavLink>
        </IconLinkContainer>
      </Nav>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Nav = styled.div`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  background-color: var(--secondary-color);
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  margin: 0 1.5rem;
  color: var(--white);
  cursor: pointer;

  #logo-app {
    font-size: 4rem;
  }

  #icon-view,
  #icon-add {
    font-size: 2rem;
  }
`;

const AppLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AppTextSpan = styled.span`
  font-size: 1.8rem;
  padding-top: 15px;
`;

const IconLinkContainer = styled.div`
  display: flex;
`;
const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: -1.5rem;
`;

const ViewSpan = styled.span`
  font-size: 1rem;
`;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddSpan = styled.span`
  font-size: 1rem;
`;
