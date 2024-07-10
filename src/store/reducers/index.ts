import {combineReducers} from '@reduxjs/toolkit';
import shoppingcartReducer from './shoppingcartReducer';

const rootReducer = combineReducers({
  shoppingcart: shoppingcartReducer,
});

export default rootReducer;
