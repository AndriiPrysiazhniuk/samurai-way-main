import React, {ChangeEvent, createRef, RefObject} from 'react';
import classes from "./MyPosts.module.css";
// import {Post, PropsPostType} from "./Post/Post";
import {TextField} from "../../../TextField/TextField";
import {Post} from "./Post/Post";
import {ActionsType, addPostAC, PostData, updatePostTextAC} from "../../../../redux/state/state";


type MyPostsPropsType = {
    posts: Array<PostData>
    dispatch: (action: ActionsType) => void
    postValue: string
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, dispatch, postValue}) => {

    // const mappedPosts = posts.map(el => {
    //     return <Post key={el.id} id={el.id} likesCount={el.likesCount} message={el.message}/>
    // })

    const newPost: RefObject<any> = createRef()

    const addPostHandler = () => {

        dispatch(addPostAC())
    }
    const onChangeHandler = () => {

        const text = newPost.current.value
        dispatch(updatePostTextAC(text))
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} ref={newPost} value={postValue}/>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div>
                {posts.map(el => {
                    return <Post key={el.id} id={el.id} likesCount={el.likesCount} message={el.message}/>
                })}
            </div>
        </div>
    );
};

