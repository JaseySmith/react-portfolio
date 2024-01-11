import React from 'react';
import Project1 from '../img/project1.webp';
import Project2 from '../img/project2.webp';
import Project3 from '../img/project3.webp';
import Project4 from '../img/project4.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <div>
        <div id="projects">
          <FontAwesomeIcon icon={faCode} />
            <h2>Things I've Built</h2>
            <p className="text mb-40">Crafted websites and apps harmonizing aesthetics and functionality. <br></br>Expert in HTML, CSS, JS, responsive design.</p>
            <div className="container">
              <div className="card">
                <a href="http://www.scaryplacesnearme.com" target="_blank" rel="noreferrer">
                  <img src={Project1} alt="scaryplacesnearme.com" />
                  <div className="overlay">
                    <p className="green-text">React, Node, & Express</p>
                    <h3>Search App UI</h3>
                    <p className="text">Search application for exploring scary places around the world. The database is currently being developed.</p>
                  </div>
                </a>
              </div>
              <div className="card">
                <a href="https://www.haysclaysco.com" target="_blank" rel="noreferrer">
                  <img src={Project2} alt="haysclaysco.com" />
                  <div className="overlay">
                    <p className="green-text">Shopify & CSS</p>
                    <h3>E-commerce Store</h3>
                    <p className="text">Built using the Debut theme with some custom HTML/CSS and plug-ins for some extra customization.</p>
                  </div>
                </a>
              </div>
              <div className="card">
                <a href="https://www.championtowandtransport.com" target="_blank" rel="noreferrer">
                  <img src={Project3} alt="championtowandtransport.com" />
                  <div className="overlay">
                    <p className="green-text">WordPress & CSS</p>
                    <h3>Landing Page</h3>
                    <p className="text">Built using WordPress with custom CSS and plug-ins for collecting potential customer information.</p>
                  </div>
                </a>
              </div>
              <div className="card">
                <a href="https://codepen.io/JaseySmith/full/wvjrJvg" target="_blank" rel="noreferrer">
                  <img src={Project4} alt="To-do List" />
                  <div className="overlay">
                    <p className="green-text">React & CSS</p>
                    <h3>CRUD App</h3>
                    <p className="text">Efficient to-do list crafted with React and CSS for seamlessly managing tasks in a minimalist interface.</p>
                  </div>
                </a>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Projects;