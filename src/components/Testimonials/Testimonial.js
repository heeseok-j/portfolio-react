import TestimonialLeft from "./TestimonialLeft";
import TestimonialRight from "./TestimonialRight";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "./Testimonial.css";

const testimonialItem = [
  {
    src: "img/testimonial/people.jpg",
    alt: "people",
    name: "gueset132",
    group: "山九",
    class: "testimonial-animation1",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Facilis, rem, earum obcaecati id ea ducimus unde, beatae esse aperiam recusandae
    vero placeat dolore. Suscipit, doloribus non illo nostrum aspernatur ad praesentium
    excepturi fuga aliquid optio, repellat at necessitatibus! Et, sint.`,
  },
  {
    src: "img/testimonial/women_people.jpg",
    alt: "people",
    name: "guest247",
    group: "日本の友達",
    class: "testimonial-animation2",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Voluptatibus, ullam quis alias rerum aliquam facilis molestiae ipsam 
    aspernatur tempora amet eveniet quo unde nisi quasi obcaecati? Temporibus molestias in eveniet?`,
  },
  {
    src: "img/testimonial/people.jpg",
    alt: "people",
    name: "people",
    group: "創価大学",
    class: "testimonial-animation3",
    content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
    eius officiis iure sint alias odio ipsa quam voluptates maxime eos
    non asperiores, cumque vero error eligendi consectetur sunt, vel
    recusandae. Ducimus consequuntur iste omnis quibusdam cupiditate.
    Praesentium voluptates corrupti reiciendis iusto mollitia
    voluptatum adipisci eligendi nisi ea? Aliquid culpa molestias
    necessitatibus repudiandae possimus, quam quaerat similique velit
    enim ad voluptates.`,
  },
];

const Testimonial = () => {
  const [viewport, setViewport] = useState(false);

  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setViewport(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="testimonial-box">
      <TestimonialLeft viewport={viewport} items={testimonialItem[0]} />
      <TestimonialRight viewport={viewport} items={testimonialItem[1]} />
      <TestimonialLeft viewport={viewport} items={testimonialItem[2]} />
    </div>
  );
};

export default Testimonial;
