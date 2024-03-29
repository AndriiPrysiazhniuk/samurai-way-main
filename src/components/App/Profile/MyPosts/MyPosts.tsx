import React, {ChangeEvent, createRef, RefObject} from 'react';
import classes from "./MyPosts.module.css";
// import {Post, PropsPostType} from "./Post/Post";
import {TextField} from "../../../TextField/TextField";
import {Post} from "./Post/Post";
import {PostData} from "../../../../redux/state/state";


type MyPostsPropsType = {
    posts: Array<PostData>
    addPost: (postMessage: string) => void
    updatePostTest: (newPostMessage: string) => void
    postValue: string
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts,  addPost,updatePostTest, postValue}) => {

    // const mappedPosts = posts.map(el => {
    //     return <Post key={el.id} id={el.id} likesCount={el.likesCount} message={el.message}/>
    // })

    const newPost: RefObject<any> = createRef()

    const addPostHandler = () => {
        addPost(newPost.current.value)

        updatePostTest('')
    }
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement> ) => {
        updatePostTest(e.currentTarget.value)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeHandler} ref={newPost}  value={postValue}/>
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

