export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      payload: product,
    };
  };

export const viewDataDetail = (data) => {
  return {
    type: 'VIEW_DATA_DETAIL',
    data: data,
  };
}