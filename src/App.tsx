import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import store from './store';

import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes />

      <GlobalStyle />
    </Router>
  </Provider>
);

export default App;
