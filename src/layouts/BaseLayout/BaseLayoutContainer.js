import React from 'react';
import { connect, Provider } from 'react-redux';

import BaseLayoutComponent from './BaseLayoutComponent';
import store from '../../store';

const mapStateToProps = ({ themeMode }) => ({ themeMode });
const BaseLayoutContainer = connect(mapStateToProps)(BaseLayoutComponent);

export default ({ children }) => (
  <Provider store={store}>
    <BaseLayoutContainer>{children}</BaseLayoutContainer>
  </Provider>
);
