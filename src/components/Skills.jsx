import React from 'react';

const skills = [
  {
    category: 'Programming Languages',
    items: ['Javascript ES6+']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['ReactJs', 'NodeJs']
  },
  {
    category: 'Version Control',
    items: ['Git', 'Github']
  },
  {
    category: 'Styling',
    items: ['HTML5', 'CSS3', 'Sass', 'Tailwind CSS']
  },
  {
    category: 'Tools & Technologies',
    items: ['CI/CD', 'SonarQube', 'Agile/Scrum']
  }
];

function Skills() {
  return (
    <section id="skills"> {/* Removed bg-dark-primary */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-accent-color mb-8 text-center">Technologies I Know</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="card"> {/* Applied .card class here */}
              <h3 className="card-heading">{skillCategory.category}</h3> {/* Applied .card-heading class here */}
              <ul className="list-disc list-inside card-description"> {/* Applied .card-description class here */}
                {skillCategory.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
