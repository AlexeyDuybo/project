import api from "./api";


const friendsAPI = {
    getFriends(id){
        return api(
            `
            query {
                getUser(id: ${id}){
                    friends {
                        id
                        name
                        surname
                        isOnline
                        img
                    }
                }
            }
            `
        ).then(result=>{
            return result.data.data.getUser.friends;
        })
    }
}

export { friendsAPI };
