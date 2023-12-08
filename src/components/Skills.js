import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Skills() {
  return (
    <div>
        <div id="skills">
            <FontAwesomeIcon icon={faMicrochip} />
            <h2>Skills & Technologies</h2>
            <p className="text mb-40">Proficient in MERN stack, CSS, JavaScript. Expert in WordPress and Shopify.<br></br> Crafting seamless digital experiences.</p>
            <div className="container">
                <div className="flexbox">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">MongoDB</p>
                </div>
                <div className="flexbox">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">Express</p>
                </div>
                <div className="flexbox">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">React</p>
                </div>
                <div className="flexbox">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">Node</p>
                </div>
                <div className="flexbox">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">CSS</p>
                </div>
                <div className="flexbox">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">JavaScript</p>
                </div>
                <div className="flexbox">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">Wordpress</p>
                </div>
                <div className="flexbox">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">Shopify</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Skills;