import { TOGGLE_THEME_MODE } from './types';

const inverseMap = {
  LIGHT: 'DARK',
  DARK: 'LIGHT',
};

const initialState = 'LIGHT';

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {

    case TOGGLE_THEME_MODE:
      return inverseMap[state];

    default:
      return state;
  }
};

export default reducer;
