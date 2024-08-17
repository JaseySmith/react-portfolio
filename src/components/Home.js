import React from 'react';
import Background from './Background'

function Home() {
  return (
    <div>
        <div id="home">
            <div className="content">
              <h1>Hello, my name is Jasey Smith.</h1>
              <p className="text">I'm a full-stack web developer from Sacramento, CA.<br></br> I build awesome digital experiences that users love.</p>
              <a className="btn" href="#projects">View Projects</a>
            </div>
            <Background />
        </div>
    </div>
  );
}

export default Home;
