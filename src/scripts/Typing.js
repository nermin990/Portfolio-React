import React, { useEffect, useState } from "react";
import anime from "animejs";

const AnimatedHeading = () => {
    const [letters, setLetters] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const text = "Nermin Memovic";
        setLetters(text.split(""));

        // Simulacija učitavanja sa setTimeout (možeš koristiti pravi preloader)
        setTimeout(() => {
            setIsLoaded(true); // Ovaj state možeš koristiti za prikazivanje sadržaja
        }, 1000); // Možeš prilagoditi trajanje preloadera
    }, []);

    useEffect(() => {
        if (isLoaded) {
            requestAnimationFrame(() => {
                anime.timeline().add({
                    targets: ".portfolio-holder__left-heading .letter",
                    scale: [0, 1],
                    duration: 1500,
                    elasticity: 600,
                    delay: (el, i) => 80 * (i + 1),
                });
            });
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return (
            <div className="loader">
                <div className="circle"></div>
            </div>
        ); // Tvoj preloader
    }

    return (
        <h1 className="portfolio-holder__left-heading">
      <span className="text-wrapper">
        {letters.map((letter, index) => (
            <span key={index} className="letter">
            {letter}
          </span>
        ))}
      </span>
        </h1>
    );
};

export default AnimatedHeading;
