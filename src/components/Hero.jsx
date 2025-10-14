import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Text animations
    tl.fromTo('.hero-title', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo('.hero-subtitle', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo('.hero-description', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo('.hero-buttons', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
      '-=0.2'
    )
    .fromTo('.social-links a', 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.2'
    );

    // Floating shapes animation
    gsap.to('.floating-shape', {
      y: 30,
      rotation: 360,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    });
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/yourusername",
      label: "GitHub",
      color: "hover:bg-gray-700"
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: <FaXTwitter size={20} />,
      url: "https://twitter.com/yourusername",
      label: "X (Twitter)",
      color: "hover:bg-black"
    }
  ];

  // Google Drive CV Link - Replace with your actual file ID
  const cvDriveLink = "https://drive.google.com/drive/folders/1y75zz-YCoCWqMs-0-Oo0RrZ5F2EQNlOI?usp=sharing";

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-darker to-dark text-white relative overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-4">
            Fuleswari <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Saha</span>
          </h1>
          
          <h2 className="hero-subtitle text-2xl md:text-3xl text-primary mb-6 font-light">
            Frontend Developer
          </h2>
          
          <p className="hero-description text-xl text-gray-300 mb-8 leading-relaxed">
            I'm a passionate Frontend Developer with a solid understanding of the MERN Stack. 
            I love building clean, responsive, and interactive user interfaces. 
            Previously worked at Edu Club, now focusing full-time on creating engaging web experiences 
            and exploring modern frontend technologies.
          </p>
          
          <div className="hero-buttons flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            
            {/* Google Drive CV Download */}
            <a 
              href={cvDriveLink}
              className="btn-outline border-white text-white hover:bg-white hover:text-dark transition-all duration-300 flex items-center gap-2 px-8 py-4 rounded-full font-medium"
              target="_blank"
              rel="noopener noreferrer"
              download="Fuleswari_Saha_CV.pdf"
            >
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="social-links flex gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute w-64 h-64 bg-gradient-to-r from-primary to-secondary rounded-full opacity-10 top-1/4 right-1/4"></div>
        <div className="floating-shape absolute w-48 h-48 bg-gradient-to-r from-secondary to-primary rounded-full opacity-10 bottom-1/4 right-1/3"></div>
        <div className="floating-shape absolute w-32 h-32 bg-gradient-to-r from-primary to-secondary rounded-full opacity-10 top-1/2 left-1/3"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-400">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
          </div>
          <span className="text-sm">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;