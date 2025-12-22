// import React from "react";
// import { Link } from "react-scroll"; 
// import { FaHome, FaProjectDiagram, FaTools, FaEnvelope, FaGraduationCap, FaUser} from "react-icons/fa";
// import { MdMiscellaneousServices } from "react-icons/md";
// import { useState } from "react";
// import { FiSun, FiMoon } from "react-icons/fi";

// function Nav() {
//   const navItems = [
//     { label: "Home", icon: <FaHome size={15} />, target: "home" },
//     { label: "About", icon: <FaUser />, target: "about" },
//     { label: "Services", icon: <MdMiscellaneousServices size={20} />, target: "services" },
//     { label: "Education", icon: <FaGraduationCap size={15} />, target: "education" },
//     { label: "Projects", icon: <FaProjectDiagram />, target: "projects" },
//     { label: "Skills", icon: <FaTools />, target: "skills" },
//     { label: "Contact", icon: <FaEnvelope />, target: "contact" },
//   ];

//     const [darkMode, setDarkMode] = useState(false);
  
//     const toggleDarkMode = () => {
//       setDarkMode(!darkMode);
//       document.documentElement.classList.toggle("dark", !darkMode);
//     };
//   return (
//     <nav className="bg-white dark:bg-gray-900 sticky top-0 z-50 text-gray-600 dark:text-gray-300" aria-label="Main navigation">




//         {/* Navigation Desktop */}
//         <div className="hidden sm:flex items-center mr-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         <div className="flex items-center gap-2 ml-2 pr-14 sm:ml-7">
//           <img src="./evoport.svg" alt="Logo" className="h-7 w-auto object-contain items-center" />
//           <span className="text-xl font-bold text-ocean-slate dark:text-blue-steel hidden sm:inline">EvoPort</span>
//         </div>
//         <ul className="flex space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
//   {navItems.map(({ label, icon , target }) => (
//     <li key={label}>
//       <Link
//         to={target}
//         smooth={true}
//         duration={600}
//         offset={-70} 
//         className="flex items-center gap-1 cursor-pointer hover:text-ocean-slate hover:underline underline-offset-4 rounded px-2 py-1 transition dark:hover:text-blue-steel"
//       >
//         {icon}
//         {label}
//       </Link>
//     </li>
//   ))}
//   <button onClick={toggleDarkMode} className="text-2xl ml-2">
//     {darkMode ? <FiSun className="text-yellow-500" /> : <FiMoon className="text-gray-400" />}
//   </button>
// </ul>

         
//         </div>
        
//       </div>

    


//   {/* Icons mobile */}
//   <div className="flex items-center justify-center gap-3">
//   <div className="sm:hidden flex items-center justify-between bg-white dark:bg-gray-900 shadow-lg rounded-full px-3 py-2 my-4 mx-2 animated-radial-border relative z-10">
//   <div className="flex items-center gap-1">
//     <img src="./evoport.svg" alt="Logo" className=" flex items-center h-6 w-auto object-contain pb-1" />
//     <span className="text-lg font-bold text-ocean-slate dark:text-gray-300"></span>
//   </div>

//   <div className="flex items-center gap-2">
//     {navItems.map(({ label, icon, target  }) => (
//       <Link
//         key={label}
//         to={target}
//         smooth={true}
//         duration={600}
//         offset={-70}
//         className="flex flex-col items-center justify-center w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-ocean-slate transition rounded-full cursor-pointer"
//       >
//         {icon}
//       </Link>
//     ))}
//     <button onClick={toggleDarkMode} className="h-6 w-auto">
//       {darkMode ? <FiSun className="text-yellow-500" /> : <FiMoon className="text-gray-400" />}
//     </button>
//   </div>
// </div>

//   </div>


// {/* Gradient Border Animation */}
// {/* Gradient Border Animation */}
// <style>{`
// .animated-radial-border::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   border-radius: inherit;
//   padding: 2px; 
//   background: conic-gradient(
//     from 0deg,
//     #FFE7D6,
//     #c9d8e1e7,
//     #3F6E8C,
//     #618AA4,
//     #FFE7D6
//   );
//   -webkit-mask: 
//     linear-gradient(#fff 0 0) content-box, 
//     linear-gradient(#fff 0 0);
//   -webkit-mask-composite: xor;
//   mask-composite: exclude;

//   animation: rotateGradient 6s linear infinite, pulseEffect 3s ease-in-out infinite;
//   z-index: 0;

