import React from 'react';
import classes from "./Post.module.css";

type PropsType = {
    postTitle: string
}
export const Post = (props: PropsType) => {
    return (<>
            <div className={classes.item}>
                <img className={classes.messageAva}
                     src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3_9P77IWzR8Dvb9My5aBF_ks9uG5BBRB3cvGWHg&s'}
                     alt="ava"/>
                <div>{props.postTitle}</div>
                <div><span className={classes.like}>like</span></div>
            </div>
        </>
    );
};