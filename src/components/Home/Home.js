import React, { forwardRef } from "react";

import HomeAvatar from "./HomeAvatar";
import HomeInfo from "./HomeInfo";
import HomeButton from "./HomeButton";

import "./Home.css";

const Home = forwardRef(({ elementRef }, ref) => {
  return (
    <section ref={ref} className="home">
      <div className="home-container">
        <HomeAvatar />
        <HomeInfo />
        <HomeButton elementRef={elementRef} />
      </div>
    </section>
  );
});

export default Home;
