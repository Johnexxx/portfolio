import React from "react";
import "@/styles/pages/_contact.scss";
import profile from "@/assets/profile.jpg";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div className="contact-content">
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
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
