import axios from 'axios';
import { environment_v2 } from './environment';

export const UserServices = {
  getAllUsers() {
    return axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'get',
      url: `${environment_v2}/user/get-all-user`,
    })
      .then((res) => res.data);
  },
  editUser(data) {
    return axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      data: data,
      url: `${environment_v2}/user/update`,
    })
      .then((res) => res);
  }
}