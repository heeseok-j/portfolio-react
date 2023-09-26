import { forwardRef, useState } from "react";

import CategoryList from "./CategoryList";
import WorkProject from "./WorkProject";

import "./Work.css";

const Work = forwardRef((props, ref) => {
  const [projectData, setProjectData] = useState("");
  const [matchCheck, setMatchCheck] = useState("");
  const [fade, setFade] = useState(false);

  return (
    <section ref={ref}>
      <h1>My work</h1>
      <h3>Projects</h3>
      <CategoryList
        setFade={setFade}
        setMatchCheck={setMatchCheck}
        projectData={projectData}
      />
      <WorkProject
        fade={fade}
        matchCheck={matchCheck}
        setProjectData={setProjectData}
      />
    </section>
  );
});

export default Work;
