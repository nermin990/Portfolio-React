import React, { useState, useEffect } from "react";

const PortfolioNavigation = () => {
  const [activeLink, setActiveLink] = useState("about"); // Početni aktivni link

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = windowHeight / 3; // Manji offset kako bi lakše aktivirali linkove

      document.querySelectorAll(".content-holder").forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Prilagodjeni uslov sa offsetom
        if (
          scrollPosition + offset >= sectionTop &&
          scrollPosition + offset < sectionTop + sectionHeight
        ) {
          const id = section.id;
          setActiveLink(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    setActiveLink(id);
    // Pomeranje na sekciju pri kliku
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio-navigation">
      <ul>
        <li>
          <a
            href="#about"
            id="about-link"
            className={activeLink === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            <span
              className={activeLink === "about" ? "line active-line" : "line"}
            ></span>
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            id="skills-link"
            className={activeLink === "skills" ? "active" : ""}
            onClick={() => handleClick("skills")}
          >
            <span
              className={activeLink === "skills" ? "line active-line" : "line"}
            ></span>
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            id="projects-link"
            className={activeLink === "projects" ? "active" : ""}
            onClick={() => handleClick("projects")}
          >
            <span
              className={
                activeLink === "projects" ? "line active-line" : "line"
              }
            ></span>
            Projects
          </a>
        </li>
        <li>
          <a
            href="#experience"
            id="experience-link"
            className={activeLink === "experience" ? "active" : ""}
            onClick={() => handleClick("experience")}
          >
            <span
              className={
                activeLink === "experience" ? "line active-line" : "line"
              }
            ></span>
            Experience
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioNavigation;
