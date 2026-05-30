import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript (ES6+)', 'SQL', 'HTML', 'CSS']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'FastAPI', 'Express.js', 'Tailwind CSS', 'SQLAlchemy', 'Framer Motion']
    },
    {
      title: 'Data Science & ML',
      skills: ['Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'SQLite', 'NeDB']
    },
    {
      title: 'APIs & Integrations',
      skills: ['OpenAI API', 'Google Gemini API', 'MetaTrader 5 API', 'GitHub API']
    },
    {
      title: 'Core Concepts',
      skills: [
        'REST API Design',
        'JWT Authentication',
        'State Management',
        'Responsive Design',
        'AI Integration',
        'Risk Management Systems',
        'Component-Based Architecture',
        'Middleware Architecture',
        'Secure Authentication Systems'
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Vite', 'npm', 'pip', 'Render', 'Vercel']
    }
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="card skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skills-tags">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
