import React from "react";
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <img className={classes.logoImage} src="https://lh3.googleusercontent.com/ogw/AAEL6sh1y1z3phgTVDjHbh3jAExAz1iOiNDKqWam6iub=s32-c-mo"
                     alt="lOGO"/>
                <span>it-incubator</span>
            </div>

        </header>
    )
}
