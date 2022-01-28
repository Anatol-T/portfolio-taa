import React from 'react';
import stl from './Skills.module.css'
import {Skill} from "./Skill";

export const Skills = () => {
const t = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nulla recusandae vel! Ad aut blanditiis consequuntur ducimus, excepturi facere fugiat laborum necessitatibus repellat sequi sunt tempore ut vel. Ducimus, optio.'
  return (
    <section className={stl.skillsBlock} id='skills'>
      <div className={stl.container}>
        <h2>Skills</h2>
        <div className={stl.skills}>
          <Skill title={"JS"} description={t} path={require('./js.png')}/>
          <Skill title={"React"} description={t} path={require('./react.png')}/>
          <Skill title={"Vue"} description={t} path={require('./vue.png')}/>
          <Skill title={"HTML"} description={t} path={require('./html.png')}/>
          <Skill title={"CSS"} description={t} path={require('./css.png')}/>
          <Skill title={"TS"} description={t} path={require('./ts.png')}/>

        </div>
      </div>
    </section>
  );
};
