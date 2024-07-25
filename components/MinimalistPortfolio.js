import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, Moon, Sun } from 'lucide-react';

const MinimalistPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen font-serif transition-colors duration-300 ${
      isDarkMode ? 'dark bg-charcoal text-alabaster' : 'bg-alabaster text-charcoal'
    }`}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-16 flex justify-between items-center">
          <h1 className="font-serif text-4xl tracking-tight">Rakshita Murugan</h1>
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
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
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
          {/* Rest of your content remains the same */}
        </main>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; 2024 Rakshita Murugan. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default MinimalistPortfolio;
