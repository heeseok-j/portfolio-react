import React from "react";

import "./Testimonial.css";

const TestimonialRight = (props) => {
  return (
    <div className={props.viewport ? props.items.class : "testimonial"}>
      <div className="testimonial-speech-bubble">
        <p>{props.items.content}</p>
        <div>
          <span>{props.items.name}</span> / {props.items.group}
        </div>
      </div>
      <img
        className="testimonial-avatar"
        src={props.items.src}
        alt={props.items.alt}
      />
    </div>
  );
};

export default TestimonialRight;
