import axios from 'axios';
import { environment } from './environment';

export const ProductService =  {
    getLowHouse(data) {
      data = Object.fromEntries(Object.entries(data).filter(([_, option]) => !!option));
      return axios({
          headers: { 'Content-Type': 'application/json'},
          method: 'get',
          params: data,
          url: `${environment}/seller/rate-house`,
        })
      .then((res) => res.data);
    },

    getRatePercent() {
      return axios({
        headers: { 'Content-Type': 'application/json'},
        method: 'get',
        url: `${environment}/seller/area-percent`,
      })
    .then((res) => res.data);
    }
}

