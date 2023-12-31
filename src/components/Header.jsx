import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import logo from '../assets/logo/Logo.png';

const mainNav = [
  {
    display: "Home",
    path: "/"
  },
  {
    display: "Products",
    path: "/catalog"
  },
]

const Header = () => {

  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex(e => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) { // Check if headerRef.current is not null
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          headerRef.current.classList.add('shrink');
        } else {
          headerRef.current.classList.remove('shrink');
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // You should remove the same event listener you added
    };
  }, []);

  const menuLeft = useRef(null);
  const menuToggle = () => menuLeft.current.classList.toggle('active');

  return (
    <div ref={headerRef} className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt=""/>
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className='bx bx-menu-alt-left'></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className='bx bx-chevron-left'></i>
            </div>
            {
              mainNav.map((item,index) => (
                <div 
                  key={index} 
                  className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active': ''}`}
                  onClick={menuToggle}
                  >
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))
            }
          </div>
          <div className="header__menu__right">
            {/* <div className="header__menu__item header__menu__right__item">
              <div className="header__menu__right__item__phone">
                <i class='bx bxs-phone-call'></i>
              </div> 
              <div className="header__menu__right__item__number">
                <a href="tel:+959421039311">959421039311</a>
              </div>
            </div> */}
            <div className="header__menu__item header__menu__right__item">
              <Link to="/contact">
                <span>Contact Us</span>
              </Link>
            </div>
            {/* <div className="header__menu__item header__menu__right__item">
                <i className='bx bx-shopping-bag'></i>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <i className='bx bx-user'></i>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;