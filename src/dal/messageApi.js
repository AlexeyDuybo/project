import api from "./api";

const messageAPI = {
    getMessagesList(userId){
        return api(
            `
                query{
                    userMessageList(userId: ${userId}){
                        id
                        companion(userId: ${userId}){
                            id
                            name
                            surname
                            img
                        }
                        message{
                            id
                            text
                            date
                            author{
                                id
                                name
                                surname
                                img
                            }
                        }
                    }
                }

            `
        ).then( result=> result.data.data.userMessageList );
    },
    getMessagesWithCompanion(id){
        return api(
            `
                query{
                    userMessagesWithCompanion(messagesId: ${id}){
                        id
                        text
                        date
                            author{
                                name
                                surname
                                id
                                img
                            }
                    }
                }  
            `
        ).then(result=> result.data.data.userMessagesWithCompanion)
    }
}

export {
    messageAPI
}