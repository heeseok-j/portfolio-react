import React, { useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skill/Skills";
import Work from "./components/Work/Work";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

const App = () => {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const workRef = useRef();
  const testimonialsRef = useRef();
  const contactRef = useRef();

  const onHomeClick = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onSkillsClick = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onWorkClick = () => {
    workRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onTestimonialsClick = () => {
    testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        onHomeClick={onHomeClick}
        onAboutClick={onAboutClick}
        onSkillsClick={onSkillsClick}
        onWorkClick={onWorkClick}
        onTestimonialsClick={onTestimonialsClick}
        onContactClick={onContactClick}
      />
      <Home ref={homeRef} onContactClick={onContactClick} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Work ref={workRef} />
      <Testimonials ref={testimonialsRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default App;
