import { client } from "./socket";

let callback = null;

const createMessageList = (user1, user2, cb)=> {

    if(!callback){
        callback = cb;
    }

    client.emit("createMessageList", {user1, user2});

    client.on("createMessageListResult", newMessageListId=>{
        callback(newMessageListId);
    });
}

export {
    createMessageList
}