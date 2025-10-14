import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaReact, FaNodeJs, FaDatabase,  FaCode,  FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate skill bars
    gsap.fromTo('.skill-bar-fill', 
      { width: '0%' },
      {
        width: '100%',
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-content',
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );

    // Stagger animation for tech icons
    gsap.fromTo('.tech-icon', 
      { 
        scale: 0, 
        opacity: 0,
        rotation: -180
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.tech-stack',
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );
  }, []);

  const technicalSkills = [
    { name: 'React.js', level: 85, icon: <FaReact /> },
    { name: 'JavaScript', level: 88, icon: <SiJavascript /> },
    { name: 'Node.js', level: 80, icon: <FaNodeJs /> },
    { name: 'Express.js', level: 78, icon: <SiExpress /> },
    { name: 'MongoDB', level: 75, icon: <SiMongodb /> },
    { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss /> },
    { name: 'HTML/CSS', level: 90, icon: <FaCode /> },
    { name: 'Git & GitHub', level: 82, icon: <FaGitAlt /> }
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'GSAP'],
      icon: <FaCode />
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL'],
      icon: <FaDatabase />
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Figma'],
      icon: <FaGitAlt />
    }
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-content grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills Progress */}
          <div>
            <h3 className="text-2xl font-bold text-dark mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-primary text-xl">
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="skill-bar-fill h-3 rounded-full bg-gradient-to-r from-primary to-secondary"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Icons */}
          <div className="tech-stack">
            <h3 className="text-2xl font-bold text-dark mb-8">Tech Stack</h3>
            <div className="grid grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="tech-icon flex flex-col items-center p-4 bg-light rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-4xl text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-dark to-darker text-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-white text-xl mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;