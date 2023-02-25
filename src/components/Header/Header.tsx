import React from "react";
import classes from './Header.module.css';

const Header = () =>{
    return (
        <header className={classes.header}>
            <div className={classes.headerLogo}>
                <img src="https://lh3.googleusercontent.com/ogw/AAEL6sh1y1z3phgTVDjHbh3jAExAz1iOiNDKqWam6iub=s32-c-mo"
                     alt="Logo"/>
                <span>It - incubator</span>
            </div>

        </header>
    )
}
export default Header;