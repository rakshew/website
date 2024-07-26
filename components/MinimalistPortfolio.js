import React, { useState } from 'react';
import { ExternalLink, Menu } from 'lucide-react';

const MinimalistPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-serif bg-[#F5F5DC] text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-3xl font-bold">Rakshita Murugan</h1>
            <p className="text-xl">Business Administration Student</p>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md border border-gray-800"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {isMenuOpen && (
          <nav className="mb-16">
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-xl">
                  About
                </a>
              </li>
              <li>
                <a href="#articles" className="text-xl">
                  Articles
                </a>
              </li>
              <li>
                <a href="#muse" className="text-xl">
                  Sources of Muse
                </a>
              </li>
              <li>
                <a href="#connect" className="text-xl">
                  Connect
                </a>
              </li>
            </ul>
          </nav>
        )}

        <main className="space-y-16">
          <section id="about">
            <div className="w-full aspect-[3097/1889] mb-8 overflow-hidden">
              <img
                src="/images/profile.jpg"
                alt="Rakshita Murugan"
                className="w-full h-full object-cover"
                width={3097}
                height={1889}
              />
            </div>
            <p className="text-lg leading-relaxed">
              Hello! I'm Rakshita, a passionate Business Administration student at the National University of Singapore with a keen interest in blockchain technology and decentralized applications. I'm currently exploring the intersection of finance, marketing, and blockchain, while actively contributing to various projects in the web3 space.
            </p>
          </section>

          <section id="articles">
            <h2 className="font-serif text-3xl mb-6">Articles</h2>
            <div className="space-y-12">
              <div>
                <h3 className="font-serif text-2xl mb-4 italic">Article Title 1</h3>
                <p className="mb-4 text-lg">Brief description of the article.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Read more
                </a>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-4 italic">Article Title 2</h3>
                <p className="mb-4 text-lg">Brief description of the article.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2 w-5 h-5" />
                  Read more
                </a>
              </div>
              {/* Add more articles as needed */}
            </div>
          </section>

          <section id="muse">
            <h2 className="font-serif text-3xl mb-6">Sources of Muse</h2>
            <div className="space-y-12">
              <div>
                <h3 className="font-serif text-2xl mb-4 italic">Kumizh</h3>
                <p className="mb-4 text-lg">Read my lit substack</p>
                <a href="https://www.kumizh.substack.com" target="_blank" rel="noopener noreferrer">
                  <div className="w-full aspect-[3097/1889] overflow-hidden">
                    <img
                      src="/images/kumizh.jpg"
                      alt="Kumizh Substack"
                      className="w-full h-full object-cover"
                      width={3097}
                      height={1889}
                    />
                  </div>
                </a>
              </div>
              {/* Add more sources of inspiration as needed */}
            </div>
          </section>

          <section id="connect">
            <h2 className="font-serif text-3xl mb-6">Connect with Me</h2>
            <p className="text-lg leading-relaxed">
              Feel free to reach out to me via <a href="mailto:rakshita@example.com" className="underline">email</a> or connect with me on <a href="https://www.linkedin.com/in/rakshitamurugan" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a>.
            </p>
          </section>
        </main>

        <footer className="mt-16">
          <p className="text-center text-sm text-gray-600">© 2024 Rakshita Murugan. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default MinimalistPortfolio;
