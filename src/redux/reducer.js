const initialState = {
    isOpen: true,
    products: [
      {
        id: '1a',
        name: 'Macbook Pro',
        quantity: 3,
      },
      {
        id: '2b',
        name: 'Iphone X',
        quantity: 6,
      },
      {
        id: '3c',
        name: 'Apple Watch',
        quantity: 4,
      },
    ],
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
        };
      case 'VIEW_DATA_DETAIL':
        state = {...state, action};
        console.log("VIEW_DATA_DETAIL========", state);

        return {
          ...state
        }
  
      default:
        return state;
    }
  };