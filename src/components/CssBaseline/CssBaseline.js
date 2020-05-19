import React from 'react';
import { createGlobalStyle, css } from 'styled-components';

const styleFn = ({ theme }) => {
  const isLightTheme = theme.mode === 'light';
  const whiteColor = theme.fns.getColor('common.white');
  const blackColor = theme.fns.getColor('common.black');
  const secondaryMainColor = theme.fns.getColor('secondary.main');
  const backgroundColor = isLightTheme ? whiteColor : secondaryMainColor;
  const color = isLightTheme ? 'inherit' : whiteColor;

  const paletteCssVars = Object.entries(theme.palette).reduce(
    (allCss, [group, itemMap]) => {
      const groupCss = Object.entries(itemMap).reduce(
        (groupCss, [name, value]) => {
          return css`
            ${groupCss}
            --${group}-${name}: ${value};
          `;
        },
        ''
      );

      return css`
        ${allCss}
        ${groupCss}
      `;
    },
    ''
  );

  return css`
    :root {
      ${paletteCssVars}
    }

    h1::selection,
    h2::selection,
    h3::selection,
    h4::selection,
    h5::selection,
    h6::selection,
    p::selection,
    a::selection,
    figcaption::selection {
        background: var(${isLightTheme ? '--secondary-main' : '--common-white' });
        color: var(${isLightTheme ? '--common-black' : '--common-black' });
    }

    body {
      background: ${backgroundColor};
      color: ${color};
      transition: all 0.1s;
    }
  `;
};

const CssBaseline = React.memo(createGlobalStyle`
  ${styleFn}
`);

export default CssBaseline;
