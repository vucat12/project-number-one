import axios from 'axios';
import { environment_v2 } from './environment';

export const RecommendPostService = {
  getRecommendPost(userId, type) {
    return axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'get',
      url: `${environment_v2}/recommend-post/get-recommend-post/${userId}?real_estate_type=${type}`,
    })
      .then((res) => res.data);
  },
}