import React from "react";
import classes from './Header.module.css';

type headerDataType = {
    headerData: headerData
}
type headerData = {
    imageSrc: string
    logoText: string
}
export const Header = (props: headerDataType) => {

    return (
        <header className={classes.header}>
            <img className={classes.logoImage}
                 src={props.headerData.imageSrc}
                 alt="lOGO"/>
            <span>{props.headerData.logoText}</span>
        </header>
    )
}
