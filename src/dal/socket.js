import openSocket from "socket.io-client";

const endPoint = "http://localhost:3005";

const client = openSocket(endPoint);


export {
    client
}