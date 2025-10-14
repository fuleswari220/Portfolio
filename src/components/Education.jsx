import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline animation for education items
    gsap.fromTo('.education-item', 
      { 
        opacity: 0, 
        x: -100 
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.education-timeline',
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Maulana Abul Kalam Azad University Of Technology",
      duration: "2021 - Present",
      score: "CGPA: 8.49",
      description: "Currently pursuing my degree with focus on software development, data structures, and web technologies."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Nabadwip Tarasundari Girls' High School",
      duration: "2019 - 2021",
      score: "Percentage: 80.4%",
      description: "Completed higher secondary education with focus on science and mathematics."
    },
    {
      degree: "Secondary Education",
      institution: "Nabadwip Tarasundari Girls' High School",
      duration: "2009 - 2019",
      score: "Percentage: 70.71%",
      description: "Completed secondary education with strong foundation in core subjects."
    }
  ];

  return (
    <section id="education" ref={educationRef} className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and qualifications that shaped my technical expertise.
          </p>
        </div>

        <div className="education-timeline max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== educationData.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-secondary"></div>
              )}
              
              <div className="flex items-start">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white mr-6 relative z-10">
                  <FaGraduationCap size={20} />
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 card-hover">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-dark mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-semibold text-lg">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {edu.duration}
                      </span>
                      <p className="text-gray-600 font-semibold">{edu.score}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;