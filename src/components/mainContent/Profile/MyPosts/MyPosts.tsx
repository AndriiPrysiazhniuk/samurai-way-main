import React from 'react';
import classes from "../Profile.module.css";
import {Post} from "./Post/Post";
import {TextField} from "../../../TextField/TextField";

type PropsType = {
    title: string
}
export const MyPosts = (props: PropsType) => {
    return (
        <div className={classes.postsSection}>
            {props.title}
            <TextField/>
            <div className={classes.posts}>
                <Post postTitle={'new post 1'}/>
                <Post postTitle={'post 2'}/>
                {/*<div className={classes.item}>post 1</div>*/}
                {/*<div className={classes.item}>post 2</div>*/}
            </div>
        </div>
    );
};
