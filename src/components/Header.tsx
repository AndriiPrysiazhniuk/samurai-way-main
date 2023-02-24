import React from "react";
import samurai from "../img/samurai.png";
import classes from './Header.module.css';

const Header = () =>{
    return (
        <header className={classes.header}>
            <img src="https://lh3.googleusercontent.com/ogw/AAEL6sh1y1z3phgTVDjHbh3jAExAz1iOiNDKqWam6iub=s32-c-mo"
                 alt="Logo"/>
        </header>
    )
}
export default Header;