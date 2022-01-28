import React from 'react';
import stl from './Header.module.css'
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={stl.header}>
            <Nav/>
        </div>
    );
};
