import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Travel Website (Eninrac)',
    description: 'Developed a travel website using React, JavaScript, HTML, and CSS, designed to provide users with an intuitive and engaging platform for planning their trips. Features include interactive maps, itinerary planning, and travel information access.',
    techStack: ['Reactjs', 'Javascript', 'HTML', 'Tailwind CSS'],
    link: '#' // Replace with actual project link if available
  },
  {
    title: 'Weather App with API',
    description: 'A weather application built with JavaScript, HTML, and CSS, providing users with real-time weather updates, forecasts, and detailed location information globally. The app features a user-friendly interface for checking current conditions and planning activities.',
    techStack: ['Javascript', 'HTML', 'CSS'],
    link: '#'  // Replace with actual project link if available
  }
];

function Projects() {
  return (
    <section id="projects"> {/* Removed bg-dark-secondary */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-accent-color mb-8 text-center">Some Things I've Built</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 card"> {/* Applied .card class here */}
            <div className="flex justify-between items-center mb-2"> {/* Reduced margin-bottom */}
              <h3 className="card-heading">{project.title}</h3> {/* Applied .card-heading class here */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent-color hover:text-white transition-colors duration-200">
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
            <p className="card-description mb-2">{project.description}</p> {/* Applied .card-description class here and reduced margin-bottom */}
            <div className="flex flex-wrap space-x-2 mt-2"> {/* Added margin-top for spacing */}
              {project.techStack.map((tech, index) => (
                <span key={index} className="bg-dark-secondary text-accent-color text-sm rounded-full px-3 py-1 mb-2">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
