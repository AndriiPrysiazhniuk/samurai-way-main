import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfileType = {
    title: string
}


export const Profile = (props: ProfileType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts title={props.title}/>
        </div>
    )
}
