import React from 'react';
import styled, { css } from 'styled-components';
import { palette, positions, shadows, spacing } from '@material-ui/system';

const sizeStyleFn = ({ size }) => css`
  height: ${size};
  width: ${size};
`;

const rotationStyleFn = ({ theme }) => {
  const isLightMode = theme.mode === 'light';
  const rotation = isLightMode ? 45 : 225;

  return css`
    transform: rotateZ(${rotation}deg);
  `;
};

const ThemeToggleButtonContainer = styled.button`
  outline: none;
  border: 1px solid black;
  border-radius: 50%;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  background: black;

  ${sizeStyleFn}
  ${positions}
  ${shadows}
  ${spacing}
`;

const ThemeToggleButtonInnerContainer = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  transition: transform 0.1s;
  ${rotationStyleFn}
`;

const SemiCircle = styled.div`
  display: inline-block;
  height: 100%;
  width: 50%;

  ${palette}
`;

const ThemeToggleButtonComponent = ({
  className,
  style,
  size,
  toggleThemeMode,
  ...otherProps
}) => (
  <ThemeToggleButtonContainer
    className={className}
    style={style}
    size={size}
    onClick={toggleThemeMode}
    {...otherProps}
  >
    <ThemeToggleButtonInnerContainer>
      <SemiCircle bgcolor="white" />
      <SemiCircle bgcolor="black" />
    </ThemeToggleButtonInnerContainer>
  </ThemeToggleButtonContainer>
);

ThemeToggleButtonComponent.defaultProps = {
  boxShadow: 4,
  size: '3rem',
};

export default ThemeToggleButtonComponent;
