
import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import Bio from './components/Bio.js';
import CinemaHighlight from './components/CinemaHighlight.js';
import Portfolio from './components/Portfolio.js';
import Discography from './components/Discography.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="servicios">
          <Services />
        </section>
        
        <section id="trayectoria">
          <Bio />
        </section>
        
        <section id="colaboraciones">
          <Portfolio />
        </section>

        <section id="cine">
          <CinemaHighlight />
        </section>
        
        <section id="discografia">
          <Discography />
        </section>
        
        <section id="proyectos">
          <Projects />
        </section>
        
        <section id="contacto">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
