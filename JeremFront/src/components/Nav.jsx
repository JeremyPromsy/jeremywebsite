import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

function Navbar() {
return (
    <nav className="header">
          <div className="logoNav">
            <NavLink to="/">
              <img className="logo-img-Mobile" //src={}
               alt="logo Jérémy Promsy" />
              <img className="logo-img-Desktop" //src={} 
              alt="logo Jérémy Promsy" />
            </NavLink>
          </div>
          <div className="contactNav nav-links">
              <NavLink to="/contact">Contact</NavLink>
          </div>
      </nav>
  );
}

export default Navbar;