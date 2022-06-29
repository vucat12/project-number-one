import axios from 'axios';
import { environment_v2 } from './environment';

export const UserServices = {
  getAllUsers(isAdmin) {

    const userId = localStorage.getItem('user_id');

    console.log("====", userId)


    return axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'get',
      url: `${environment_v2}/user/get-all-user`,
      params: {
        user_id: !isAdmin ? userId : undefined
      },
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