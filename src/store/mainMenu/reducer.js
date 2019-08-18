const initialState = {
    menuLinks: [
        {
            id: 2,
            title: "Profile",
            path: "/profile/"
        },
        {
            id: 3,
            title: "Messages",
            path: "/messages/"
        },
        {
            id: 1,
            title: "Friends",
            path: "/friends/"
        },
        {
            id: 4,
            title: "Requests",
            path: "/requests/"
        }
    ]
}

export default (state = initialState, action)=> {
    return state;
}