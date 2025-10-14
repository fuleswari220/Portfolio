import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcase, FaCode,  FaDatabase, FaServer } from 'react-icons/fa';

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Stagger animation for experience cards
    gsap.fromTo('.experience-card', 
      { 
        opacity: 0, 
        y: 100,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.experience-grid',
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );
  }, []);

  const experiences = [
    {
      icon: <FaBriefcase />,
      title: "Associate Software Developer",
      company: "Edu-Club",
      duration: "Present",
      responsibilities: [
        "Working on MERN Stack development with MongoDB, Express, React, and Node.js",
        "Developing and maintaining scalable applications",
        "Applying knowledge of database management and REST APIs",
        "Leveraging skills in MongoDB and 5+ additional technologies"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs", "Git"]
    }
  ];

  const responsibilities = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using React.js"
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js and Express"
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Designing and managing databases with MongoDB and MySQL"
    }
  ];

  return (
    <section id="experience" ref={experienceRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and the skills I've acquired along the way.
          </p>
        </div>

        {/* Main Experience */}
        <div className="experience-grid max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card bg-gradient-to-br from-dark to-darker text-white rounded-3xl p-8 shadow-2xl mb-12">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start mb-4 lg:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-2xl mr-6">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                  </div>
                </div>
                <div className="bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold">
                  {exp.duration}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-300">Key Responsibilities:</h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-3 mt-1">▸</span>
                      <span className="text-gray-300">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-300">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-white/10 rounded-full text-white border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsibilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {responsibilities.map((resp, index) => (
            <div 
              key={index}
              className="bg-light rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 card-hover group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {resp.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{resp.title}</h3>
              <p className="text-gray-600 leading-relaxed">{resp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;