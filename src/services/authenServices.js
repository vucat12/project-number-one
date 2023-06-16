import axios from 'axios';
import { environment, environment_v2 } from './environment';
import jwt_decode from "jwt-decode";
import { Base64 } from 'js-base64';

export const authenServices = {
    signIn(data) {
        return axios({
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: data,
            url: `${environment}/login`,
        })
            .then((res) => {
                if (res) {
                    localStorage.setItem('token_authen', res.data);
                    return res;
                }
            });
    },
    signUp(data) {
        return axios({
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: data,
            url: `${environment}/register`,
        })
            .then((res) => res);
    },
    signInVersion2(data) {
        return axios({
            headers: {
                'Authorization': 'Basic ' + Base64.encode(data.username + ":" + data.password)
            },
            method: 'post',
            data: data,
            url: `${environment_v2}/user/login`,
        })
            .then((res) => {
                localStorage.setItem('userId', res.data.user_id);
            });
    },
    signUpVersion2(data) {
        return axios({
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            data: data,
            url: `${environment_v2}/user/create`,
        })
            .then((res) => res);
    }
}

export const includeAuthen = () => {
    const token = localStorage.getItem('token_authen');
    return token;
}

export const informationUser = () => {
    if (includeAuthen()) return jwt_decode(includeAuthen());
    else return 0;
}

