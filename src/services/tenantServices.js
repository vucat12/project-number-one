import axios from 'axios';
import { environment } from './environment';

export const TenantService =  {
    getLowHouse(data) {
      data = Object.fromEntries(Object.entries(data).filter(([_, option]) => !!option));
      return axios({
          headers: { 'Content-Type': 'application/json'},
          method: 'get',
          params: data,
          url: `${environment}/tenant/rate-house`,
        })
      .then((res) => res.data);
    },

    getRatePercent() {
      return axios({
        headers: { 'Content-Type': 'application/json'},
        method: 'get',
        url: `${environment}/tenant/area-percent`,
      })
    .then((res) => res.data);
    },

    getPostDetail(link) {
      return axios({
        headers: { 'Content-Type': 'application/json'},
        method: 'get',
        url: `${environment}/get-data-post?link=${link}`
      }).then((res => res))
    }
}

