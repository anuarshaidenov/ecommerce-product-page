import image from '../../images/image-product-1.jpg';

const ADD_ITEM = 'cart/addBook';

const initialState = [
  {
    id: '111',
    title: 'shoe',
    quantity: 1,
    price: 125,
    imageUrl: image,
  },
];

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
