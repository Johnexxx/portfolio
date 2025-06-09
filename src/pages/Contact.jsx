import React from 'react'
import '../styles/pages/_contact.scss';

const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>
          Interested in working together or have a question? Fill out the form below or reach out via email!
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
