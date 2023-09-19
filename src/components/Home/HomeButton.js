import React from "react";

import "./HomeButton.css";

const HomeButton = (props) => {
  return (
    <div className="home-button">
      <button onClick={props.onMoveToContact} className="home-contact">
        Contact Me
      </button>
    </div>
  );
};

export default HomeButton;
