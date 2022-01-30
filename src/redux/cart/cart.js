import image from '../../images/image-product-1-thumbnail.jpg';

const ADD_ITEM = 'cart/addBook';

const initialState = [];

export const addItemToCart = (payload) => ({
  type: ADD_ITEM,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
