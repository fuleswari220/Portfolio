import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaGithub, FaCode, FaDatabase, FaCoffee, FaMobile, FaShoppingCart, FaCalendarAlt, FaMusic, FaNewspaper, FaFilm, FaGamepad, FaChartLine, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { GiDiceSixFacesSix } from 'react-icons/gi';
import newsImg from "../assests/fulnews.png";
import spotifyImg from "../assests/SpotifyClone.png";
import netflixImg from "../assests/NetflixClone.png";
import diceImg from "../assests/Dice Game.png";
import portfolioImg from "../assests/Portfolio.png";
import cafeImg from "../assests/JKCafe.png";





const Projects = () => {
    const projectsRef = useRef(null);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Stagger animation for project cards
        gsap.fromTo('.project-card',
            {
                opacity: 0,
                y: 100,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: 'top 80%',
                    end: 'bottom 20%',
                }
            }
        );
    }, [showAll]); // Re-run animation when showAll changes

    const projects = [
        {
            title: "JK Cafe Website",
            description: "Full-stack cafe website built with the MERN stack, featuring menu display, online ordering, and contact functionality with smooth UI and animations.",
            image: cafeImg,
            technologies: ["MongoDB", "Express.js", "React", "Node.js"],
            liveLink: "#",
            githubLink: "https://github.com/fuleswari220/JF-Cafe",
            features: [
                "Menu display with categories",
                "Online order form integration",
                "Smooth animations and transitions",
                "Responsive and mobile-friendly design"
            ]
        },
        {
            title: "Dice Game",
            description: "An interactive dice game built with React where players roll dice to test their luck and score points.",
            image: diceImg,
            technologies: ["React", "JavaScript", "CSS"],
            liveLink: "https://dice-game-d84804.netlify.app/",
            githubLink: "https://github.com/fuleswari220/Dice-Game",
            features: [
                "Two-player dice rolling gameplay",
                "Score tracking system",
                "Winning logic and reset option",
                "Responsive and animated UI"
            ]
        },
        {
            title: "Portfolio Website",
            description: "Modern portfolio website with animations, dark mode, and contact form.",
            image: portfolioImg,
            technologies: ["React", "GSAP", "Tailwind CSS", "EmailJS"],
            liveLink: "https://portfolio-41f1a8.netlify.app/",
            githubLink: "https://github.com/fuleswari220/Portfolio",
            features: [
                "Smooth animations",
                "Dark/light mode",
                "Contact form",
                "Responsive design"
            ]
        },
        {
            title: "FulNews - All Type News App",
            description: "Fetches latest all news from trusted API sources with country-based filtering and responsive design.",
            image: newsImg,
            technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "NewsAPI"],
            liveLink: "#",
            githubLink: "https://github.com/fuleswari220/NewsApp",
            features: [
                "Real-time health news updates",
                "Country-based news filtering",
                "Responsive design",
                "API integration"
            ]
        },
        {
            title: "Spotify Clone",
            description: "Responsive music streaming web application with playback controls and modern UI design.",
            image: spotifyImg,
            technologies: ["HTML5", "CSS3", "JavaScript"],
            liveLink: "https://spotify-d8fe99.netlify.app/",
            githubLink: "https://github.com/fuleswari220/Spotify-Clone",
            features: [
                "Music playback controls",
                "Responsive design",
                "Modern UI/UX",
                "Interactive elements"
            ]
        },
        {
            title: "Netflix Clone",
            description: "Fully responsive frontend clone of Netflix with modern design and smooth animations.",
            image: netflixImg,
            technologies: ["HTML5", "CSS3", "JavaScript"],
            liveLink: "https://lively-torte-93fd4d.netlify.app/",
            githubLink: "https://github.com/fuleswari220/Netflix-Clone",
            features: [
                "Fully responsive design",
                "Netflix-like UI",
                "Smooth animations",
                "Modern layout"
            ]
        },
    ];

    // Show only first 3 projects initially, or all when showAll is true
    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <section id="projects" ref={projectsRef} className="py-20 bg-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-subtitle">
                        Here are some of my recent projects that showcase my skills and creativity.
                    </p>
                </div>

                <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col"
                        >
                            {/* Project Header with Icon */}
                            <div className="h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                                <div className="h-48 relative overflow-hidden rounded-t-2xl shadow-inner">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                                </div>


                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="font-semibold text-dark mb-2 text-sm">Key Features:</h4>
                                    <ul className="space-y-1">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                                <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                                                <span className="text-xs">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-3 mt-auto">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 flex-1 justify-center group/link"
                                    >
                                        <FaExternalLinkAlt size={12} />
                                        <span>Live Demo</span>
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 transition-all duration-300 flex-1 justify-center group/link"
                                    >
                                        <FaGithub size={14} />
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={toggleShowAll}
                        className="btn-outline border-primary text-primary hover:bg-primary hover:text-white flex items-center gap-2 mx-auto"
                    >
                        {showAll ? (
                            <>
                                <FaArrowUp />
                                Show Less
                            </>
                        ) : (
                            <>
                                <FaArrowDown />
                                Show All Projects ({projects.length})
                            </>
                        )}
                    </button>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-dark mb-4">Like What You See?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            I'm passionate about creating amazing web experiences. Let's work together to bring your ideas to life!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://github.com/fuleswari220"
                                className="btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub />
                                View GitHub Profile
                            </a>
                            <a
                                href="#contact"
                                className="btn-outline border-primary text-primary hover:bg-primary hover:text-white"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;