import axios from 'axios';
import { environment } from './environment';

export const PriceServices =  {
    getSellerPriceByProvince(province, district) {
      return axios({
          headers: { 'Content-Type': 'application/json'},
          method: 'get',
          params: {
            province: province,
            district: district
          },
          url: `${environment}/seller/identical-price`,
        })
      .then((res) => res.data);
    },
    getLessorPriceByProvince(province, district) {
      return axios({
        headers: { 'Content-Type': 'application/json'},
        method: 'get',
        params: {
          province: province,
          district: district
        },
        url: `${environment}/lessor/identical-price`,
      })
    .then((res) => res.data);
    }
}

