import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { palette, shadows } from '@material-ui/system';

import DefaultNavbarMenu from './components/DefaultNavbarMenu';
import ExpandableNavbarMenu from './components/ExpandableNavbarMenu';
import useLessThan480ScreenStrategy from './variantSelectionStrategies/useLessThan480ScreenStrategy';

const expansionStyleFn = ({ isExpandable, isExpanded }) => {
  if (isExpandable && isExpanded) {
    return css`
      height: calc(100vh - 1rem);
      width: 100%;
    `;
  }

  if (isExpandable && !isExpanded) {
    return css`
      width: calc(40px + 3rem);
    `;
  }

  return '';
};

const NavbarMenuContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 1.5rem;
  border-radius: 4px;
  transition: width 0.1s ease-in, height 0.1s ease-in;

  ${palette}
  ${shadows}
  ${expansionStyleFn}
`;

const NavbarMenu = props => {
  const {
    className,
    style,
    children,
    bgcolor,
    boxShadow,
    variantSelectionStrategy,
  } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpansion = useCallback(
    () => setIsExpanded(prevIsExpanded => !prevIsExpanded),
    []
  );

  const isExpandable = variantSelectionStrategy(props);

  const navbarMenuProps = {};
  let SelectedNavbarMenu = DefaultNavbarMenu;

  if (isExpandable) {
    SelectedNavbarMenu = ExpandableNavbarMenu;
    navbarMenuProps.onExpansion = handleExpansion;
    navbarMenuProps.isExpanded = isExpanded;
  }

  return (
    <NavbarMenuContainer
      className={className}
      style={style}
      bgcolor={bgcolor}
      boxShadow={boxShadow}
      isExpandable={isExpandable}
      isExpanded={isExpanded}
    >
      <SelectedNavbarMenu {...navbarMenuProps}>{children}</SelectedNavbarMenu>
    </NavbarMenuContainer>
  );
};

NavbarMenu.propTypes = {
  bgcolor: PropTypes.string,
  boxShadow: PropTypes.number,
  variantSelectionStrategy: PropTypes.func,
};

NavbarMenu.defaultProps = {
  bgcolor: 'primary.main',
  boxShadow: 4,
  variantSelectionStrategy: useLessThan480ScreenStrategy,
};

export default NavbarMenu;
