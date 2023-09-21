import React from "react";

import "./HomeButton.css";

const HomeButton = ({ elementRef }) => {
  const onMoveToContact = () => {
    elementRef.current[5].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-button">
      <button onClick={onMoveToContact} className="home-contact">
        Contact Me
      </button>
    </div>
  );
};

export default HomeButton;
