import React from 'react';
import classes from './Error404.module.css'

export const Error404 = () => {
    return (
        <div className={classes.error}>
            <h1 className={classes.message}>Error 404 - page is not found</h1>
        </div>
    );
};
