import React from "react";
import "../styles/ContactMe.css";

const ContactMe = () => {
  return (
    <div id="contact-me">
      <div className="container contact">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          I'm open to any new opportunities for work or new starting projects.
          Please send me an email if you have a question or want to say hi, and
          I'll do my best to respond!
        </p>
        <a
          href="mailto:javierarango.business@gmail.com"
          className="btn btn-outline-primary contact-button"
        >
          <span role="img" alt="waive hand emoji" aria-label="emoji">
            👋
          </span>{" "}
          Say Hello
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
