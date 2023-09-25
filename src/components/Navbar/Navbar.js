import React, { useState, useLayoutEffect, useRef } from "react";
import { FaBars } from "react-icons/fa6";

import NavMenu from "./NavMenu";
import NavLogo from "./NavLogo";
import useScroll from "../Hooks/useScroll";

import "./Navbar.css";

const Navbar = ({ elementRef }) => {
  const ScrollY = useScroll();

  const [height, setHeight] = useState(0);
  const [useShow, setUseShow] = useState(true);

  const NavbarRef = useRef(null);

  useLayoutEffect(() => {
    setHeight(NavbarRef.current.clientHeight);
  }, []);

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
      <NavMenu useshow={useShow} elementRef={elementRef} />
      <button onClick={toggleBtnclick} className="navbar-toggle-btn">
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
