
import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css"
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="footer">
            <div className="footerHaut">
            <div className="footerGauche">
                <NavLink to="/">
                    <img className="logoFooter"  alt ="logo LaFamicale" /> 
                </NavLink>
            </div>
            <div className="footerMilieu">
                <ul className="navLinksFooterMid"> 
                    <h4>Informations utiles</h4>
                    <li className="nav-links-footer nav-links-footer1">
                      <NavLink to="#Réalisations">Réalisations</NavLink>
                    </li>
                    <li className="nav-links-footer nav-links-footer2">
                      <NavLink to="#Technologies">Technologies</NavLink>
                    </li>
                    <li className="nav-links-footer nav-links-footer3">
                      <NavLink to="#Informations">Informations</NavLink>
                    </li>
                </ul>
            </div>
            <div className="footerDroit">
                <div className="nav-linksFooter">
                    <div className="footerBoutonContact">
                        <button className="nav-links-footer6">
                            <NavLink to="/contact">Contact</NavLink>
                        </button>
                    </div>
                    <div className="footerBoutonLinkedin">
                        <button className="nav-links-footer7">
                            
                        </button>
                    </div>
                    <div className="footerMentions nav-links-footer">
                        <NavLink to="/mentionslégales">Mentions Légales</NavLink>
                    </div>
                </div>
            </div>
            </div>
            <div className="footerBas">
                Jérémy Promsy - © 2024 Tous droits réservés
            </div>
        </div>
    )
}

export default Footer;


//<Link to="https://fr.linkedin.com/in/sandra-testard-158309145" target="_blank" rel="noopener"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></Link>