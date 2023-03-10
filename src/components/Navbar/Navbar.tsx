import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={classes.sidebar}>
            <div className={`${classes.item}`}>
                <NavLink to={'/Profile'} activeClassName={classes.activeItemClass}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/Dialogs'} activeClassName={classes.activeItemClass}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/News'} activeClassName={classes.activeItemClass}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/Music'} activeClassName={classes.activeItemClass}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/Settings'} activeClassName={classes.activeItemClass}>Settings</NavLink>
            </div>
        </nav>
    );
};

