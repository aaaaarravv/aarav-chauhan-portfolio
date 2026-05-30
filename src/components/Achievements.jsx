import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: '2nd Position - College Hackathon',
      icon: '🥈',
      description: 'Secured second place in a competitive college-level hackathon competition'
    },
    {
      title: '4th Position - College Hackathon',
      icon: '🏆',
      description: 'Achieved fourth position in another college-level hackathon event'
    },
    {
      title: 'Production-Ready AI Systems',
      icon: '🤖',
      description: 'Built multiple production-ready AI and full-stack systems during early undergraduate years'
    },
    {
      title: 'NCC \'A\' Certificate - Grade A',
      icon: '🎖️',
      description: 'Earned NCC \'A\' Certificate with Grade A after ~5 years in Army Wing'
    }
  ];

  return (
    <section id="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="card achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
