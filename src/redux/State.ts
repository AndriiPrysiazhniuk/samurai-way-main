import {v1} from "uuid";

export let state = {
    headerData: {
        imageSrc: "https://lh3.googleusercontent.com/ogw/AAEL6sh1y1z3phgTVDjHbh3jAExAz1iOiNDKqWam6iub=s32-c-mo",
        logoText: "it - incubator"
    },
    profileInfoState: {
        srcBackImg: 'https://www.treehugger.com/thmb/MICZ1IMA4HP5-LKwf6dTE9uCZ4U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1247807601-14960e5e6ba04ce6b4d8d211b5d74dd4.jpg',
        srcAvaImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3FEmPBlpiCLAA382CDq1YNmA6gpICLmcWQ&usqp=CAU'
    },
    DialogItemData: [
        {
            id: v1(),
            name: 'Andrii',
            src: '/Dialogs/Andrii-id'
        },
        {
            id: v1(),
            name: 'Vitalii',
            src: '/Dialogs/Vitalii-id'
        },
        {
            id: v1(),
            name: 'Sasha',
            src: '/Dialogs/Sasha-id'
        },
        {
            id: v1(),
            name: 'Serhii',
            src: '/Dialogs/Serhii-id'
        },
        {
            id: v1(),
            name: 'Liuda',
            src: '/Dialogs/Liuda-id'
        },
        {
            id: v1(),
            name: 'Natasha',
            src: '/Dialogs/Natasha-id'
        },
        {
            id: v1(),
            name: 'Arina',
            src: '/Dialogs/Arina-id'
        }
    ],
    messagesState: [
        {
            id: v1(),
            sms: 'hello, buddy'
        },
        {
            id: v1(),
            sms: 'hello, how is your education at incubator'
        },
        {
            id: v1(),
            sms: 'Yo! I am good'
        },
    ],
    postState: [
        {
            id: v1(),
            postTitle: 'new post 1'
        },
        {
            id: v1(),
            postTitle: 'post 2'
        }
    ],
    navbarData: [
        {
            srcTo: '/Profile',
            menuItemTitle: 'Profile'
        },

        {
            srcTo: '/Dialogs',
            menuItemTitle: 'Messages'
        },
        {
            srcTo: '/News',
            menuItemTitle: 'News'
        },
        {
            srcTo: '/Music',
            menuItemTitle: 'Music'
        },
        {
            srcTo: '/Settings',
            menuItemTitle: 'Settings'
        }
    ]
}