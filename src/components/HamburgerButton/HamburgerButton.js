import React from 'react';
import styled, { css } from 'styled-components';

const HamburgerInner = styled.span`
  display: block;
  margin-top: -2px;
  top: auto;
  bottom: 0;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition-duration: 0.13s;

  &,
  &:before,
  &:after {
    position: absolute;
    width: 40px;
    height: 4px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }

  &:before,
  &:after {
    display: block;
    content: '';
  }

  &:before {
    top: -10px;
    transition: top 0.12s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &:after {
    top: -20px;
    bottom: -10px;
    transition: top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s,
      opacity 0.1s linear;
  }
`;

const colorStyleFn = ({ theme }) => {
  const isLightMode = theme.mode === 'light';
  const color = theme.fns.getColor(
    isLightMode ? 'common.white' : 'secondary.light'
  );
  const hoverColor = theme.fns.getColor(
    isLightMode ? 'secondary.light' : 'common.white'
  );

  return css`
    ${HamburgerInner},
    ${HamburgerInner}:before,
    ${HamburgerInner}:after {
      background-color: ${color};
    }
    &:hover {
      ${HamburgerInner},
      ${HamburgerInner}:before,
      ${HamburgerInner}:after {
        background-color: ${hoverColor};
      }
    }
  `;
};

const activeStyleFn = ({ active, theme }) => {
  if (!active) return '';

  return css`
    ${HamburgerInner} {
      transition-delay: .22s;
      transition-timing-function: cubic-bezier(.215,.61,.355,1);
      transform: translate3d(0,-10px,0) rotate(-45deg);
    }
    ${HamburgerInner}:before {
      top: 0;
      transition: top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s;
      transform: rotate(-90deg);
    }
    ${HamburgerInner}:after {
      top: 0;
      transition: top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s;
      opacity: 0;
    }
  `;
};

const HamburgerBox = styled.span`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;

  ${colorStyleFn}
  ${activeStyleFn}
`;

const HamburgerContainer = styled.button`
  font: inherit;
  height: 24px;
  display: inline-block;
  overflow: visible;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  padding: 0;
  background-color: transparent;
  outline: none;
`;

const HamburgerButton = ({
  className,
  style,
  active,
  color,
  activeColor,
  onClick,
}) => (
  <HamburgerContainer className={className} style={style} onClick={onClick}>
    <HamburgerBox active={active} color={color} activeColor={activeColor}>
      <HamburgerInner />
    </HamburgerBox>
  </HamburgerContainer>
);

export default HamburgerButton;
