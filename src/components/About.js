import React from 'react';
import Background from './Background';
import Socials from './Socials';

function About() {
  return (
    <div>
        <div id="about">
            <div className="content">
              <h1>Hi, I'm Jasey.</h1>
              <p className="text"><span>Front-end web developer</span> located in California, skilled in MERN, CSS, JavaScript. Expert in WordPress and Shopify. Crafting <span>exceptional digital experiences</span> through <a href="https://www.freecodecamp.org/">freecodecamp.org</a> certifications.<br></br><br></br><div className="hide-on-mobile">Diving beyond code, I venture into hiking trails, golf courses, and Sierra Nevada slopes, weaving tech and nature to craft dynamic web solutions that surpass expectations.</div></p>
              <a className="btn" href="#projects">View Projects</a>
              <Socials />
            </div>
            <Background />
        </div>
    </div>
  );
}

export default About;
