import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './core/App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import './prism-theme.css';
import { StoreProvider } from 'easy-peasy';
import store from './core/store';

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
