import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageDataType} from "../../../redux/state/state";

type ProfilePropsType = {
    profile: ProfilePageDataType
   dispatch:(action:ActionsType)=>void
    newPostValue: string
}

const Profile: React.FC<ProfilePropsType> = ({profile,  newPostValue,dispatch}) => {

    return (
        <div>
            <ProfileInfo imageSrc={profile.imageSrc}/>
            <MyPosts postValue={newPostValue} posts={profile.posts} dispatch={dispatch}/>
        </div>
    )
}
export default Profile;