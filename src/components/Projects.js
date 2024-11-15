import React from "react";
import "../styles/Projects.css";
import {PROJECTS_DATA} from "../data-scripts/projects-data";

const Projects = () => {
    return (
        <div id="projects" className="content-holder">
            <h2>Projects</h2>
            {PROJECTS_DATA.map((project, index) => (
                <a
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="content-holder-experience"
                >
                    <div className="content-holder-experience__right-firm-year">
                        <h3>{project.title}</h3>
                    </div>
                    <p>{project.description}</p>
                    <div className="content-holder-experience__right-tech">
                        {project.technologies.map((tech, i) => (
                            <span key={i}>{tech}</span>
                        ))}
                    </div>
                    <p className="notes">
                        {project.notes && <p className="notes">{project.notes}</p>}
                    </p>
                </a>
            ))}
        </div>
    );
};

export default Projects;
