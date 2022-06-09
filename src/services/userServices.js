import axios from 'axios';
import { environment_v2 } from './environment';

export const UserServices = {
  getAllUserManagement() {
    return axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'get',
      url: `${environment_v2}/get-all-user`,
    })
      .then((res) => res.data);
  }
}