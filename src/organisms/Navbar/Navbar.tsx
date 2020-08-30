import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Container } from '../../atoms/Container/Container';
import { NavbarUserSection } from '../NavbarUserSection/NavbarUserSection';
import { State } from '../../store/reducer';

const NavbarContainer = styled.div`
  height: 50px;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  padding: 12px 0;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.border.color};
  margin-bottom: 1.5rem !important;

  @include mobile {
    height: 30px;
    padding: 5px 0;
  }

  .link {
    padding: 0 10px;
  }
`;

export const Navbar = () => {
  const userData = useSelector((state: State) => state.userData);

  return (
    <NavbarContainer>
      <Container withoutPadding>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/">
          Link to some content
        </Link>
        {userData && (
          <>
            <Link className="link" to="/dashboard">
              Dashboard
            </Link>
            <Link className="link" to="/profile">
              Profile
            </Link>
          </>
        )}
        <div style={{ float: 'right' }}>
          <NavbarUserSection />
        </div>
      </Container>
    </NavbarContainer>
  );
};
