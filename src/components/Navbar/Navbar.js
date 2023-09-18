import React, { useState, useLayoutEffect, useRef } from "react";
import { FaBars } from "react-icons/fa6";

import NavMenu from "./NavMenu";
import NavLogo from "./NavLogo";
import useScroll from "../Hook/useScroll";

import "./Navbar.css";

const Navbar = (props) => {
  const ScrollY = useScroll();

  const [height, setHeight] = useState(0);
  const NavbarRef = useRef(null);

  useLayoutEffect(() => {
    setHeight(NavbarRef.current.clientHeight);
  }, []);

  const onMoveToHome = () => {
    props.onHomeClick();
  };

  const onMoveToAbout = () => {
    props.onAboutClick();
  };

  const onMoveToSkills = () => {
    props.onSkillsClick();
  };

  const onMoveToWork = () => {
    props.onWorkClick();
  };

  const onMoveToTestimonials = () => {
    props.onTestimonialsClick();
  };

  const onMoveToContact = () => {
    props.onContactClick();
  };

  const [useShow, setUseShow] = useState(true);

  const toggleBtnclick = () => {
    setUseShow(!useShow);
  };

  return (
    <nav
      id="navbar"
      className={ScrollY > height ? `navbar-dark` : ``}
      ref={NavbarRef}
    >
      <NavLogo />
      <NavMenu
        onMoveToHome={onMoveToHome}
        onMoveToAbout={onMoveToAbout}
        onMoveToSkills={onMoveToSkills}
        onMoveToWork={onMoveToWork}
        onMoveToTestimonials={onMoveToTestimonials}
        onMoveToContact={onMoveToContact}
        useshow={useShow}
      />
      <button onClick={toggleBtnclick} className="navbar-toggle-btn">
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
