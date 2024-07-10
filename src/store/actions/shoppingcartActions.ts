import {createAction} from '@reduxjs/toolkit';
import {ImageSourcePropType} from 'react-native';

export interface IProduct {
  id: number;
  title: string;
  price: string;
  image: ImageSourcePropType;
}

export const addProduct = createAction<IProduct>('shoppingcart/add-product');
export const removeProduct = createAction<number>(
  'shoppingcart/remove-product',
);
