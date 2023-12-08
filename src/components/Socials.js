import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';


function Socials() {
  return (
    <div>
        <nav className="social-menu">
            <a href="https://www.instagram.com/jaseyhsmith/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/JaseySmith" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="mailto:jaseyhsmith@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://www.linkedin.com/in/jasey-smith-34594a15b/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://codepen.io/JaseySmith" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCodepen} /></a>
        </nav>
    </div>
  );
}

export default Socials;