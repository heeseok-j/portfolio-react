import React from "react";

import "./NavMenu.css";

const NavMenu = (props) => {
  return (
    <ul className={props.useshow ? "nav-menu" : "nav-menu show-up"}>
      <li onClick={props.onMoveToHome}>Home</li>
      <li onClick={props.onMoveToAbout}>About</li>
      <li onClick={props.onMoveToSkills}>Skills</li>
      <li onClick={props.onMoveToWork}>My work</li>
      <li onClick={props.onMoveToTestimonials}>Testimonials</li>
      <li onClick={props.onMoveToContact}>Contact</li>
    </ul>
  );
};

export default NavMenu;
