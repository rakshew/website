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
              className="p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <Menu className={`h-6 w-6 ${isDarkMode ? 'text-alabaster' : 'text-charcoal'}`} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? 
                <Sun className="h-6 w-6 text-alabaster" /> : 
                <Moon className="h-6 w-6 text-charcoal" />
              }
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
          <section id="about">
            <div className="w-full h-64 bg-gray-200 mb-8 overflow-hidden">
              <img src="/images/profile.jpg" alt="Rakshita Murugan" className="w-full h-full object-cover" />
            </div>
            <p className="text-lg leading-relaxed">
              Hello there! I am Rakshita, a dedicated Business Administration student at the National University of Singapore with a keen interest in blockchain technology and decentralized applications. I am actively exploring the intersection of finance, marketing, and blockchain, while actively contributing to various projects in the web3 space.
            </p>
          </section>

          <section id="articles">
            <h2 className="font-serif text-3xl mb-6">Featured Articles</h2>
            <ul className="space-y-8">
              {[
                {
                  title: "Should DeFi protocols migrate to pull oracles?",
                  url: "https://mirror.xyz/0x832397b6B371905402F7aA50340dabD1f8Ebb656/9yk5jzgABHHAFD-lV4Li3pMEkQH-MZNT3iII0E5yp60"
                },
                {
                  title: "Entropy, the new maverick in town 🔮",
                  url: "https://mirror.xyz/0x832397b6B371905402F7aA50340dabD1f8Ebb656/P5mAsq8ELtENmFWVpgLmkFfNm7Fj-YFX0IjtAyBIW-w"
                },
                {
                  title: "Evolving Nature of Trusts: Commentary with reference to the Paper chase",
                  url: "https://mirror.xyz/0x832397b6B371905402F7aA50340dabD1f8Ebb656/_Rfi3LS0SYTi-QciAFFsYFymMEbqcfVQztLmb1NpZ9A"
                }
              ].map((post, index) => (
                <li key={index} className="pb-4 border-b border-gray-200 last:border-b-0">
                  <a 
                    href={post.url} 
                    className="font-serif text-xl hover:underline flex items-center justify-between group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{post.title}</span>
                    <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section id="muse">
            <h2 className="font-serif text-3xl mb-6">Sources of Muse</h2>
            <div className="space-y-12">
              <div>
                <h3 className="font-serif text-2xl mb-4 italic">Kumizh</h3>
                <p className="mb-4 text-lg">Read my lit substack</p>
                <a href="https://www.kumizh.substack.com" target="_blank" rel="noopener noreferrer">
                  <img src="/images/kumizh.jpg" alt="Kumizh Substack" className="w-full h-64 object-cover" />
                </a>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-4 italic">Image Collage</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <img key={i} src={`/images/collage${i}.jpg`} alt={`Collage Image ${i}`} className="w-full h-auto object-cover" />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="connect">
            <h2 className="font-serif text-3xl mb-4">Connect</h2>
            <p className="mb-4 text-lg">
              Find me on{' '}
              <a href="https://linkedin.com/in/rakshitamurugan" className="underline hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">LinkedIn</a>, or{' '}
              <a href="mailto:rakshimuuu@email.com" className="underline hover:opacity-80 transition-opacity">send me an email</a>.
            </p>
            <button className={`mt-4 px-6 py-2 rounded transition-colors duration-300 ${isDarkMode ? 'bg-alabaster text-charcoal' : 'bg-charcoal text-alabaster'}`}>
              Contact Me
            </button>
          </section>
        </main>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; 2024 Rakshita Murugan. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default MinimalistPortfolio;
