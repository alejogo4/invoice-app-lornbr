import {createReducer} from '@reduxjs/toolkit';
import {
  addInvoice,
  fetchInvoices,
  IInvoice,
  removeInvoice,
  updateInvoice,
} from '../actions/invoiceActions';
import initialInvoices from './data.json';

const initialState: IInvoice[] = initialInvoices;

const invoiceReducer = createReducer(initialState, builder => {
  builder
    .addCase(addInvoice, (state, action) => {
      console.log('Intooooo......');
      return [...state, action.payload];
    })
    .addCase(removeInvoice, (state, action) => {
      return state.filter(invoice => invoice.id !== action.payload);
    })
    .addCase(updateInvoice, (state, action) => {
      const index = state.findIndex(
        invoice => invoice.id === action.payload.id,
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    })
    .addCase(fetchInvoices, (state, action) => {
      return action.payload;
    });
});

export default invoiceReducer;
