import React from 'react';
import classes from "../MyPosts/MyPosts.module.css";
import {Post} from "./Post/Post";
import {TextField} from "../TextField/TextField";

type ProfileType = {
    title: string
}
export const MyPosts = ({title}: ProfileType) => {
    return (
        <div className={classes.postsSection}>
            <h3>
                {title}
            </h3>
            <TextField/>
            <div className={classes.posts}>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

