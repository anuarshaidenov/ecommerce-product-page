const ADD_ITEM = 'cart/addCartItem';
const REMOVE_ITEM = 'cart/removeCartItem';

const initialState = [];

export const addItemToCart = (payload) => ({
  type: ADD_ITEM,
  payload,
});

export const removeItemFromCart = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
