import React from 'react';
import { HashRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';

import Header from './Header';
import Footer from './Footer';
import MainRoutes from '../routes/MainRoutes';

const Layout = () => {
  return (
    <HashRouter>
      <Route render={props => (
        <div>
          <Header {...props}/>
          <div className="container">
            <div className="main">
              <MainRoutes />
            </div>
          </div>
          <Footer />
        </div>
      )}/>
    </HashRouter>
  )
}

export default Layout;