import React, { useState } from "react";
import "./header.css";
import navListData from "../data/navListData";
import NavListItem from "./NavListItem";
import SocialLinksItem from "./SocialLinksItem";
import logo from "../images/logo.svg";

function Header({ sectionActive, reference, aboutActive }) {
  const [navList, setNavList] = useState(navListData);
  const [navMobile, setNavMobile] = useState(false);
  const [menu, setMenu] = useState(false);
  const [header, setHeader] = useState(false);

  const handleNavMobile = () => {
    setNavMobile(!navMobile);
    setMenu(!menu);
  };

  const handleNavOnClick = (id, target) => {
    if (target === "header") {
      setHeader(false);
    } else {
      setHeader(true);
    }

    if (target === "about") {
      aboutActive(true);
    } else {
      aboutActive(false);
    }

    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });
    setNavList(newNavList);
    sectionActive(target);
  };

  return (
    <header
      id="header"
      ref={reference}
      className={header ? "header-top" : null}
    >
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>

          <nav
            id="navbar"
            className={`navbar ${navMobile ? "navbar-mobile" : null}`}
          >
            <ul>
              {navList.map((item) => (
                <NavListItem
                  key={item._id}
                  item={item}
                  navOnClick={handleNavOnClick}
                />
              ))}
            </ul>
            {menu ? (
              <i
                className="bi bi-x mobile-nav-toggle"
                onClick={handleNavMobile}
              ></i>
            ) : (
              <i
                className="bi bi-list mobile-nav-toggle"
                onClick={handleNavMobile}
              ></i>
            )}
          </nav>
        </div>

        <div className="hero-content">
          <div className="hero-wrapper">
            <div className="text-top">
              <span className="wave">👋</span> my name is Kolade Oluwadara and I'm a
            </div>
            <div className="text-role">
              <div className="role-title">Software</div>
              <div className="role-subtitle">Engineer</div>
            </div>
            <div className="social-links">
              <SocialLinksItem name="github" url="https://github.com/kolade082" />
              <SocialLinksItem
                name="instagram"
                url="https://www.instagram.com/kolade_oo/"
              />
              <SocialLinksItem
                name="linkedin"
                url="https://www.linkedin.com/in/kolade-oluwadara-87563a245/"
              />
              <SocialLinksItem name="envelope" url="koladedara@outlook.com" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
