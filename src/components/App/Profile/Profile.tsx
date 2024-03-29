import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageDataType, updatePostText} from "../../../redux/state/state";

type ProfilePropsType = {
    profile: ProfilePageDataType
    addPost: (postMessage: string) => void
    updatePostTest: (newPostMessage: string) => void
    newPostValue: string
}

const Profile: React.FC<ProfilePropsType> = ({profile, addPost, newPostValue}) => {

    return (
        <div>
            <ProfileInfo imageSrc={profile.imageSrc}/>
            <MyPosts postValue={newPostValue} posts={profile.posts} updatePostTest={updatePostText} addPost={addPost}/>
        </div>
    )
}
export default Profile;