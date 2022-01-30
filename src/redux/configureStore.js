import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import cartReducer from './cart/cart';

const combinedReducers = combineReducers({
  cart: cartReducer,
});

const middlewares = [logger];

const store = createStore(combinedReducers, applyMiddleware(...middlewares));

export default store;
