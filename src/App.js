// src/App.js
import React from "react";
import Header from "./components/Header";
import PortfolioLeftSection from "./components/LeftPart";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

import "./main.js";
import "./index.css";
import "./styles/Main.css";
import "./bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="portfolio">
        <div class="container">
          <div class="row">
            <div class="portfolio-holder">
              <div class="portfolio-holder__left">
                <PortfolioLeftSection />
              </div>
              <div class="portfolio-holder__right">
                <About />
                <Skills />
                <Projects />
                <Experience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
