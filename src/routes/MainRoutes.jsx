import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Contact from '../pages/Contact';
import Product from '../pages/Product';

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:slug" component={Product}/>
      <Route path="/catalog" component={Catalog}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  );
};

export default MainRoutes;