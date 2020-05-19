import Typography from 'typography';

import theme from './defaultLightTheme';

const typography = new Typography({
  name: theme.name,
  ...theme.typography
});

export const { scale, rhythm, options } = typography;
export default typography;
