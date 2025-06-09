import React from 'react'
import '../styles/pages/_about.scss';

const About = () => {
  return (
    <section className='about-container' id='about'>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm John Carl T. Diongson, a passionate Web Developer and UI/UX Enthusiast. 
          I love building beautiful and functional web experiences using modern technologies.
        </p>
        <ul className="about-list">
          <li>🌐 Frontend: React, HTML, CSS, JavaScript</li>
          <li>🎨 UI/UX: Figma, Adobe XD</li>
          <li>⚙️ Backend: Node.js, Express</li>
          <li>📚 Always learning and growing!</li>
        </ul>
      </div>
    </section>
  )
}

export default About;
