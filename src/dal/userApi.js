import api from "./api";

const userAPI = {
    getUserProfile(id, companionId){
        return api(
            `
                query {
                    getUser(id: ${id}){
                        id
                        name
                        surname
                        city
                        age
                        status
                        img
                        imgId
                        isOnline
                        haveMessageList(companionId: ${companionId})
                        haveFriends(companionId: ${companionId})
                        friendsLimited{
                            id
                            name
                            img
                        }
                        groupsLimited{
                            id
                            name
                            img
                        }
                        postsLimited{
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
        ).then(result=>{
            return result.data.data.getUser;
        })
    },
    getUsersProfiles(){
        return api(
            `
                query{
                    getAllUsers{
                    id
                    name
                    surname
                    img
                    }
                }
            `
        ).then(result=>{
            return result.data.data.getAllUsers
        })
    }
}

export {
    userAPI
}