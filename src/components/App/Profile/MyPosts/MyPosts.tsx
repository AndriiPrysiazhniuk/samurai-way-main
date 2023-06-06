import React from 'react';
import classes from "./MyPosts.module.css";
// import {Post, PropsPostType} from "./Post/Post";
import {TextField} from "../../../TextField/TextField";
import {Post, PropsPostType} from "./Post/Post";


export type PropsMyPostsType = {
    title: string
    postDate: PropsPostType[]

}


export const MyPosts = ({postDate, title}: PropsMyPostsType) => {

    const mappedPosts = postDate.map(el =>
        <Post key={el.id} id={el.id} message={el.message}/>)
    return (
        <div className={classes.postsSection}>
            <h3>
                {title}
            </h3>
            <div>
                <TextField/>
                <button>+</button>
            </div>
            <div className={classes.posts}>{mappedPosts}</div>
        </div>
    );
};

