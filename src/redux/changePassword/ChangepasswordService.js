import { API } from "../../config/API"

const changePasswordFunc = (email, username, oldpassword, newpassword) => {
    return API.post('/change-passwor',{
        email,
        username,
        oldpassword,
        newpassword
    }).then((response) => response.data.data)
}

export default changePasswordFunc