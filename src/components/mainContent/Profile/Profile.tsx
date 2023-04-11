import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {state} from "../../../redux/State";

type ProfileType = {
    title: string
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={classes.content}>
            <ProfileInfo state={state.profileInfoState}/>
            <MyPosts state={state.postState} title={props.title}/>
        </div>
    )
}
