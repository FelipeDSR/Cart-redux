import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import HelloWorld from '../components/HelloWorld';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={HelloWorld} />
  </Switch>
);

export default Routes;
