import {combineReducers} from '@reduxjs/toolkit';
import invoiceReducer from './invoiceReducer';

const rootReducer = combineReducers({
  invoices: invoiceReducer,
});

export default rootReducer;
