import axios from 'axios';
import { environment } from './environment';
import jwt_decode from "jwt-decode";

export const authenServices =  {
    signIn(data) {
        return axios({
            headers: { 'Content-Type': 'application/json'},
            method: 'post',
            data: data,
            url: `${environment}/login`,
          })
        .then((res) => {
            if(res) {
                localStorage.setItem('token_authen', res.data);
                return res;
            }
        });
    },
    signUp(data) {
        return axios({
            headers: { 'Content-Type': 'application/json'},
            method: 'post',
            data: data,
            url: `${environment}/register`,
          })
        .then((res) => res);
    },

}

export const includeAuthen = () => {
    const token = localStorage.getItem('token_authen');
    return token;
}

export const informationUser = () => {
    if(includeAuthen()) return jwt_decode(includeAuthen());
    else return 0;
}

