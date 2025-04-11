// import React, { useState } from 'react';
// import sunIcon from '../assets/sun.png'; // Add your sun image in the assets folder
// import moonIcon from '../assets/moon.png'; // Add your moon image in the assets folder
// import './ThemeToggle.css';

// const ThemeToggle = () => {
//   const [isLightMode, setIsLightMode] = useState(true);

//   const toggleTheme = () => {
//     setIsLightMode(!isLightMode);
//     document.body.style.backgroundColor = isLightMode ? '#020512' : '#ffffff';
//     document.body.style.color = isLightMode ? '#ffffff' : '#000000';
//   };


//   return (
//     <div className="theme-toggle" onClick={toggleTheme}>
//       <img
//         src={isLightMode ? sunIcon : moonIcon}
//         alt={isLightMode ? 'Light Mode' : 'Dark Mode'}
//         className="theme-icon"
//       />
//       <div className={`slider ${isLightMode ? 'light' : 'dark'} `}></div>
//     </div>
//   );
// };

// export default ThemeToggle;