import React from 'react';
import styled, { css } from 'styled-components';
import { Link as InternalLink } from 'gatsby';

const externalHttpLink = /^(?:https?)?:\/\/.*/;
const telLink = /^tel:.*/;
const mailLink = /^mailto:.*/;

const UnstyledLink = React.forwardRef(({ href, ...otherProps }, ref) => {
  const isHttpExternal = externalHttpLink.test(href);
  const isMail = mailLink.test(href);
  const isTel = telLink.test(href);
  const isExternal = isHttpExternal || isMail || isTel;

  const Component = isExternal ? 'a' : InternalLink;

  if (isExternal) {
    if (isHttpExternal || isMail) {
      otherProps.target = '_blank';
      otherProps.rel = 'noopener noreferrer';
    }
  } else {
    otherProps.to = href;
  }

  return <Component ref={ref} href={href} {...otherProps} />;
});

const colorStyleFn = ({
  theme,
  color,
  visitedColor,
  hoverColor,
  activeColor,
}) => {
  const link = theme.fns.getColor(color);
  const visited = theme.fns.getColor(visitedColor);
  const hover = theme.fns.getColor(hoverColor);
  const active = theme.fns.getColor(activeColor);

  return css`
    &:link {
      color: ${link};
    }
    &:visited {
      color: ${visited};
    }
    @media (hover: hover) {
      &:hover {
        color: ${hover};
      }
    }
    &:active {
      color: ${active};
    }
  `;
};

const Link = styled(UnstyledLink)`
  text-decoration: none;
  transition: color 0.1s;

  &:hover {
    text-decoration: underline;
  }

  ${colorStyleFn}
`;

Link.defaultProps = {
  color: 'link.default',
  visitedColor: 'link.visited',
  hoverColor: 'link.default',
  activeColor: 'link.active',
};

export default Link;
