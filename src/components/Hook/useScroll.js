import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const ScrollUp = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", ScrollUp);

    return () => window.removeEventListener("scroll", ScrollUp);
  }, []);

  return scrollY;
};

export default useScroll;
