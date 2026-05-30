import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'TradeGuard AI',
      subtitle: 'Institutional-Grade Trading Discipline Terminal',
      type: 'Full-Stack Capstone Project',
      description: 'An AI-powered protective layer between traders and the market that prevents impulsive trading decisions by enforcing predefined rules and providing behavioral coaching.',
      highlights: [
        'Built RESTful APIs using FastAPI with SQLAlchemy ORM',
        'Implemented intelligent rule engine for risk-reward validation, position sizing, and revenge trading protection',
        'Created AI behavioral coaching system using Google Gemini API for emotional pattern detection',
        'Developed dynamic discipline scoring engine (0-100) based on trading behavior',
        'Designed premium "Pure Alabaster" UI with Swiss-grid layouts and Recharts analytics',
        'Integrated MetaTrader 5 API for live market connectivity and trade execution',
        'Deployed production-ready architecture on Render and Vercel'
      ],
      tech: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'React 19', 'Tailwind CSS 4', 'Framer Motion', 'Recharts', 'MT5 API', 'Gemini API'],
      impact: [
        'Prevents impulsive trading',
        'Enforces disciplined execution',
        'Provides institutional-grade safeguards',
        'Reduces emotional trading behavior'
      ],
      github: 'https://github.com/aaaaarravv/TradeGuard'
    },
    {
      name: 'DevQuest',
      subtitle: 'Gamified Developer Productivity Platform',
      type: 'Industry Collaborated Project',
      partner: 'Coyolia Technologies Pvt Ltd',
      description: 'A full-stack RPG-inspired productivity platform where developers manage projects and tasks as quests, earn XP, level up, and interact with an AI assistant and GitHub repositories.',
      highlights: [
        'Built gamification system with XP-based progression, dynamic leveling, and difficulty-based rewards',
        'Implemented Quest Board for project management with progress tracking and tech stack management',
        'Created Task Board with difficulty management and XP reward system',
        'Developed Grimoire markdown-style note-taking system',
        'Built Armory GitHub explorer for searching users and repositories',
        'Integrated Guild Assistant AI chatbot powered by OpenAI GPT-4o-mini',
        'Implemented JWT authentication with bcrypt password hashing and rate limiting',
        'Designed 6 visual themes with responsive UI, animations, and particle effects'
      ],
      tech: ['React 19', 'React Router 7', 'Tailwind CSS 4', 'Vite 8', 'Node.js', 'Express.js', 'JWT', 'bcryptjs', 'NeDB', 'GitHub API', 'OpenAI GPT-4o-mini'],
      github: 'https://github.com/aaaaarravv/DevQuest'
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <div className="project-header">
              <div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-meta">
                  <span className="project-type">{project.type}</span>
                  {project.partner && <span className="project-partner">• {project.partner}</span>}
                </div>
              </div>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-section">
              <h4 className="project-section-title">Key Implementations</h4>
              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>

            {project.impact && (
              <div className="project-section">
                <h4 className="project-section-title">Impact</h4>
                <ul className="project-impact">
                  {project.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>

            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        ))}
        
        <IndoorPollutionProject />
      </div>
    </section>
  );
};

export default Projects;


// Indoor Pollution Project Component
const IndoorPollutionProject = () => {
  return (
    <div className="card project-card">
      <div className="project-header">
        <div>
          <h3 className="project-name">Indoor Pollution Source Identifier</h3>
          <p className="project-subtitle">Smart Environmental Monitoring System</p>
          <div className="project-meta">
            <span className="project-type">Embedded Systems + IoT</span>
          </div>
        </div>
      </div>
      
      <p className="project-description">
        A smart air-quality monitor capable of detecting pollution levels AND intelligently identifying 
        the source of pollution using rate-of-change calculations and sensor fusion.
      </p>
      
      <div className="project-section">
        <h4 className="project-section-title">Hardware Components</h4>
        <div className="hardware-tags">
          <span className="tag">MQ135 Gas Sensor</span>
          <span className="tag">DHT11 Sensor</span>
          <span className="tag">OLED Display</span>
          <span className="tag">LEDs</span>
          <span className="tag">Buzzer</span>
          <span className="tag">Arduino</span>
        </div>
      </div>

      <div className="project-section">
        <h4 className="project-section-title">Smart Detection Logic</h4>
        <ul className="project-highlights">
          <li>Differentiates between smoke/fire, cooking emissions, poor ventilation, and clean air</li>
          <li>Uses rate-of-change calculations for intelligent source identification</li>
          <li>Sudden spike detection = smoke/fire alert</li>
          <li>Moderate increase = cooking emissions</li>
          <li>Sustained high values = poor ventilation warning</li>
        </ul>
      </div>

      <div className="project-section">
        <h4 className="project-section-title">Alert & Display System</h4>
        <ul className="project-highlights">
          <li>Green LED = safe air quality</li>
          <li>Yellow LED = moderate pollution detected</li>
          <li>Red LED + buzzer = dangerous levels</li>
          <li>OLED display shows gas levels, temperature, humidity, and pollution source</li>
        </ul>
      </div>

      <div className="project-section">
        <h4 className="project-section-title">Real-World Applications</h4>
        <div className="project-impact-grid">
          <span className="impact-badge">Home Safety</span>
          <span className="impact-badge">Smoke Detection</span>
          <span className="impact-badge">Kitchen Monitoring</span>
          <span className="impact-badge">Ventilation Analysis</span>
          <span className="impact-badge">Environmental Monitoring</span>
        </div>
      </div>

      <div className="project-highlight-box">
        <strong>Key Innovation:</strong> Unlike normal pollution monitors, this system intelligently 
        identifies WHY the pollution is occurring, not just that it exists.
      </div>

      <div className="project-tech">
        <span className="tag">Arduino Programming</span>
        <span className="tag">Sensor Integration</span>
        <span className="tag">Embedded Systems</span>
        <span className="tag">Real-time Detection</span>
        <span className="tag">Hardware-Software Interaction</span>
      </div>

      <a href="https://github.com/aaaaarravv/Indoor-Pollution-Source-Identifier" target="_blank" rel="noopener noreferrer" className="btn btn-github">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        View on GitHub
      </a>
    </div>
  );
};

export { IndoorPollutionProject };
