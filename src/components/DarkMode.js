import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

function DarkModeToggle() {
  // Use state to manage checkbox state based on theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme in localStorage and apply on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []); // Empty dependency array to run this effect only once

  // Toggle theme when checkbox is clicked
  const handleToggle = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false); // Update the state to light mode
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true); // Update the state to dark mode
    }
  };

  return (
    <label id="toggle" htmlFor="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        checked={isDarkMode} // Controlled checkbox based on state
        onChange={handleToggle} // Handle toggle with state logic
      />
      <FontAwesomeIcon icon={faCircleHalfStroke} />
    </label>
  );
}

export default DarkModeToggle;
