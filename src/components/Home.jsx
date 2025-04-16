import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';
import ProfileImage from '../assets/profile-image.jpg'; // Placeholder - replace with actual image

function Home() {
  return (
    <section id="home"> {/* Removed bg-dark-secondary */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-around">
        <div className="md:w-1/2 p-8">
          {/* <img src={ProfileImage} alt="Rohit Yadav" className="rounded-full shadow-lg w-64 h-64 mx-auto mb-6" /> */}
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Hi, I'm <span className="text-accent-color">Rohit Yadav</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-text-secondary mt-4 text-center">
            Frontend Developer passionate about creating engaging web experiences.
          </p>
        </div>
        <div className="md:w-1/2 p-8">
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-accent-color mb-4 text-center">A Little Bit About Me</h2>
            <p className="text-dark-text-secondary text-lg">
              Results-driven Frontend Developer specializing in ReactJS, with a strong foundation in creating dynamic and responsive user interfaces.
              Proficient in agile methodologies, CI/CD pipelines, and code quality tools. A strong team player with excellent analytical, communication, and leadership skills,
              always eager to learn and take ownership.
            </p>
          </div>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="mailto:officialrohityadav0108@gmail.com" className="text-accent-color hover:text-white transition-colors duration-200">
              <FaEnvelope size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rohit-yadav-369688137" target="_blank" rel="noopener noreferrer" className="text-accent-color hover:text-white transition-colors duration-200">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/DerHarteCoder" target="_blank" rel="noopener noreferrer" className="text-accent-color hover:text-white transition-colors duration-200">
              <FaGithub size={24} />
            </a>
            <a href="https://www.rohityadav.tech" target="_blank" rel="noopener noreferrer" className="text-accent-color hover:text-white transition-colors duration-200">
              <FaGlobe size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
