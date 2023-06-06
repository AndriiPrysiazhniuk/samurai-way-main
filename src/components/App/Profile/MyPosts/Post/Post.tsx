import React from 'react';
import classes from "./Post.module.css";

export type PropsPostType = {
    id: number
    message: string
}
export const Post = ({id, message}: PropsPostType) => {
    return (
        <div className={classes.item}>
            {message}
        </div>
    );
};
