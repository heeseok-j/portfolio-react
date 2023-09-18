import { forwardRef, useState } from "react";

import CategoryList from "./CategoryList";
import WorkProject from "./WorkProject";

import "./Work.css";

const Work = forwardRef((props, ref) => {
  const [projectData, setProjectData] = useState("");
  const [matchCheck, setMatchCheck] = useState("");

  return (
    <section ref={ref}>
      <h1>My work</h1>
      <h3>Projects</h3>
      <CategoryList setMatchCheck={setMatchCheck} projectData={projectData} />
      <WorkProject matchCheck={matchCheck} setProjectData={setProjectData} />
    </section>
  );
});

export default Work;
