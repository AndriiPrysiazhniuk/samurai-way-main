import React from "react";
import classes from './Profile.module.css';
import {MyPosts} from "../MyPosts/MyPosts";

type ProfileType = {
    title: string
}


const Profile = (props: ProfileType) => {
    return (
        <div >
            <div>
                <img
                    src="https://media.istockphoto.com/id/1040225712/photo/empty-parking-lot.jpg?s=612x612&w=0&k=20&c=vg4LfHYGSCCAsFj4SHafztn1rsaKqVEyDMEiBpVro1E="
                    alt="main_picture"/>
            </div>
            <MyPosts title={props.title}/>
        </div>
    )
}
export default Profile;