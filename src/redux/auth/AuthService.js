import { API } from "../../config/API";

const loginFunc = async(userData) => {
    const response = await API.post('/login', userData)
    return response.data
}

const AuthService = {
    loginFunc
}

export default AuthService