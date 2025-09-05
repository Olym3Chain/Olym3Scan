'use client';

import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-gray-900/20 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo.gif" 
                alt="Olym3 Scan Logo" 
                className="h-8 sm:h-10 w-auto hover:scale-105 transition-transform duration-300"
              />
              <span className="ml-3 text-white font-bold text-lg sm:text-xl">
                Olym3 Scan
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#porfolio" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Porfolio
              </a>
              <a href="#analytics" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Analytics
              </a>
              <a href="#docs" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Docs
              </a>
              <button className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                Launch App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-16 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20 md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 py-4 space-y-4">
            {/* Navigation Links */}
            <div className="space-y-3">
              <a 
                href="#explorer" 
                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explorer
              </a>
              <a 
                href="#analytics" 
                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Analytics
              </a>
              <a 
                href="#docs" 
                className="block px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Docs
              </a>
            </div>
            
            {/* Launch App Button */}
            <div className="pt-2 border-t border-gray-700/50">
              <button className="w-full px-4 py-3 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 font-medium">
                Launch App
              </button>
            </div>
          </div>
        </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-20 sm:pb-24">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge with Animated Logo */}
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium mb-8 animate-fade-in backdrop-blur-sm">
            <img 
              src="/logo.gif" 
              alt="Olym3 Scan" 
              className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3"
            />
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full mr-1.5 sm:mr-2 animate-pulse"></span>
            <span className="hidden sm:inline">Real-time On-Chain Intelligence</span>
            <span className="sm:hidden">On-Chain Intelligence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="block">Surface the</span>
            <span className="block gradient-text">Signal.</span>
            <span className="block">Build the</span>
            <span className="block gradient-text">Future.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Empowering users with real-time Olym3 blockchain transaction visibility, 
            verifiable proofs, and advanced proof technologies to ensure transparency 
            and trust in the decentralized ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 animate-slide-up">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 min-w-[200px]">
              <span className="relative z-10">Start for Explorer</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl text-lg transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 min-w-[200px]">
              <span className="flex items-center justify-center">
                Learn More
                <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats or Features Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="glass rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Real-time</div>
              <div className="text-gray-300">Transaction Tracking</div>
            </div>
            <div className="glass rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-300">Verifiable Proofs</div>
            </div>
            <div className="glass rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Advanced</div>
              <div className="text-gray-300">Proof Technologies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Social Media */}
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-gray-900/30 backdrop-blur-md border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-14 sm:h-16">
            {/* Social Media Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
              {/* Website */}
              <a 
                href="https://www.olym3.xyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 rounded-lg bg-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="hidden sm:inline">Visit Website</span>
                  <span className="sm:hidden">Website</span>
                </span>
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="https://x.com/Olym3Chain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 rounded-lg bg-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="hidden sm:inline">Follow on X</span>
                  <span className="sm:hidden">X</span>
                </span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/olym3-blockchain/about/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 rounded-lg bg-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="hidden sm:inline">Connect on LinkedIn</span>
                  <span className="sm:hidden">LinkedIn</span>
                </span>
              </a>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
