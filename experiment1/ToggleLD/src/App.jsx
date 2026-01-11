import React, { useState } from 'react';
import './App.css';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`theme-wrapper ${isDark ? 'dark' : 'light'}`}>
      <h1>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
      <p>Click the button below to change the theme.</p>
      
      <button onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}