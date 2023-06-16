import "./ProjectImg.css";
import React from "react";

const ProjectImg = (props) => {
  return (
    <div className="project-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ProjectImg;
