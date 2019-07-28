import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './core/App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './prism-theme.css';
import { StoreProvider } from 'easy-peasy';
import store from './core/store';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#CCCCCC',
      contrastText: '#000000'
    },
    secondary: {
      main: '#9C27B0',
      light: '#D05CE3',
      dark: '#6A0080',
      contrastText: '#FFFFFF'
    }
  }
});

ReactDOM.render(
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root')
);
