import React from 'react';
import Background from './Background';

function About() {
  return (
    <div>
        <div id="about">
            <div className="content">
              <h1>Hi, I'm Jasey.</h1>
              <p className="text"><span>Front-end web developer</span> located in California, skilled in MERN, CSS, JavaScript. Expert in WordPress and Shopify. Crafting <span>exceptional digital experiences</span> through <a href="https://www.freecodecamp.org/" target="_blank">freecodecamp.org</a> certifications.<div className="hide-on-mobile"><br></br>Away from computer screens, I explore forest trails, tee up on sunny golf courses, and shred nearby slopes, combining tech skills with a passion for the outdoors to create standout web solutions.</div></p>
              <div className="flex">
                <a className="btn" href="#projects">View Projects</a>
                <a className="alt-btn" href="#skills"><span>&lt;</span>View Skills<span>/&gt;</span></a>
              </div>
            </div>
            <Background />
        </div>
    </div>
  );
}

export default About;
