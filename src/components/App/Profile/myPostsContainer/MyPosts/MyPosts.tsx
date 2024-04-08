import React, {createRef, RefObject} from 'react';
import {PostData} from "../../../../../redux/state/store";
import {Post} from '../../myPostsContainer/MyPosts/Post/Post';


export type MyPostsPropsType = {
    posts: Array<PostData>
    postValue: string
    updatePostText: (text: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<MyPostsPropsType> = ({posts, postValue, addPost, updatePostText}) => {

    const newPost: RefObject<any> = createRef()

    const addPostHandler = () => {
        addPost()

    }
    const onChangeHandler = () => {
        const text = newPost.current.value
        updatePostText(text)
    }
    console.log('posts', posts)
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

