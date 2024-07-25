import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, Moon, Sun } from 'lucide-react';

const MinimalistPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen font-serif ${isDarkMode ? 'bg-charcoal text-alabaster' : 'bg-alabaster text-charcoal'}`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-16 flex justify-between items-center">
          <h1 className="font-serif text-3xl tracking-tight">Rakshita Murugan</h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 rounded ${isDarkMode ? 'bg-alabaster text-charcoal' : 'bg-charcoal text-alabaster'}`}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-6 w-6 text-alabaster" /> : <Moon className="h-6 w-6 text-charcoal" />}
            </button>
          </div>
        </header>

        {isMenuOpen && (
          <nav className="mb-8">
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#articles" className="hover:underline">Articles</a></li>
              <li><a href="#muse" className="hover:underline">Sources of Muse</a></li>
              <li><a href="#connect" className="hover:underline">Connect</a></li>
            </ul>
          </nav>
        )}

        <main className="space-y-16">
          <p>Debug: Content should start here</p>
          <section id="about">
            <h2>About Section</h2>
            <p className="text-lg leading-relaxed">
              Hello there! I am Rakshita, a dedicated Business Administration student at the National University of Singapore with a keen interest in blockchain technology and decentralized applications. I am actively exploring the intersection of finance, marketing, and blockchain, while actively contributing to various projects in the web3 space.
            </p>
          </section>

          <section id="articles">
            <h2>Articles Section</h2>
            {/* Article content here */}
          </section>

          <section id="muse">
            <h2>Sources of Muse Section</h2>
            {/* Muse content here */}
          </section>

          <section id="connect">
            <h2>Connect Section</h2>
            {/* Connect content here */}
          </section>
          <p>Debug: Content should end here</p>
        </main>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; 2024 Rakshita Murugan. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default MinimalistPortfolio;
