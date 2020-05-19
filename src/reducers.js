import { combineReducers } from 'redux';

import toggleThemeReducers from './components/Navbar/components/ThemeToggleButton/ducks/reducers';

const reducers = combineReducers({
  themeMode: toggleThemeReducers,
});

export default reducers;
