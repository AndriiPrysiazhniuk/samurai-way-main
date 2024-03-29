import {rerenderEntireTree} from "../../render";

export type PostData = {
    id: number
    message: string
    likesCount: number
}
type DialogsData = {
    id: number
    name: string
}
type MessagesData = {
    id: number
    message: string
}
export type DialogsDataPageType = {
    dialogs: Array<DialogsData>
    messages: Array<MessagesData>
}
export type ProfilePageDataType = {
    posts: Array<PostData>
    imageSrc: string
    newPostValue: string
}
export type ProductCardType = {
    id: number
    src: string
    title: string
    description: string
    price: number
}

type SidebarPageDataType = {}

export type PropsDataStateType = {
    profilePage: ProfilePageDataType
    dialogsPage: DialogsDataPageType
    products: Array<ProductCardType>
    sidebar: SidebarPageDataType
}
export const state: PropsDataStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        imageSrc: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
        newPostValue: 'it-kamasutra'
    },
    products: [
        {
            id: 1,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'iPhone X',
            description: 'A 5.5" beast of processing power from Apple',
            price: 999
        },
        {
            id: 2,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Samsung S9',
            description: 'The most powerful Android device on the planet',
            price: 789
        },
        {
            id: 3,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Pixel 2',
            description: 'The perfect phone for a clean Android experience',
            price: 876
        },
        {
            id: 4,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Oneplus 6',
            description: 'The latest from a long line of affordable premium devices by Oneplus',
            price: 799
        },
        {
            id: 5,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'iPhone 8',
            description: 'The little, less-stylish brother of the iPhone X.',
            price: 789
        },
        {
            id: 6,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'LG G7 ThinQ',
            description: 'The latest and most powerful smartphone from LG.',
            price: 789
        },
        {
            id: 7,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Pixel 2',
            description: 'The perfect phone for a clean Android experience',
            price: 876
        },
        {
            id: 8,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Huawei Mate 10 Pro',
            description: 'The most powerful Android device yet from Huawei',
            price: 799
        },
        {
            id: 9,
            src: 'https://hk-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/p/r/probook_440_g8_2_.png',
            title: 'Oneplus 6',
            description: 'The latest from a long line of affordable premium devices by Oneplus',
            price: 799
        }
    ],
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {}
}


export let addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.unshift(newPost);
    rerenderEntireTree(state);
}
export let updatePostTest = (newPostMessage: string) => {
    state.profilePage.newPostValue = newPostMessage;
    rerenderEntireTree(state);
}
