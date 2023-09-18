import React, { Fragment } from "react";

import "./MajorIconList.css";

const IconList = ({ Icon }) => {
  return (
    <Fragment>
      {Icon.map((item) => (
        <div key={item.id} className="major-icon-box">
          <div className="major-icon">
            <div>{item.content}</div>
          </div>
          <h2>{item.title}</h2>
        </div>
      ))}
    </Fragment>
  );
};

export default IconList;
