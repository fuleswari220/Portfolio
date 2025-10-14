import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate progress bars
    gsap.fromTo('.progress-bar', 
      { width: '0%' },
      {
        width: '100%',
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );

    // Stagger animation for skills
    gsap.fromTo('.skill-item', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );
  }, []);

  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'MERN Stack', level: 82 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'GSAP Animations', level: 80 }
  ];

  const techSkills = [
    'React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 
    'HTML5', 'CSS3', 'Tailwind CSS', 'GSAP', 'Git', 'GitHub', 'REST APIs'
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate Full Stack Developer with expertise in modern web technologies 
            and a focus on creating exceptional user experiences.
          </p>
        </div>

        <div className="about-content grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-3xl font-bold text-dark mb-6">
              Hello! I'm Fuleswari Saha 👋
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer currently pursuing my B.Tech in 
                Information Technology with a CGPA of 8.49. I specialize in the MERN 
                stack and love building interactive, responsive web applications.
              </p>
              <p>
                As an Associate Software Developer at Edu-Club, I work on developing 
                scalable applications using MongoDB, Express, React, and Node.js. 
                I'm constantly learning and exploring new technologies to enhance 
                my skills.
              </p>
              <p>
                When I'm not coding, you can find me exploring new web technologies, 
                contributing to open-source projects, or learning about cybersecurity.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8.49</div>
                <div className="text-gray-600">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h4 className="text-2xl font-bold text-dark mb-8">My Skills</h4>
            
            {/* Skill Progress Bars */}
            <div className="space-y-6 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="progress-bar h-3 rounded-full bg-gradient-to-r from-primary to-secondary"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Tags */}
            <div>
              <h5 className="text-xl font-semibold text-dark mb-4">Technologies I Use</h5>
              <div className="skills-grid flex flex-wrap gap-3">
                {techSkills.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full font-medium border border-primary/20 hover:scale-105 transition-transform duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;