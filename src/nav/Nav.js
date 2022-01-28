import React from 'react';
import stl from './Nav.module.css'

export const Nav = () => {
    return (
        <nav className={stl.nav}>
            <a href="#main">Главная</a>
            <a href="#skills">Скилы</a>
            <a href="#projects">Проекты</a>
            <a href="#contact">Контакты</a>
        </nav>
    );
};

