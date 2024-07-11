import {createAction} from '@reduxjs/toolkit';

export interface IAddress {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface IItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface IInvoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: IAddress;
  clientAddress: IAddress;
  items: IItem[];
  total: number;
}

export const addInvoice = createAction<IInvoice>('invoices/add-invoice');
export const removeInvoice = createAction<string>('invoices/remove-invoice');
export const updateInvoice = createAction<IInvoice>('invoices/update-invoice');
export const fetchInvoices = createAction<IInvoice[]>(
  'invoices/fetch-invoices',
);
export const getInvoiceById = createAction<string | null>(
  'invoice/getInvoiceById',
);
export const getInvoiceByStatus = createAction<string | null>(
  'invoice/getInvoiceByStatus',
);
