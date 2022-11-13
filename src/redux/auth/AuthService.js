import { API } from "../../config/API";
import jwt_decode from 'jwt-decode';

const loginFunc = async(userData) => {
    const response = await API.post('/login', userData)
    
    return response.data
}

const AuthService = {
    loginFunc
}

export default AuthService