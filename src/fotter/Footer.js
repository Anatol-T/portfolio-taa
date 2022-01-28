import React from 'react';
import stl from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={stl.footer}>
      <div>
        <h3>Taranenko Anatolii</h3>
      </div>
      <div className={stl.mainBlock}>
        <div className={stl.card}></div>
        <div className={stl.card}></div>
        <div className={stl.card} ></div>
        <div className={stl.card}></div>
      </div>
      <div>Git Hub</div>
    </footer>
  );
};
