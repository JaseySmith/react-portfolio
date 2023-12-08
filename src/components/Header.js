import React from 'react';
import { useState } from "react";
import DarkModeToggle from './DarkMode';

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  
  const handleNavClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <a id="logo" href="index.html">
            <div className="j">J</div>
            <div className="s">S</div>
          </a>
        </div>

        {/* Navigation menu */}
        <nav className={
          isNavExpanded ? "nav-menu expanded" : "nav-menu"
        }>
          <a onClick={handleNavClick} className="hover-effect" href="#about">About</a>
          <a onClick={handleNavClick} className="hover-effect" href="#projects">Projects</a>
          <a onClick={handleNavClick} className="hover-effect" href="#skills">Skills</a>
          <a onClick={handleNavClick} className="hover-effect" href="#contact">Contact</a>
          <DarkModeToggle />
        </nav>
        <div className="burger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </header>
  );
}