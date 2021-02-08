import axios from 'axios'


const signInReq = async (userName, password) => {

    return await axios({
        method: 'POST',
        url: 'http://api.fumcbm.tk/v1/rest-auth/login/',

        data: {
            username: `${userName}`,
            password: `${password}`
        }
    })

}
const signoutReq = async () => {

    return await axios({
        method: 'get',
        url: 'http://api.fumcbm.tk/v1/rest-auth/logout',
    })

}




export { signInReq,signoutReq } 
