import { client } from "./socket";



const addToFriends = (user1, user2)=> {
    client.emit("addToFriends", {user1, user2});
}

const sendRequest = (user1, user2)=> {
    client.emit("sendRequest", {user1, user2});
}

const cancelRequest = (user1, user2)=> {
    client.emit("cancelRequest", {user1, user2});
}

const removeFriend = (user1, user2)=> {
    client.emit("removeFriend", {user1, user2});
}

export {
    addToFriends,
    sendRequest,
    cancelRequest,
    removeFriend
}