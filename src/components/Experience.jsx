import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Core Team & Community Lead',
      organization: 'Connect Karo Intern',
      type: 'Leadership',
      responsibilities: [
        'Led onboarding of new intern batches',
        'Managed community coordination and engagement',
        'Handled social media strategy and content planning',
        'Worked on branding and graphic design initiatives',
        'Collaborated with content creators across teams',
        'Contributed marketing ideas and strategies',
        'Suggested product/app updates that were later implemented'
      ],
      skills: ['Leadership', 'Branding', 'Social Media Management', 'Community Management', 'Creative Strategy', 'Coordination']
    },
    {
      role: 'Social Media Coordinator → Logistics Coordinator',
      organization: 'MUN Club',
      type: 'Leadership & Operations',
      responsibilities: [
        'Event promotion and marketing campaigns',
        'Social media handling and content creation',
        'Photography coverage for events',
        'Logistics management and coordination',
        'Coordination during MUN events'
      ],
      skills: ['Event Management', 'Operations', 'Coordination', 'Communication', 'Photography/Media Management'],
      note: 'Expected to receive higher leadership role soon'
    },
    {
      role: 'Open Source Contributor',
      organization: 'GirlScript Summer of Code (GSSoC \'26)',
      type: 'FOSS Contribution',
      responsibilities: [
        'Contributing to open-source projects',
        'GitHub-based collaborative workflows',
        'Issue tracking and resolution',
        'Pull requests and code reviews',
        'Version control best practices'
      ],
      skills: ['FOSS', 'Open-Source Collaboration', 'Community Development', 'Git', 'GitHub']
    },
    {
      role: 'Campus Ambassador',
      organization: 'IITD Rendezvous \'25',
      type: 'Outreach & Representation',
      responsibilities: [
        'Campus outreach and promotion',
        'Event representation and coordination',
        'Community engagement initiatives',
        'Brand ambassadorship'
      ],
      skills: ['Campus Outreach', 'Promotions', 'Community Engagement', 'Event Representation']
    }
  ];

  return (
    <section id="experience">
      <h2 className="section-title">Leadership & Experience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="card experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-org">{exp.organization}</p>
                <span className="experience-type">{exp.type}</span>
              </div>
            </div>

            <div className="experience-section">
              <h4 className="experience-section-title">Responsibilities</h4>
              <ul className="experience-list">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>

            {exp.note && (
              <div className="experience-note">
                <strong>Note:</strong> {exp.note}
              </div>
            )}

            <div className="experience-skills">
              {exp.skills.map((skill, i) => (
                <span key={i} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
