import {addPostAC, updatePostTextAC} from "../../../../redux/state/store";
import {MyPosts} from "./MyPosts/MyPosts";
import React from "react";
import {StoreContext} from "../../../StoreContext";

export const MyPostsContainer: React.FC = () => {
    return <StoreContext.Consumer>
        {(store: any) => {
            const state = store.getState()
            const addPostHandler = () => {
                store.dispatch(addPostAC())
            }
            const updatePostTextHandler = (text: string) => {
                store.dispatch(updatePostTextAC(text))
            }
            return <MyPosts posts={state.profile.posts}
                            addPost={addPostHandler}
                            updatePostText={updatePostTextHandler}
                            postValue={state.profile.postValue}/>
        }}
    </StoreContext.Consumer>
};

