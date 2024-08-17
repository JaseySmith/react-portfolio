import React from 'react';
import Project1 from '../img/project1.webp';
import Project2 from '../img/project2.webp';
import Project3 from '../img/project3.webp';
import Project4 from '../img/project4.webp';
import Project5 from '../img/project5.webp';
import Project6 from '../img/project6.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <div>
        <div id="projects">
          <FontAwesomeIcon icon={faCubes} />
            <h2>My Projects</h2>
            <div className="container">
              <div className="card">
                <a href="http://www.scaryplacesnearme.com" target="_blank" rel="noreferrer">
                  <img src={Project1} alt="scaryplacesnearme.com" />
                  <div className="overlay">
                    <p className="green-text"><span>React</span><span>Node</span><span>Express</span></p>
                    <p className="text">An entertainment app with an interactive database for learning about scary places around the globe.</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                </a>
              </div>
              <div className="card">
                <a href="https://www.haysclaysco.com" target="_blank" rel="noreferrer">
                  <img src={Project2} alt="haysclaysco.com" />
                  <div className="overlay">
                    <p className="green-text"><span>Shopify</span><span>HTML</span><span>CSS</span></p>
                    <p className="text">An Ecommerce website built using the Debut theme with custom HTML/CSS and plug-ins for added features.</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                </a>
              </div>
              <div className="card">
                <a href="https://www.championtowandtransport.com" target="_blank" rel="noreferrer">
                  <img src={Project3} alt="championtowandtransport.com" />
                  <div className="overlay">
                    <p className="green-text"><span>WordPress</span><span>HTML</span><span>CSS</span></p>
                    <p className="text">A business website built using the Astra theme with custom HTML/CSS and plug-ins for added features.</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                </a>
              </div>
              <div className="card">
                <a href="https://codepen.io/JaseySmith/full/wvjrJvg" target="_blank" rel="noreferrer">
                  <img src={Project4} alt="To-do List" />
                  <div className="overlay">
                    <p className="green-text"><span>React</span><span>CSS</span></p>
                    <p className="text">An efficient to-do list for seamlessly managing tasks in a minimalist interface.</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                </a>
              </div>
              <div className="card">
                <a href="https://codepen.io/JaseySmith/full/NWrQGba" target="_blank" rel="noreferrer">
                  <img src={Project5} alt="Random Quote Machine" />
                  <div className="overlay">
                    <p className="green-text"><span>React</span><span>CSS</span></p>
                    <p className="text">A random quote machine that generates a random inspirational quote using fetch API.</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                </a>
              </div>
              <div className="card">
                <a href="https://codepen.io/JaseySmith/full/MWjYWzr" target="_blank" rel="noreferrer">
                  <img src={Project6} alt="Pomodoro Timer" />
                  <div className="overlay">
                    <p className="green-text"><span>React</span><span>CSS</span></p>
                    <p className="text">A digital timer used for maximizing efficiency in an office workplace environment.</p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </div>
                </a>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Projects;