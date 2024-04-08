import {addPostAC, PropsDataStateType, updatePostTextAC} from "../../../../redux/state/store";
import {MyPosts, MyPostsPropsType} from "./MyPosts/MyPosts";
import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";

const mapStateToProps = (state: any) => {
    console.log('state', state)
    return {
        posts: state.profile.posts,
        postValue: state.profile.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updatePostText: (newMessage: string) => {
            dispatch(updatePostTextAC(newMessage))
        }

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
