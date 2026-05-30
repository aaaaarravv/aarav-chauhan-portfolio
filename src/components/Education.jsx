import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        <div className="card education-card">
          <div className="education-header">
            <div>
              <h3 className="education-degree">B.Tech in Computer Science & Engineering (Data Science)</h3>
              <p className="education-institution">K.R. Mangalam University</p>
            </div>
            <div className="education-meta">
              <span className="education-duration">2025 – 2029</span>
              <span className="education-cgpa">CGPA: 8.7</span>
            </div>
          </div>
        </div>

        <div className="card education-card">
          <div className="education-header">
            <div>
              <h3 className="education-degree">Senior Secondary (Non-Medical)</h3>
              <p className="education-institution">Army Public School, Mumbai</p>
            </div>
          </div>
          <div className="education-subjects">
            <span className="tag">Physics</span>
            <span className="tag">Chemistry</span>
            <span className="tag">Mathematics</span>
            <span className="tag">English</span>
            <span className="tag">Informatics Practices</span>
          </div>
        </div>

        <div className="card education-card ncc-card">
          <div className="education-header">
            <div>
              <h3 className="education-degree">National Cadet Corps (NCC)</h3>
              <p className="education-institution">Army Wing • ~5 Years</p>
            </div>
            <div className="ncc-badge">
              <span className="ncc-certificate">NCC 'A' Certificate</span>
              <span className="ncc-grade">Grade A</span>
            </div>
          </div>
          <div className="ncc-traits">
            <span className="trait-tag">Discipline</span>
            <span className="trait-tag">Leadership</span>
            <span className="trait-tag">Teamwork</span>
            <span className="trait-tag">Strategic Thinking</span>
            <span className="trait-tag">Resilience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
