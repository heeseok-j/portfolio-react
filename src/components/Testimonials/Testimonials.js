import { forwardRef } from "react";
import Testimonial from "./Testimonial";

import "./Testimonials.css";

const Testimonials = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="testimonials">
      <h1>Testimonials</h1>
      <h3>See what they say about me</h3>
      <Testimonial />
    </section>
  );
});

export default Testimonials;
