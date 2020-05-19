import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import CssBaseline from 'components/CssBaseline';
import Navbar, { NavbarLink } from 'components/Navbar';
import defaultLightTheme from 'themes/defaultLightTheme';
import defaultDarkTheme from 'themes/defaultDarkTheme';

const Container = styled.div`
  margin: 0 auto;
  max-width: 42rem;
`;

const Main = styled.main`
  padding: 6rem 1.5rem 0;
`;

const mapModeToTheme = {
  LIGHT: defaultLightTheme,
  DARK: defaultDarkTheme,
};

const BaseLayoutComponent = ({ children, themeMode }) => (
  <ThemeProvider theme={mapModeToTheme[themeMode]}>
    <CssBaseline />
    <Container>
      <Navbar>
        <NavbarLink to="/">About</NavbarLink>
        <NavbarLink to="/posts">Posts</NavbarLink>
      </Navbar>
      <Main>{children}</Main>
    </Container>
  </ThemeProvider>
);

BaseLayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayoutComponent;
