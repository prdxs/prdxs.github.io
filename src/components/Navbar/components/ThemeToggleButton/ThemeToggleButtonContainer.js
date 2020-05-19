import { connect } from 'react-redux';

import { toggleThemeMode } from './ducks/actions';
import ThemeToggleButtonComponent from './ThemeToggleButtonComponent';

const mapStateToProps = ({ themeMode }) => ({ themeMode });
const mapDispatchToProps = { toggleThemeMode };
const ThemeToggleButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeToggleButtonComponent);

export default ThemeToggleButtonContainer;
