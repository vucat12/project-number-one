import axios from 'axios';
import { environment_v2 } from './environment';

export const RecommendPostService = {
  getRecommendPost(userId) {
    return axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'get',
      url: `${environment_v2}/recommend-post/get-recommend-post/${userId}`,
    })
      .then((res) => res.data);
  },
}