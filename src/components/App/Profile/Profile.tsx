import React from "react";
import classes from './Profile.module.css';
import {MyPosts, PropsMyPostsType} from "./MyPosts/MyPosts";
import {ProfileInfo, PropsProfileInfoType} from "./ProfileInfo/ProfileInfo";
import {PropsPostType} from "./MyPosts/Post/Post";



export type ProfileDateType={
    postData: PropsPostType[]
    profileInfoDate: PropsProfileInfoType
    title: string
}

const Profile = (props: ProfileDateType) => {

    return (
        <div>
            <ProfileInfo imageSrc={props.profileInfoDate.imageSrc}/>
            <MyPosts postDate={props.postData} title={props.title}/>
        </div>
    )
}
export default Profile;