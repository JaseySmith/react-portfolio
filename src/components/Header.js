import React from 'react';
import { useState, useEffect } from "react";
import DarkModeToggle from './DarkMode';

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  
  const handleNavClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 74)
    })
  }, [])

  return (
    <header className={scroll ? "header scrolled" : "header"}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-container">
          <a href="index.html">
            <div id="logo">JS</div>
          </a>
        </div>

        {/* Navigation menu */}
        <nav className={
          isNavExpanded ? "nav-menu expanded" : "nav-menu"
        }>
          <a onClick={handleNavClick} href="#home">Home</a>
          <a onClick={handleNavClick} href="#about">About</a>
          <a onClick={handleNavClick} href="#projects">Projects</a>
          <a onClick={handleNavClick} href="#contact">Contact</a>
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