//   /* Ajout d'un box-shadow doux avec #FFE7D6 */
//   box-shadow: 0 0 12px #FFE7D6, 0 0 24px rgba(255, 231, 214, 0.6);
// }

// @keyframes rotateGradient {
//   from {
//     transform: rotate(0deg) scale(1);
//   }
//   to {
//     transform: rotate(360deg) scale(1);
//   }
// }

// @keyframes pulseEffect {
//   0%, 100% {
//     opacity: 0.7;
//     transform: scale(1);
//   }
//   50% {
//     opacity: 1;
//     transform: scale(1.05); /* توسع خفيف */
//   }
// }
// `}</style>


//     </nav>
//   );
// }

// export default Nav;

import React, { useState } from "react";
import { Link } from "react-scroll"; 
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope, FaGraduationCap, FaUser} from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";

function Nav() {
  const navItems = [
    { label: "Home", icon: <FaHome size={15} />, target: "home" },
    { label: "About", icon: <FaUser />, target: "about" },
    { label: "Services", icon: <MdMiscellaneousServices size={20} />, target: "services" },
    { label: "Education", icon: <FaGraduationCap size={15} />, target: "education" },
    { label: "Projects", icon: <FaProjectDiagram />, target: "projects" },
    { label: "Skills", icon: <FaTools />, target: "skills" },
    { label: "Contact", icon: <FaEnvelope />, target: "contact" },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null); // icône active

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const handleIconClick = (label) => {
    setActiveIcon((prev) => (prev === label ? null : label));
  };

  return (
    <nav className=" sticky top-0 z-50 text-gray-600 dark:text-gray-300" aria-label="Main navigation">

      {/* Navigation Desktop */}
      <div className="bg-white dark:bg-gray-900 hidden sm:flex items-center mr-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 ml-2 pr-14 sm:ml-7">
            <img src="./evoport.svg" alt="Logo" className="h-7 w-auto object-contain items-center" />
            <span className="text-xl font-bold text-ocean-slate dark:text-blue-steel hidden sm:inline">EvoPort</span>
          </div>
          <ul className="flex space-x-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            {navItems.map(({ label, icon, target }) => (
              <li key={label}>
                <Link
                  to={target}
                  smooth={true}
                  duration={600}
                  offset={-70} 
                  className="flex items-center gap-1 cursor-pointer hover:text-ocean-slate hover:underline underline-offset-4 rounded px-2 py-1 transition dark:hover:text-blue-steel"
                >
                  {icon}
                  {label}
                </Link>
              </li>
            ))}
            <button onClick={toggleDarkMode} className="text-2xl ml-2">
              {darkMode ? <FiSun className="text-yellow-500" /> : <FiMoon className="text-gray-400" />}
            </button>
          </ul>
        </div>
      </div>

   {/* Icons mobile */}
<div className="flex items-center justify-center gap-3 ">
  <div className="sm:hidden flex items-center justify-between bg-white  dark:bg-gray-900 shadow-lg rounded-full px-3 py-2 my-4 mx-2 relative z-10 dark:border dark:border-blue-steel ">
    <div className="flex items-center gap-1">
      <img
        src="./evoport.svg"
        alt="Logo"
        className="flex items-center h-8 w-auto object-contain pb-1 pr-2"
      />
    </div>

    <div className="flex items-center gap-2">
      {navItems.map(({ label, icon, target }) => (
        <div key={label} className="relative flex items-center">
          <Link
            to={target}
            smooth={true}
            duration={600}
            offset={-70}
            className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition ${
              activeIcon === label
                ? "bg-[#618AA4] text-[#FFE7D6] shadow-md"
                : "text-gray-600 dark:text-gray-300 hover:text-ocean-slate"
            }`}
            onClick={() => handleIconClick(label)}
          >
            {/* Icône toujours visible à gauche */}
            {icon}

            {/* Label visible seulement si actif */}
            {activeIcon === label && (
              <span className="text-sm font-medium">{label}</span>
            )}
          </Link>
        </div>
      ))}

      <button
        onClick={toggleDarkMode}
        className="h-6 w-auto flex items-center justify-center"
      >
        {darkMode ? (
          <FiSun className="text-yellow-500" />
        ) : (
          <FiMoon className="text-gray-400" />
        )}
      </button>
    </div>
  </div>
</div>

    </nav>
  );
}

export default Nav;


