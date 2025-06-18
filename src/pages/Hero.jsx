import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@/styles/pages/_hero.scss';

const Hero = () => {
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate('/projects');
  };

  return (
    <section className="hero-container" id="home">
      <div className="jump-balls-bg">
        <span className="ball ball1"></span>
        <span className="ball ball2"></span>
        <span className="ball ball3"></span>
        <span className="ball ball4"></span>
        <span className="ball ball5"></span>
      </div>
      <main className="hero-main">
        <h2>Hi, I'm John Carl T. Diongson</h2>
        <p>A Web Developer & UI/UX Enthusiast</p>
        <button className="hero-button" onClick={handleViewWork}>
          View My Work
        </button>
      </main>
    </section>
  );
};

export default Hero;
