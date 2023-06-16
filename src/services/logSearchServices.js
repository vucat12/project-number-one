import axios from 'axios';
import { environment_v2 } from './environment';

export const LogSearchService = {
  getLogSearch(userId) {
    return axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'get',
      url: `${environment_v2}/log-search/get-log-search?user_id=${userId}`,
    })
      .then((res) => res.data);
  },
  addLogSearch(data) {
    return axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      data: { ...data, user_id: localStorage.getItem('userId') },
      url: `${environment_v2}/log-search/add-log-search`,
    })
      .then((res) => res.data);
  }
}