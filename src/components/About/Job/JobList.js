import { Fragment } from "react";

import "./JobList.css";

const JobList = ({ jobList }) => {
  return (
    <Fragment>
      {jobList.map((item) => (
        <div key={item.id} className="job">
          <img className="job-logo" src={item.src} alt="sankyu" />
          <div className="job-description">
            <p className="job-name">
              {item.name}
              <br />
              {item.subName}
            </p>
            <p className="job-period">{item.period}</p>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default JobList;
