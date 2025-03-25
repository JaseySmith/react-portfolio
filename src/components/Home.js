import React from 'react';
import Background from './Background'
import { useScrollAnimation } from "../components/useScrollAnimation";

function Home() {

  useScrollAnimation(".fade-in-up");

  return (
    <div>
        <div id="home">
            <div className="content">
              <h1 className="fade-in-up">Hello, my name is Jasey Smith.</h1>
              <p className="text fade-in-up" style={{ animationDelay: "0.1s" }}>I'm a web developer located in Sacramento, CA.<br></br> I build digital experiences that users love.</p>
              <a className="btn fade-in-up" style={{ animationDelay: "0.2s" }} href="#projects">View Projects</a>
            </div>
            <Background />
        </div>
    </div>
  );
}

export default Home;
