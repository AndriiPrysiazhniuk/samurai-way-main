import {ActionsType, PostData, ProfilePageDataType} from "../state/store";

const initialState: ProfilePageDataType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    imageSrc: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
    newPostText: ''
} as ProfilePageDataType;
export const profileReducer = (state: ProfilePageDataType = initialState, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            } as PostData

            return {...state, posts: [newPost, ...state.posts], newPostText: ''};
        case 'UPDATE-POST-TEXT':
            const copyState = {...state}
            copyState.newPostText = action.newPostMessage

            return copyState

        default:
            return state
    }
}