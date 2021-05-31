const initialState = {
    isOpen: true,
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
        };
      case 'VIEW_DATA_DETAIL':
        state = {...state, action};
        return {
          ...state
        }
  
      default:
        return state;
    }
  };