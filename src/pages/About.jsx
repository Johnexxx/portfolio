import React from 'react'
import '../styles/pages/_about.scss';
import { FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiPhp, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaReact color="#61dafb" title="React" />, label: "React" },
      { icon: <SiHtml5 color="#e34c26" title="HTML5" />, label: "HTML5" },
      { icon: <SiCss3 color="#1572b6" title="CSS3" />, label: "CSS3" },
      { icon: <SiJavascript color="#f7df1e" title="JavaScript" />, label: "JavaScript" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { icon: <FaNodeJs color="#68a063" title="Node.js" />, label: "Node.js" },
      { icon: <SiPhp color="#777bb4" title="PHP" />, label: "PHP" },
    ]
  },
  {
    title: "UI/UX",
    skills: [
      { icon: <FaFigma color="#a259ff" title="Figma" />, label: "Figma" },
    ]
  }
];

const About = () => {
  return (
    <section className='about-container' id='about'>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm John Carl T. Diongson, a passionate Web Developer and UI/UX Enthusiast. 
          I love building beautiful and functional web experiences using modern technologies.
        </p>
        <div className="about-categories">
          {skillCategories.map((category, idx) => (
            <div className="about-category" key={idx}>
              <h6 className="about-category-title">{category.title}</h6>
              <div className="about-skills-horizontal">
                {category.skills.map((skill, i) => (
                  <div className="about-skill-card" key={i}>
                    <div className="about-icon">{skill.icon}</div>
                    <div className="about-skill-label">{skill.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About;
