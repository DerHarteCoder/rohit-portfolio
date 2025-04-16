import React from 'react';

const educations = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Chandigarh University',
    duration: '08/2016 - 08/2019',
    location: 'Mohali, India'
  },
];

const certificates = [
  {
    name: 'React - The Complete Guide',
    provider: 'Maximilian Schwarzmüller',
    link: '#' // Replace with actual certificate link if available
  },
  {
    name: 'Javascript Basics to Advance',
    provider: 'Udemy',
    link: '#' // Replace with actual certificate link if available
  }
];

function Education() {
  return (
    <section id="education"> {/* Removed bg-dark-secondary */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-accent-color mb-8 text-center">Where I've Learned</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Using grid for education and certificates */}
          <div>
            <h3 className="text-xl font-semibold text-accent-color mb-4">Education</h3>
            {educations.map((edu, index) => (
              <div key={index} className="mb-4 card p-6"> {/* Applied .card class here and reduced mb */}
                <h3 className="card-heading">{edu.degree}</h3> {/* Applied .card-heading class here */}
                <p className="card-description">{edu.institution} | {edu.duration}</p> {/* Applied .card-description class here */}
                <p className="card-description">{edu.location}</p> {/* Applied .card-description class here */}
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-accent-color mb-4">Certifications</h3>
            <ul className="list-disc list-inside">
              {certificates.map((cert, index) => (
                <li key={index} className="card card-description mb-4 p-6"> {/* Applied .card and .card-description class here and reduced mb */}
                  {cert.name} - <span className="italic">{cert.provider}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
