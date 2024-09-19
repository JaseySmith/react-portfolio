import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


function About() {

  useEffect(() => {
    AOS.init({ delay: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div>
        <div id="about">
            <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="50">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <h2 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">About Me</h2>
            <div className="flex">
              <p className="text" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="150">Hi, I'm Jasey, a full-stack web developer. My journey into the world of coding began four years ago when I discovered the endless possibilities it offered. This discovery drove me to start my formal education through <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">freeCodeCamp.org.</a><br></br><br></br>

Over the years, I've earned multiple certifications in a dozen programming languages and have had the pleasure of helping clients enhance their online presence. I specialize in the React JavaScript library and work primarily with the M.E.R.N. stack. If you have any questions or would like to discuss a project, feel free to reach out at <a href="mailto:jaseyhsmith@gmail.com" target="_blank" rel="noreferrer">jaseyhsmith@gmail.com.</a></p>
              <div className="container">
                <div className="flexbox" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="150">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">HTML</p>
                </div>
                <div className="flexbox" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="200">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">CSS</p>
                </div>
                <div className="flexbox" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="250">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">JavaScript</p>
                </div>
                <div className="flexbox" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="300">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">React</p>
                </div>
                <div className="flexbox" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="350">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">Express</p>
                </div>
                <div className="flexbox" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="400">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">Node</p>
                </div>
                <div className="flexbox" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="450">
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p className="alt-text">Wordpress</p>
                </div>
                <div className="flexbox" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="500">
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