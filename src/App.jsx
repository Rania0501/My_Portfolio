import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useState, useEffect } from "react";

// Lazy load des pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Projects = lazy(() => import("./Pages/Projects"));
const Skills = lazy(() => import("./Pages/Skills"));
const Contact = lazy(() => import("./Pages/Contact"));
const Education = lazy(() => import("./Pages/Education"));
const Services = lazy(() => import("./Pages/Services"));

const App = () => {
  // Loader state
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }
          return prev + 1;
        });
      }, 80);
    }
  }, [loading]);

  // Loader affiché tant que ça charge
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white -mt-8">
        <div className="flex flex-col items-center space-y-7">
          <img
            src="./evoport.svg"
            alt="Evoport Logo"
            className="flex h-16 drop-shadow-2xl justify-center animate-pulse -mb-6"
          />
          <div className="text-lg text-gray-500"><b> EvoPort </b></div>
          <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-steel via-steel-sky to-peach-cream transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-md font-semibold text-gray-700">
            Loading... {progress}%
          </div>
          
        </div>
      </div>
    );
  }

  // Routes principales
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Suspense>
  );
};

export default App;
