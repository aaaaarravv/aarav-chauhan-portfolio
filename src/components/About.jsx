import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <p className="about-text">
          A technically capable early-stage builder with interests in <strong>intelligent systems</strong>, 
          <strong> strategic technologies</strong>, <strong>AI-driven platforms</strong>, and 
          <strong> product/community leadership</strong>. Focused on building production-ready systems 
          at the intersection of <strong>Data Science</strong>, <strong>AI</strong>, and 
          <strong> Defence Technologies</strong>.
        </p>
        <p className="about-text">
          With a strong foundation in <strong>full-stack development</strong>, <strong>AI integration</strong>, 
          and <strong>embedded systems</strong>, I create solutions that combine technical depth with 
          real-world impact. My work spans from institutional-grade trading systems to gamified 
          productivity platforms and intelligent environmental monitoring.
        </p>
        <div className="about-highlights">
          <div className="highlight-item">
            <div className="highlight-icon">🎯</div>
            <div className="highlight-text">
              <h3>Systems-Oriented</h3>
              <p>Building scalable, production-ready architectures</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🤖</div>
            <div className="highlight-text">
              <h3>AI Integration</h3>
              <p>Leveraging AI for behavioral analysis and intelligent systems</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🛡️</div>
            <div className="highlight-text">
              <h3>Defence Tech</h3>
              <p>Interest in strategic technologies and military-grade systems</p>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🌐</div>
            <div className="highlight-text">
              <h3>Open Source</h3>
              <p>Active contributor to FOSS and community-driven projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
