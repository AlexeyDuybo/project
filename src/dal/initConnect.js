import { client } from "./socket";

const initConnect = id=> {

    

    client.emit("auth", id);

    client.on("clientConnected", date=> {

    });
}

export {
    initConnect
}
