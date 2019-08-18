import { client } from "./socket";

let callback = null;

const setCB = cb=> {
    if(!callback && cb){
        callback = cb;
    }
}

const joinProfile = id => {
    client.emit("joinProfile", id);
}
const leaveProfile = () => {
    client.emit("leaveProfile");
}

client.on("requestSendOk", ()=>{
    callback();
})
client.on("cancelRequestOk", ()=>{
    callback();
})

client.on("removeFriendOk", ()=> {
    callback();
})
export {
    joinProfile,
    leaveProfile,
    setCB
}