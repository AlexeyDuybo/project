import axios from "axios";

const BASE_URL = "http://localhost:3005/graphql";

export default userQuery=> {
    return axios({
        url: BASE_URL,
        method: "POST",
        data: {
            query: userQuery
        }
    })
}