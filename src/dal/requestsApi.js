import API from "./api";

const requestsAPI = {
    getRequests(id){
        return API(
            `
                query {
                    getUser(id: ${id}){
                        requests{
                            name
                            surname
                            id
                            img
                          }
                    }
                }
            `
        ).then(result=> result.data.data.getUser.requests)
    }
}

export {
    requestsAPI
}