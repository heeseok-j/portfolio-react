import { forwardRef } from "react";
import SkillSet from "./SkillSet";

import "./Skills.css";

const Skills = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="skills">
      <h1>Skills</h1>
      <h2>Skills & Attributes</h2>
      <SkillSet />
    </section>
  );
});

export default Skills;
