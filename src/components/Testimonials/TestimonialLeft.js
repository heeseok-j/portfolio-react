import React from "react";

import "./Testimonial.css";

const TestimonialLeft = (props) => {
  const click = () => {
    console.log(props.viewport);
  };

  return (
    <div
      onClick={click}
      className={props.viewport ? props.items.class : "testimonial"}
    >
      <img
        className="testimonial-avatar"
        src={props.items.src}
        alt={props.items.alt}
      />
      <div className="testimonial-speech-bubble">
        <p>{props.items.content}</p>
        <div>
          <span>{props.items.name}</span> / {props.items.group}
        </div>
      </div>
    </div>
  );
};

export default TestimonialLeft;
