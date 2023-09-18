import { forwardRef } from "react";
import { FaGithub } from "react-icons/fa6";

import "./Contact.css";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="contact">
      <h1 className="contact-title">Let's talk</h1>
      <div className="contact-links">
        <i
          onClick={() => window.open("https://github.com/heeseok-j")}
          target="_blank"
        >
          <FaGithub />
        </i>
      </div>
      <h2 className="contact-email">sayjhs0806@gmail.com</h2>
    </section>
  );
});

export default Contact;
