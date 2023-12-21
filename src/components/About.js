import React from 'react';
import Background from './Background';
import Socials from './Socials';

function About() {
  return (
    <div>
        <div id="about">
            <div className="content">
              <h1>Hi, I'm Jasey.</h1>
              <p className="text"><span>Front-end web developer</span> located in California, skilled in MERN, CSS, JavaScript. Expert in WordPress and Shopify. Crafting <span>exceptional digital experiences</span> through <a href="https://www.freecodecamp.org/">freecodecamp.org</a> certifications.<br></br><br></br><div className="hide-on-mobile">Away from computer screens, I explore forest trails, tee up on sunny golf courses, and shred nearby slopes, combining tech skills with a passion for the outdoors to create standout web solutions.</div></p>
              <a className="btn" href="#projects">View Projects</a>
              <Socials />
            </div>
            <Background />
        </div>
    </div>
  );
}

export default About;
