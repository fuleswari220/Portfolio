import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Header animation with ref instead of class selector
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) &&
          !event.target.closest('button')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      ref={headerRef}
      className={`header fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 md:py-4' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FS
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-dark font-medium hover:text-primary transition-colors duration-300 relative group text-sm lg:text-base"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col space-y-1 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          ref={mobileMenuRef}
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl transition-all duration-300 ease-out ${
            isMenuOpen 
              ? 'opacity-100 visible translate-y-0 max-h-screen' 
              : 'opacity-0 invisible -translate-y-4 max-h-0'
          }`}
          style={{
            height: isMenuOpen ? 'calc(100vh - 80px)' : '0',
            overflow: 'hidden'
          }}
        >
          <ul className="py-6 space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-dark font-medium hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-300 text-lg"
                  onClick={handleNavClick}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links in Mobile Menu */}
          <div className="px-4 py-6 border-t border-gray-200">
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com" 
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all duration-300"
                onClick={handleNavClick}
              >
                <span className="text-sm font-medium">GH</span>
              </a>
              <a 
                href="https://linkedin.com" 
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-dark hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={handleNavClick}
              >
                <span className="text-sm font-medium">IN</span>
              </a>
              <a 
                href="https://twitter.com" 
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-dark hover:bg-black hover:text-white transition-all duration-300"
                onClick={handleNavClick}
              >
                <span className="text-sm font-medium">X</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 top-0"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;