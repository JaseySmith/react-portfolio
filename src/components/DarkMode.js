import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

function DarkModeToggle() {
  useEffect(() => {
    const checkbox = document.getElementById('checkbox');

    if (checkbox) {
      checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        }
      });
    }
  }, []);

  return (
    <label id="toggle" htmlFor="checkbox">
      <input type="checkbox" id="checkbox" />
      <FontAwesomeIcon icon={faCircleHalfStroke} />
    </label>
  );
}

export default DarkModeToggle;
