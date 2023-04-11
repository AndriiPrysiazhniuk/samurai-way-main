import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

type navbarType = {
    srcTo: string
    menuItemTitle: string
}

type navbarDataType = {
    navbarData: navbarType[]
}
export const Navbar = (props: navbarDataType) => {
    const mappedNavbarData = props.navbarData.map(el => {
        return (
            <div className={classes.item}>
                <NavLink to={el.srcTo} activeClassName={classes.activeItemClass}>{el.menuItemTitle}
                </NavLink>
            </div>
        )
    })

    return (
        <nav className={classes.sidebar}>
            {mappedNavbarData}
        </nav>
    );
};

