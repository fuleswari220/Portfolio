import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBriefcase, FaCode, FaDatabase, FaServer, FaReact, FaJs, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNodedotjs, SiTailwindcss } from 'react-icons/si';

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
        "Developed responsive and interactive user interfaces using React.js with modern hooks and state management",
        "Implemented component-based architecture for reusable and maintainable frontend code",
        "Collaborated with backend team to integrate RESTful APIs and ensure seamless data flow",
        "Managed MongoDB databases including schema design, queries, and data optimization",
        "Worked with Mongoose ODM for efficient database operations and data validation",
        "Participated in code reviews and implemented best practices for frontend development"
      ],
      technologies: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Git", icon: <FaGitAlt /> }
      ]
    }
  ];

  const responsibilities = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using React.js, JavaScript, and modern CSS frameworks"
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Designing and managing MongoDB databases with Mongoose ODM, including queries and data optimization"
    },
    {
      icon: <FaServer />,
      title: "API Integration",
      description: "Integrating RESTful APIs and ensuring seamless communication between frontend and backend systems"
    }
  ];

  const frontendSkills = [
    { name: "React.js", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "HTML5", level: 90 },
    { name: "CSS3/Tailwind", level: 85 },
    { name: "Responsive Design", level: 90 }
  ];

  return (
    <section id="experience" ref={experienceRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey focusing on frontend development with full-stack exposure.
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
                    <p className="text-gray-400 mt-1">Frontend Focus with MongoDB Experience</p>
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
                      className="px-4 py-2 bg-white/10 rounded-full text-white border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frontend Skills Progress */}
        {/* <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-dark mb-8 text-center">Frontend Skills Focus</h3>
          <div className="bg-light rounded-2xl p-8">
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

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

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-bold text-dark mb-4">Frontend Development Focus</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              While working with the MERN stack, my primary focus has been on creating exceptional user experiences 
              through modern frontend technologies. I specialize in React.js development while maintaining strong 
              capabilities in MongoDB for database management and full-stack integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;