import React, { useEffect, useState } from "react";
import anime from "animejs";

const AnimatedHeading = () => {
    const [letters, setLetters] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const nameArray = ["N", "e", "r", "m", "i", "n"];
        const space = [" "];
        const surnameArray = ["M", "e", "m", "o", "v", "i", "c"];

        setLetters([...nameArray, ...space, ...surnameArray]);

        setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            // Prvo prikaži content (još uvek nevidljiv zbog CSS-a)
            setShowContent(true);

            // Zatim pokreni animaciju
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

    return (
        <>
            {!isLoaded && (
                <div className="loader">
                    <div className="circle"></div>
                </div>
            )}

            {showContent && (
                <h1 className="portfolio-holder__left-heading">
                    <span className="text-wrapper">
                        {letters.map((letter, index) => (
                            <span
                                key={index}
                                className={`letter ${letter === " " ? "space" : ""}`}
                                style={{ transform: 'scale(0)' }}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                </h1>
            )}
        </>
    );
};

export default AnimatedHeading;