import React from 'react';
import stl from './Main.module.css'

export const Main = () => {
  return (
    <section className={stl.mainBlock} id='main'>
      <div className={stl.container}>
        <div className={stl.greeting}>
          <span>Hi there</span>
          <h1>FRONT-END DEVELOPER
            REACT / JAVASCRIPT</h1>
          <p>I'm a Front‑end developer (React / JavaScript) who has a results-focused attitude to creating SPA, using
            React (JS/TS), Redux. My free time is dedicated to Codewars & programming tutorials. I am passionate about
            creating excellent software that improves the lives of the people around me.</p>
        </div>
        <div className={stl.photo}></div>
      </div>
    </section>
  );
};
