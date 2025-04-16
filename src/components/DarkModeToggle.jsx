import React, { useState, useEffect } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme') === 'dark') {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', 'dark');
      }
    } else {
      document.documentElement.classList.remove('dark');
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', 'light');
      }
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white dark:bg-dark-secondary p-2 rounded-md shadow-md cursor-pointer" onClick={toggleDarkMode}>
      {darkMode ? <BsFillSunFill className="text-yellow-500" /> : <BsFillMoonStarsFill />}
    </div>
  );
}

export default DarkModeToggle;
