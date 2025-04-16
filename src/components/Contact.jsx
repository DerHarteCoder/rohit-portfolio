import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact"> {/* Removed bg-dark-primary */}
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-accent-color mb-8">Get In Touch</h2>
        <p className="text-dark-text-secondary mb-8 text-lg">
          Feel free to reach out for opportunities or collaborations!
        </p>
        <div className="flex justify-center space-x-12">
          <a href="mailto:officialrohityadav0108@gmail.com" className="text-accent-color hover:text-white transition-colors duration-200 flex flex-col items-center">
            <FaEnvelope size={32} className="mb-2" />
            <span className="text-sm">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/rohit-yadav-369688137" target="_blank" rel="noopener noreferrer" className="text-accent-color hover:text-white transition-colors duration-200 flex flex-col items-center">
            <FaLinkedin size={32} className="mb-2" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href="https://github.com/DerHarteCoder" target="_blank" rel="noopener noreferrer" className="text-accent-color hover:text-white transition-colors duration-200 flex flex-col items-center">
            <FaGithub size={32} className="mb-2" />
            <span className="text-sm">GitHub</span>
          </a>
          <a href="https://rohityadavdev.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-accent-color hover:text-white transition-colors duration-200 flex flex-col items-center">
            <FaGlobe size={32} className="mb-2" />
            <span className="text-sm">Website</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
