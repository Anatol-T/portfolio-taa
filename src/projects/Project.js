import React from 'react';
import stl from "./Projects.module.css";

export const Project = (props) => {
  return (
    <div className={stl.project}>
      <div className={stl.image}>
        <img src="https://aerospaceexport.com/wp-content/uploads/2019/12/project-management-I-1440x864.jpg" alt="project"/>
      </div>
      <h4>{props.title}</h4>
      <span className={stl.description}>{props.description}</span>
    </div>
  );
};
