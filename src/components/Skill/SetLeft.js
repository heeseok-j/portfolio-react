import useObserver from "../Hooks/useObserver";

import "./SetLeft.css";

const skillItem = [
  {
    id: 1,
    title: "HTML",
    percent: 99,
    value: "skill-value1",
  },
  {
    id: 2,
    title: "CSS",
    percent: 90,
    value: "skill-value2",
  },
  {
    id: 3,
    title: "Javascript",
    percent: 40,
    value: "skill-value3",
  },
  {
    id: 4,
    title: "React",
    percent: 20,
    value: "skill-value4",
  },
];

const SkillLeft = () => {
  const [ref, viewport] = useObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.35,
  });

  return (
    <div ref={ref} className="skillset-left">
      <h3 className="skillset-title">Skills</h3>
      {skillItem.map((item) => (
        <div key={item.id} className="skill">
          <div className="skill-description">
            <span>{item.title}</span>
            <span>{item.percent}%</span>
          </div>
          <div className="skill-bar">
            <div className={viewport ? `${item.value}` : ""} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillLeft;
