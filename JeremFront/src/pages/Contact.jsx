import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="pageInfo">
    <div className="contactPage">
      <div className="contactDiv">
        <h1>Contactez-nous !</h1>
        
        <div className="boutonMail">
          <p>Ou envoyez-nous un mail directement, en cliquant sur le bouton ci-dessous.</p>
          <div className="boutonMailContact">
            <a href="mailto:lafamicale@gmail.com"  aria-label="contacter l'agence par mail"><button className="buttonContactPage">Me joindre </button></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;

// <FormContact /> 