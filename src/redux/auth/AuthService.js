import { API } from "../../config/API";
// import jwt_decode from 'jwt-decode';
// import AuthHeader from "./AuthHeader";

const loginFunc = (email, password) => {
    return API.post('/login', {
        email,
        password
    })
    .then((response) => {
        if(response.data.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.data));
        }

        return response.data.data;
    });
};

const logoutFunc = () => {
    localStorage.removeItem('user');
};

const AuthService = {
    loginFunc,
    logoutFunc
}

export default AuthService