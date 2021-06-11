import axios from 'axios';
import { environment } from './environment';


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
            }
        });
      },
}



