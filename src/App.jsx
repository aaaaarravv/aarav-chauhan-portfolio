import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

export default App;
