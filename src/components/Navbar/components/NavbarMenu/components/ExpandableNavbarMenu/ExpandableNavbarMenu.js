import React, { useLayoutEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import UnstyledHamburgerButton from 'components/HamburgerButton';
import NavbarLink from '../../../NavbarLink';

const HamburgerButton = styled(UnstyledHamburgerButton)`
  position: absolute;
  right: 1.5rem;
  top: 0.83rem;
`;

const expansionStyleFn = ({ showLinks }) =>
  showLinks &&
  css`
    ${NavbarLink} {
      opacity: 1;
    }
  `;

const ExpandableNavbarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  ${NavbarLink} {
    opacity: 0;
    font-size: 2rem;
    margin-bottom: 1.45rem;
    transition: opacity 0.1s;
  }
  ${expansionStyleFn}
`;

const ExpandableNavbarMenu = ({
  className,
  style,
  children,
  isExpanded,
  onExpansion,
}) => {
  const [showLinks, setShowLinks] = useState(false);

  const processedChildren = React.Children.map(children, child => {
    return React.cloneElement(child, { onClick: onExpansion });
  });

  useLayoutEffect(() => {
    const timeoutHandle = setTimeout(() => setShowLinks(isExpanded), 100);
    return () => clearTimeout(timeoutHandle);
  }, [isExpanded]);

  return (
    <ExpandableNavbarMenuContainer
      className={className}
      style={style}
      showLinks={showLinks}
    >
      <HamburgerButton active={isExpanded} onClick={onExpansion} />
      {isExpanded && processedChildren}
    </ExpandableNavbarMenuContainer>
  );
};

export default ExpandableNavbarMenu;
