import React from "react";
import {EXPERIENCE_DATA} from "../data-scripts/experience-data";

const Experience = () => {
  return (
    <div id="experience" className="content-holder">
      <h2>Experience</h2>
      {EXPERIENCE_DATA.map((experiance, index) => (
          <div className="content-holder-experience" key={index}>
            <div className="content-holder-experience__right-firm-year">
              <h3>{experiance.title}</h3>
              <p>{experiance.experienceDuration}</p>
            </div>
            <h4>{experiance.jobTitle}</h4>
            <p>{experiance.jobDescription}</p>
            <div className="content-holder-experience__right-tech">
              {experiance.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
      ))}
    </div>
  );
};

export default Experience;
