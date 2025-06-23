import React from "react";
import "@/styles/pages/_contact.scss";
import profile from "../assets/profile.jpg";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-content glass-card">
        <h2>Contact</h2>
        <img
          src={profile}
          alt="Profile"
          className="contact-profile"
        />
        <p className="creator">Johnexx</p>
        <p>Reach out at my socials</p>
        <div className="social-icons">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="GitHub"
            />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="mailto:your@email.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
