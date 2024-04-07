import {ActionsType, PostData, ProfilePageDataType} from "../state/state";

export const profileReducer = (state: ProfilePageDataType, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-POST':

            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost);
            state.newPostText = ''

            return state
        case 'UPDATE-POST-TEXT':

            state.newPostText = action.newPostMessage;

            return state
        default:
            return state
    }
}