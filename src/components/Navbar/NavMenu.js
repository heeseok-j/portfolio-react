import React from "react";

import "./NavMenu.css";

const navMenuList = [
  {
    id: "0",
    title: "Home",
  },
  {
    id: "1",
    title: "About",
  },
  {
    id: "2",
    title: "Skills",
  },
  {
    id: "3",
    title: "My work",
  },
  {
    id: "4",
    title: "Testimonials",
  },
  {
    id: "5",
    title: "Contact",
  },
];

const NavMenu = ({ useshow, elementRef }) => {
  return (
    <ul className={useshow ? "nav-menu" : "nav-menu show-up"}>
      {navMenuList.map((item) => (
        <li
          onClick={() =>
            elementRef.current[item.id].scrollIntoView({
              behavior: "smooth",
            })
          }
          key={item.id}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
