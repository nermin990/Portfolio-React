import React, { useEffect, useRef } from "react";
import anime from "animejs";

const AnimatedHeading = () => {
  const textWrapperRef = useRef(null);

  useEffect(() => {
    // Prepoznavanje i razdvajanje svakog slova u <span class='letter'>
    const textWrapper = textWrapperRef.current;
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      // Animacija sa Anime.js
      anime.timeline().add({
        targets: ".portfolio-holder__left-heading .letter",
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 80 * (i + 1),
      });
    }
  }, []);

  return (
    <h1 className="portfolio-holder__left-heading">
      <span className="text-wrapper" ref={textWrapperRef}>
        <span className="letters">Nermin Memovic</span>
      </span>
    </h1>
  );
};

export default AnimatedHeading;
