import React, {useState} from 'react';
import classes from "../Profile.module.css";
import {Post} from "./Post/Post";
import {TextField} from "../../../../universalComponents/TextField/TextField";
import {v1} from "uuid";
import {BigBossButton} from "../../../../universalComponents/BigBossButton/BigBossButton";

// type PropsType = {
//     title: string
// }

type PostStateType = {
    id: string
    postTitle: string
}
type PropsType = {
    title: string
    state: PostStateType[]
}

export const MyPosts = (props: PropsType) => {
    const [filterValue, setFilterValue] = useState('')
    const [posts, setPosts] = useState(props.state)
    const addPost = () => {
        let newPost = {id: v1(), postTitle: filterValue}
        setPosts([...posts, newPost])
    }
    const addMessage = () => {
        // props.callback(filterValue)
        setFilterValue('')
    }
    const mappedPosts = posts.map(el => <Post key={el.id} postTitle={el.postTitle}/>)

    return (
        <div className={classes.postsSection}>
            <h2>{props.title}</h2>
            <div>
                <BigBossButton title={'add post'} callback={addPost}/>
                <TextField filterValue={filterValue} callback={setFilterValue}/>
            </div>
            <div className={classes.posts}>
                {mappedPosts}
            </div>
        </div>
    );
};
