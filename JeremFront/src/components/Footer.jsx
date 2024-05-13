
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footerHaut">
                <NavLink to="/">
                    <img className="logoFooter"  alt ="logo LaFamicale" /> 
                </NavLink>
            </div>
            <div className="footerMentions">
                <NavLink to="/mentionslégales">Mentions Légales</NavLink>
            </div>
            <div className="footerBas">
                Jérémy Promsy - © 2024 Tous droits réservés
            </div>
        </div>
    )
}

export default Footer;


//<Link to="https://fr.linkedin.com/in/sandra-testard-158309145" target="_blank" rel="noopener"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></Link>