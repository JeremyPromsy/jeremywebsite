import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

function Navbar() {
return (
    <nav className="header">
          <div className="logoNav">
            <NavLink to="/">
              <img className="logo-img-Mobile" //src={}
               alt="logo VPA" />
              <img className="logo-img-Desktop" //src={} 
              alt="logo VPA" />
            </NavLink>
          </div>
        <div className="contactNav nav-links nav-links6">
            <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
  );
}

export default Navbar;