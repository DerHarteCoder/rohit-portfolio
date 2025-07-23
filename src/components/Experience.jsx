import React from 'react';

function Experience() {
  return (
    <section id="experience"> {/* Removed bg-dark-primary */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-accent-color mb-8 text-center">Where I've Worked</h2>
        <div className="mb-8 card"> {/* Applied .card class here */}
          <h3 className="card-heading">Frontend Developer</h3> {/* Applied .card-heading class here */}
          <p className="text-dark-text-secondary mb-2">Bootcamp Pvt ltd | 01/2022 - Present</p>
          <ul className="list-disc list-inside card-description"> {/* Applied .card-description class here */}
            <li>Engineered complex single-page applications using React, achieving a 20% increase in performance and a 20% improvement in responsiveness.</li>
            <li>Integrated SonarQube into the CI/CD pipeline, automating code quality checks and ensuring adherence to coding standards. Executed project development using Agile SCRUM methodology, ensuring iterative delivery, continuous integration, and rapid response to changing requirements.</li>
            <li>Collaborated closely with cross-functional teams, including business analysts, to understand project requirements and translate them into intuitive and responsive user interfaces.</li>
            <li>Developed supplementary UI components utilizing Tailwind and Bootstrap frameworks, augmenting the overall customer experience through enhanced interface design and usability.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
