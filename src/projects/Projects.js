import React from 'react';
import stl from './Projects.module.css'
import {Project} from "./Project";

export const Projects = () => {
  const descriptions = [
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
  ]
  return (
    <section className={stl.projectsBlock} id='projects'>
      <div className={stl.container}>
        <h2>My projects</h2>
        <div className={stl.projects}>
          <Project title={'Todolist'} description={descriptions[0]}/>
          <Project title={'Social network'} description={descriptions[1]}/>
          <Project title={'Portfolio'} description={descriptions[2]}/>
          <Project title={'Star wars DB'} description={descriptions[3]}/>
        </div>
      </div>
    </section>
  );
};
