import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Stagger animation for contact items
    gsap.fromTo('.contact-item', 
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.contact-content',
          start: 'top 80%',
          end: 'bottom 20%',
        }
      }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to EmailJS or your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'fuleswari220@gmail.com',
      link: 'mailto:fuleswari220@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 8371047875',
      link: 'tel:+918371047875'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'West Bengal, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-br from-dark to-darker text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Get In Touch</h2>
          <p className="section-subtitle text-gray-300">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="contact-content grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Let's Connect! 🌟</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              I'm always open to discussing new opportunities, creative projects, 
              or just having a friendly chat about technology and development.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item flex items-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-white text-xl mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">{info.title}</h4>
                    <a 
                      href={info.link} 
                      className="text-white hover:text-primary transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/fuleswari-saha-3b95b723a/" 
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="https://github.com/fuleswari220" 
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <FaGithub size={20} />
                </a>
                 <a 
                  href="https://x.com/fuleswari_saha" 
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <FaXTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-item bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-200 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-200 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-200 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-200 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-300">
            © 2024 Fuleswari Saha. Made with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;