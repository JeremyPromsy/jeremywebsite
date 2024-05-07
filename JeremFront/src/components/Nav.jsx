import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

function Navbar() {

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeMenu = () => {
    setShowLinks(false); 
  };

  return (
    <nav className="header">
      <div className={`navHeader ${showLinks ? "showNav" : "hideNav"}`}>
        <div className="navLogo">
          <div className="navBurger">
          <div className="navGauche">
            <button className="menuIcon" onClick={handleShowLinks}>
              <span className="burgerBar"></span>
            </button>
          </div>
          <div className="logoNav">
            <NavLink to="/" onClick={closeMenu}>
              <img className="logo-img-Mobile" //src={}
               alt="logo VPA" />
              <img className="logo-img-Desktop" //src={} 
              alt="logo VPA" />
            </NavLink>
          </div>
          <div className="navbar">
            <ul className="classNav">
              <li className="nav-links nav-links0">
                <NavLink to="/" onClick={closeMenu}>Accueil</NavLink>
              </li>
              <li className="nav-links nav-links1">
                <NavLink to="#Réalisations" onClick={closeMenu}>Réalisations</NavLink>
              </li>
              <li className="nav-links nav-links2">
                <NavLink to="#Technologies" onClick={closeMenu}>Technologies</NavLink>
              </li>
              <li className="nav-links nav-links3">
                <NavLink to="#Informations" onClick={closeMenu}>Informations</NavLink>
              </li>
              <li className="nav-links nav-links4">
                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
              </li>
            </ul>
          </div>
          </div>
        <div className="contactNav nav-links nav-links5">
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;