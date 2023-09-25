import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useObserver = (initial) => {
  const [viewport, setViewport] = useState(false);

  const [ref, inView] = useInView(initial);

  useEffect(() => {
    if (inView) {
      setViewport(true);
    }
  }, [inView]);

  return [ref, viewport];
};

export default useObserver;
