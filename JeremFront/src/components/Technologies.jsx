import React from "react";
import "../styles/technologies.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Technologies() {
    return (
      <div className="partTechnologies">
        <h2>Mes technologies</h2>
        <div className="cardTechnologie cardTechno1">
            <FontAwesomeIcon icon="fa-brands fa-html5" />
            <h3>HMTL</h3>
        </div>
        <div className="cardTechnologie cardTechno2">
            <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
            <h3>CSS</h3>
        </div>
        <div className="cardTechnologie cardTechno3">
          <FontAwesomeIcon icon="fa-brands fa-js" />
            <h3>Javascript</h3>
        </div>
        <div className="cardTechnologie cardTechno4">
            <FontAwesomeIcon icon="fa-brands fa-react" />
            <h3>React</h3>
        </div>
        <div className="cardTechnologie cardTechno5">
            <FontAwesomeIcon icon="fa-brands fa-wordpress" /> 
            <h3>Wordpress</h3>
        </div>
      </div>
    );
  }
  
export default Technologies;