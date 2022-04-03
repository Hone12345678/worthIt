// auth util used to handle JSON Web Token
//decodes token and extracts user data

import decode from 'jwt-decode';

class AuthService {
    //getting user data associated with token
    getProfile() {
        return decode(this.getToken());
    }

    //confirms is user is logged in and if the token is valid
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    //checking for expired token
    isTokenExpired(token) {
        try {
            const decode = decode(token);
            if (decode.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    // Token LocalStorage

    //returning token from localStorage
    getToken() {
        return localStorage.getItem('id_token')
    }
    //sets token in local storage
    login(idToken) {
        localStorage.setItem('id_token', idToken);
    }
    //clears token out of local storage and reloads page
    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new AuthService();