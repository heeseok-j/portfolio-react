import React from "react";

import IconList from "./MajorIconList";
import { FaHtml5 } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import "./Majors.css";

const IconItem = [
  {
    id: 1,
    content: <FaHtml5 />,
    title: "HTML",
  },
  {
    id: 2,
    content: <FaJs />,
    title: "Javascript",
  },
  {
    id: 3,
    content: <FaReact />,
    title: "React",
  },
];

const Majors = () => {
  return (
    <div className="majors">
      <IconList Icon={IconItem} />
    </div>
  );
};

export default Majors;
