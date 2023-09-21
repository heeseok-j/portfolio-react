import React, { useRef } from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skill/Skills";
import Work from "./components/Work/Work";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

const App = () => {
  const elementRef = useRef([]);

  return (
    <div>
      <Navbar elementRef={elementRef} />
      <Home
        elementRef={elementRef}
        ref={(el) => (elementRef.current[0] = el)}
      />
      <About ref={(el) => (elementRef.current[1] = el)} />
      <Skills ref={(el) => (elementRef.current[2] = el)} />
      <Work ref={(el) => (elementRef.current[3] = el)} />
      <Testimonials ref={(el) => (elementRef.current[4] = el)} />
      <Contact ref={(el) => (elementRef.current[5] = el)} />
    </div>
  );
};

export default App;
