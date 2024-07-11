import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {
  addInvoice,
  fetchInvoices,
  getInvoiceById,
  IInvoice,
  removeInvoice,
  updateInvoice,
} from '../actions/invoiceActions';
import initialInvoices from './data.json';

const initialState: {invoices: IInvoice[]; selectedInvoice: IInvoice | null} = {
  invoices: initialInvoices,
  selectedInvoice: null,
};

const invoiceReducer = createReducer(initialState, builder => {
  builder
    .addCase(addInvoice, (state, action: PayloadAction<IInvoice>) => {
      state.invoices.push(action.payload);
    })
    .addCase(removeInvoice, (state, action: PayloadAction<string>) => {
      state.invoices = state.invoices.filter(
        invoice => invoice.id !== action.payload,
      );
    })
    .addCase(updateInvoice, (state, action: PayloadAction<IInvoice>) => {
      const index = state.invoices.findIndex(
        invoice => invoice.id === action.payload.id,
      );
      if (index !== -1) {
        state.invoices[index] = action.payload;
      }
    })
    .addCase(fetchInvoices, (state, action: PayloadAction<IInvoice[]>) => {
      state.invoices = action.payload;
    })
    .addCase(getInvoiceById, (state, action: PayloadAction<string | null>) => {
      state.selectedInvoice = action.payload
        ? state.invoices.find(invoice => invoice.id === action.payload) || null
        : null;
    });
});

export default invoiceReducer;
