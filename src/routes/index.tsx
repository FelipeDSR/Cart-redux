import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Cart from '../components/Cart';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Cart} />
  </Switch>
);

export default Routes;
