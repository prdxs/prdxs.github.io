import styled, { css } from 'styled-components';

import Link from 'components/Link';

const styleFn = ({ theme }) => {
  const isLightMode = theme.mode === 'light';
  const color = theme.fns.getColor(
    isLightMode ? 'common.white' : 'secondary.light'
  );
  const hoverColor = theme.fns.getColor(
    isLightMode ? 'secondary.light' : 'common.white'
  );

  return css`
    &:link {
      color: ${color};

    }
    
    &:visited {
      color: ${color};
    }

    @media (hover: hover) {
      &:hover {
        text-decoration: none;
        color: ${hoverColor};
      }
    }

    &.active {
      color: ${hoverColor};
      cursor: default;
    }
  `;
};

const NavbarLink = styled(Link).attrs({ activeClassName: 'active' })`
  text-decoration: none;
  font-weight: bold;

  ${styleFn}
`;

export default NavbarLink;
