import axios from 'axios';
import { environment } from './environment';

export const PriceServices =  {
    getSellerPriceByProvince(province) {
      return axios({
          headers: { 'Content-Type': 'application/json'},
          method: 'get',
          params: {
            province: province
          },
          url: `${environment}/seller/identical-price`,
        })
      .then((res) => res.data);
    },
    getLessorPriceByProvince(province) {
      return axios({
        headers: { 'Content-Type': 'application/json'},
        method: 'get',
        params: {
          province: province
        },
        url: `${environment}/lessor/identical-price`,
      })
    .then((res) => res.data);
    }
}

