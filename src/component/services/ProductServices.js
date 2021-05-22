import axios from 'axios';
import { environment } from './environment';

export default class ProductService {
    
    getLowHouse(data) {
      data = Object.fromEntries(Object.entries(data).filter(([_, option]) => !!option));
      return axios({
          headers: { 'Content-Type': 'application/json'},
          method: 'get',
          params: data,
          url: `${environment}/rate-house`,
        })
      .then((res) => res.data);
    }

    getRatePercent() {
      return axios({
        headers: { 'Content-Type': 'application/json'},
        method: 'get',
        url: `${environment}/area-percent`,
      })
    .then((res) => res.data);
    }
}

