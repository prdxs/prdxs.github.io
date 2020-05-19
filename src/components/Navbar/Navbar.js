import React from 'react';
import styled from 'styled-components';

import ThemeToggleButton from './components/ThemeToggleButton';
import NavbarMenu from './components/NavbarMenu';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  height: 3.5rem;
  width: 100%;
  padding: 0.5rem 0.5rem 0;
  z-index: 10;
`;

const Navbar = ({ className, style, children }) => (
  <NavbarContainer className={className} style={style}>
    <ThemeToggleButton
      mr="3rem"
      position="absolute"
      left="calc(50% - 1.5rem)"
    />
    <NavbarMenu>{children}</NavbarMenu>
  </NavbarContainer>
);

export default Navbar;
