import axios from 'axios';
import { environment, environment_v2 } from './environment';

export const AiService = {
  getAiGuessPrice(data) {
    return axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      data: {"list_real_estate": data},
      url: `${environment_v2}/guess-price/get-guess-price`,
    })
      .then((res) => res.data);
  },
  getListAreasAndPrices(data) {
    data = Object.fromEntries(Object.entries(data).filter(([_, option]) => !!option));
    return axios({
      headers: { 'Content-Type': 'application/json' },
      method: 'get',
      params: data,
      url: `${environment}/seller/list-price-area`,
    })
      .then((res) => res.data);
  },

}

