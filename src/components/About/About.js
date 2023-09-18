import React, { forwardRef } from "react";

import Aboutme from "./Aboutme/Aboutme";
import Majors from "./Major/Majors";
import Job from "./Job/Job";

import "./About.css";

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about">
      <div className="about-container">
        <Aboutme />
        <Majors />
        <Job />
      </div>
    </section>
  );
});

export default About;
