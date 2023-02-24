import React from "react";
import my_way from '../img/my-way.png';
import classes from './Profile.module.css';

type ProfileType = {
    title: string
}


const Profile = (props: ProfileType) => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://media.istockphoto.com/id/1040225712/photo/empty-parking-lot.jpg?s=612x612&w=0&k=20&c=vg4LfHYGSCCAsFj4SHafztn1rsaKqVEyDMEiBpVro1E="
                    alt="main_picture"/>
            </div>
            <h3>
                {props.title}
            </h3>
            <div>
                My posts
            </div>
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    Post 1
                </div>
                <div className={classes.item}>
                    Post 2
                </div>
            </div>
        </div>
    )
}
export default Profile;