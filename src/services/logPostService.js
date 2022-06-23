import axios from 'axios';
import { environment_v2 } from './environment';

export const LogPostService = {
  getLogPost() {
    return axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'get',
      url: `${environment_v2}/log-post/get-log-post`,
    })
      .then((res) => res.data);
  },
}