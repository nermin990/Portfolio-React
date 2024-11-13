import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";
import "./App.css";

const MainJS = () => {
  const [text, setText] = useState("");
  const headingRef = useRef(null);
  const hamburgerIconRef = useRef(null);
  const hamburgerMenuRef = useRef(null);

  useEffect(() => {
    // Heading typing animation
    const fullText = "Your Portfolio";
    const splitText = fullText.split("").map((char, index) => (
      <span className="letter" key={index}>
        {char}
      </span>
    ));

    setText(splitText);

    anime.timeline().add({
      targets: ".portfolio-holder__left-heading .letter",
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 80 * (i + 1),
    });

    // Navigation scroll spy
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      document.querySelectorAll(".content-holder").forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition + windowHeight / 6 >= sectionTop &&
          scrollPosition + windowHeight / 2 < sectionTop + sectionHeight
        ) {
          const id = section.getAttribute("id");

          document
            .querySelectorAll(
              ".portfolio-holder__left-content .portfolio-navigation ul li a"
            )
            .forEach((link) => {
              link.classList.remove("active");
              link.querySelector("span").classList.remove("active-line");
            });

          const activeLink = document.querySelector(`a[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add("active");
            activeLink.querySelector("span").classList.add("active-line");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Hamburger menu toggle
    const handleHamburgerClick = () => {
      if (hamburgerIconRef.current) {
        hamburgerIconRef.current.classList.toggle("is-active");
        if (hamburgerMenuRef.current) {
          hamburgerMenuRef.current.style.display =
            hamburgerMenuRef.current.style.display === "block"
              ? "none"
              : "block";
        }
      }
    };

    const hamburgerLinks =
      hamburgerMenuRef.current?.querySelectorAll("a") || [];

    hamburgerIconRef.current?.addEventListener("click", handleHamburgerClick);

    hamburgerLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (hamburgerMenuRef.current)
          hamburgerMenuRef.current.style.display = "none";
        if (hamburgerIconRef.current)
          hamburgerIconRef.current.classList.remove("is-active");
      });
    });

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      hamburgerIconRef.current?.removeEventListener(
        "click",
        handleHamburgerClick
      );
      hamburgerLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="App">
      {/* Heading animation */}
      <div className="portfolio-holder__left-heading">
        <h1 ref={headingRef}>{text}</h1>
      </div>

      {/* Navigation */}
      <div className="portfolio-holder__left-content">
        <div className="portfolio-navigation">
          <ul>
            <li>
              <a href="#section1">
                Home <span className="active-line"></span>
              </a>
            </li>
            <li>
              <a href="#section2">
                About <span className="active-line"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sections */}
      <div id="section1" className="content-holder">
        <h2>Section 1</h2>
      </div>
      <div id="section2" className="content-holder">
        <h2>Section 2</h2>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-icon" ref={hamburgerIconRef}>
        ☰
      </div>
      <div className="hamburger" ref={hamburgerMenuRef}>
        <div className="hamburger-menu">
          <ul>
            <li>
              <a href="#section1">Home</a>
            </li>
            <li>
              <a href="#section2">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainJS;
