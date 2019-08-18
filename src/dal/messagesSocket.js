import { client } from "./socket";

let updateMessageWindow = null;

client.on("updateChat", id=>{
    updateMessageWindow(id);
})

const messageSocket = {
    addMessage(messageData){
        client.emit("addMessage", messageData);
    },
    joinMessageWindow(id){
        client.emit("joinMessageWindow" , id);
    },
    leaveMessageWindow(){
        client.emit("leaveMessageWindow");
    },
    watchMessageWindow(cb){
        if(!updateMessageWindow){
            updateMessageWindow = cb;
        }
    }
}


export {
    messageSocket
}