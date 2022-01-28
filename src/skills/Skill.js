import React from 'react';
import stl from './Skills.module.css'

export const Skill = (props) => {
  return (
    <div className={stl.skill}>
      <div className={stl.icon}>
        <img src={props.path} alt=""/>
      </div>
      <h3>{props.title}</h3>
      <span className={stl.description}>{props.description}</span>
    </div>
  );
};
