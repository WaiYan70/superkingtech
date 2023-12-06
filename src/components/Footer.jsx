import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Grid from './Grid';
import logo from '../assets/logo/Logo.png';

const footerAboutLinks = [
  {
    display: "About-1",
    path: "/about"
  },
  {
    display: "About-2",
    path: "/about"
  },
  {
    display: "About-3",
    path: "/about"
  },
  {
    display: "About-4",
    path: "/about"
  }
]

const footerCustomerLinks = [
  {
    display: "About-5",
    path: "/about"
  },
  {
    display: "About-6",
    path: "/about"
  },
  {
    display: "About-7",
    path: "/about"
  }
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid
          col={4}
          mdCol={2}
          smCol={1}
          gap={10}
        >
          {/* Footer Phone Number */}
          <div>
            <div className="footer__title">
              Phone Number
            </div>
            <div className="footer__content">
              <p>
                Phone Number - 1 <strong>0123456789</strong>
              </p>
              <p>
                Phone Number - 2 <strong>0123456789</strong>
              </p>
              <p>
                Phone Number - 3 <strong>0123456789</strong>
              </p>
            </div>
          </div>
          {/* Footer About Link */}
          <div>
            <div className="footer__title">
              Footer - About - Link
            </div>
            <div className="footer__content">
              {
                footerAboutLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          {/* Footer Customer Link */}
          <div>
            <div className="footer__title">
              Footer - Customer - Link
            </div>
            <div className="footer__content">
              {
                footerCustomerLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          {/* Footer About Super King Technology */}
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis laboriosam voluptates, officiis quasi sequi sunt sit reiciendis neque deserunt tenetur vitae nam voluptatum accusantium sint. Ducimus voluptatem quam a consequatur!
            </p>
          </div>

        </Grid>
      </div>
    </footer>
  )
}

export default Footer;