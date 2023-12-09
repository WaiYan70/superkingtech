import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Grid from './Grid';
import logo from '../assets/logo/Logo.png';

const footerStoreLinks = [
  {
    display: "Home",
    path: "/"
  },
  {
    display: "Products",
    path: "/catalog"
  },
  {
    display: "Contact",
    path: "/contact"
  }
]

const phoneLinks = [
  {
    phonenumber: "+959-882 883 901",
  },
  {
    phonenumber: "+959-882 883 902",
  },
  {
    phonenumber: "+959-882 883 903",
  },
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
              Phone Numbers
            </div>
            <div className="footer__content">
              <div className="footer__content__phonenumber">
                {/* <i class='bx bxs-phone-call'></i> */}
                {
                  phoneLinks.map((item,index)=>(
                  // <i class='bx bxs-phone-call'></i>
                    <a href={`tel:${item.phonenumber}`} key={index}>
                      <i class='bx bxs-phone-call'></i>
                      <span>{item.phonenumber}</span>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
          {/* Footer About Link */}
          <div>
            <div className="footer__title">
              Location
            </div>
            <div className="footer__content">
              <p lang="my" className="footer__content__location">အမှတ်(၁၃၈)၊ မြေညီထပ်၊ ဆိပ်ကမ်းသာလမ်းအောက်၊ ကျောက်တံတားမြို့နယ်၊ ရန်ကုန်မြို့။</p>
              <p className="footer__content__location">No. 138, Seik Kan Tha Street, Kyauk Ta Da TownShip, Yangon.</p>
            </div>
          </div>
          {/* Footer Customer Link */}
          <div>
            <div className="footer__title">
              About Store
            </div>
            <div className="footer__content">
              {
                footerStoreLinks.map((item, index) => (
                  <p className="footer__content__header" key={index}>
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
            <div className="footer__about__social">
              <div className="footer__about__social__item">
                <a href="https://www.facebook.com/quickmart2022?mibextid=ZbWKwL"><i class='bx bxl-facebook-circle'></i></a>
                <span>Facebook SKT</span>
              </div>
              <div className="footer__about__social__item">
                <i class='bx bxs-envelope'></i>
                <span>quickmart28@gmail.com</span>
              </div>
            </div>
          </div>

        </Grid>
      </div>
      <div><center><i class='bx bx-copyright'></i><strong> 2023 SKT</strong></center></div>
    </footer>
  )
}

export default Footer;