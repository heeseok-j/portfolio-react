import React, { forwardRef } from "react";

import HomeAvatar from "./HomeAvatar";
import HomeInfo from "./HomeInfo";
import HomeButton from "./HomeButton";

import "./Home.css";

const Home = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="home">
      <div className="home-container">
        <HomeAvatar />
        <HomeInfo />
        <HomeButton />
      </div>
    </section>
  );
});

export default Home;
