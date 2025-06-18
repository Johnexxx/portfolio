import React from "react";
import "@/styles/pages/_projects.scss";
import clucashLogo from "@/assets/Clucash-Logo.png";

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <div className="projects-content">
        <h2>My Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-header">
              <img
                src={clucashLogo}
                alt="Clucash Logo"
                className="project-logo"
              />
              <h3>Clucash</h3>
            </div>
            <div className="project-info">
              <p>
                A web application for reselling second hand items, built using
                MySQL and PHP.
              </p>
              <a
                href="http://surplus.free.nf/?i=1"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
