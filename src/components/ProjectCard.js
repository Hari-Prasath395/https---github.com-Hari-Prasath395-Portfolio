import { NavLink } from "react-router-dom";
import "./ProjectCard.css";

import React from "react";

const ProjectCard = ({ projectsData }) => {
  return (
    <div className="project-container">
      <h2 className="project-heading">Projects</h2>
      <div className="project-card-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imgSrc} alt="web-img" />
            <h2 className="project-title">{project.title}</h2>
            <div className="proj-details">
              <p>{project.details}</p>
              <div className="proj-btns">
                <NavLink to={project.viewLink} className="btn">
                  View
                </NavLink>
                <NavLink to={project.sourceLink} className="btn">
                  Source
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
