import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Catalog from '../components/Catalog';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Catalog} />
  </Switch>
);

export default Routes;
