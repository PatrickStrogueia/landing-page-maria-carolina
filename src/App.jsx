import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        return savedMode === 'true';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text transition-colors duration-300 font-sans selection:bg-brand-primary selection:text-brand-dark-bg">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <Hero />
        <Services />
        <Differentials />
        <About />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;
