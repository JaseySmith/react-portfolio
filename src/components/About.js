import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useScrollAnimation } from "../components/useScrollAnimation";


function About() {

  useScrollAnimation(".fade-in-up");

  return (
    <div>
        <div id="about">
            <div className="fade-in-up">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <h2 className="fade-in-up">About Me</h2>
            <div className="flex">
              <p className="fade-in-up text" style={{ animationDelay: "0.1s" }}>Hi, I'm Jasey, a full-stack web developer. My journey into the world of coding began four years ago when I discovered the endless possibilities it offered. This discovery drove me to start my formal education through <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">freeCodeCamp.org.</a><br></br><br></br>

Over the years, I've earned multiple certifications in a dozen programming languages and have had the pleasure of helping clients enhance their online presence. I specialize in the React JavaScript library and work primarily with the M.E.R.N. stack. If you have any questions or would like to discuss a project, feel free to reach out at <a href="mailto:jaseyhsmith@gmail.com" target="_blank" rel="noreferrer">jaseyhsmith@gmail.com.</a></p>
              <div className="container">
                <div  className="fade-in-up flexbox" style={{ animationDelay: "0.2s" }}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">HTML</p>
                </div>
                <div  className="fade-in-up flexbox" style={{ animationDelay: "0.3s" }}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">CSS</p>
                </div>
                <div  className="fade-in-up flexbox" style={{ animationDelay: "0.4s" }}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">JavaScript</p>
                </div>
                <div  className="fade-in-up flexbox" style={{ animationDelay: "0.5s" }}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">React</p>
                </div>
                <div  className="fade-in-up flexbox" style={{ animationDelay: "0.6s" }}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">Express</p>
                </div>
                <div  className="fade-in-up flexbox" style={{ animationDelay: "0.7s" }}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">Node</p>
                </div>
                <div  className="fade-in-up flexbox" style={{ animationDelay: "0.8s" }}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">Wordpress</p>
                </div>
                <div  className="fade-in-up flexbox" style={{ animationDelay: "0.9s" }}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">Shopify</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default About;