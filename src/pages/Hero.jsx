import React from 'react';
import '../styles/pages/_hero.scss';

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <main className="hero-main">
        <h2>Hi, I'm John Carl T. Diongson</h2>
        <p>A Web Developer & UI/UX Enthusiast</p>
        <a href="#projects" className="hero-button">View My Work</a>
      </main>
    </section>
  );
};

export default Hero;
