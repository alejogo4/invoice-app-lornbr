import {useAppSelector} from '@src/store';
import {styled} from 'nativewind';
import React from 'react';
import {View} from 'react-native';
import Invoices from './components/invoices/invoices';

const StyledView = styled(View);

const InvoiceList = () => {
  const invoices = useAppSelector(state => state.invoices);

  return (
    <StyledView className="flex-1 bg-dark-200">
      <Invoices invoices={invoices} />
    </StyledView>
  );
};

export default InvoiceList;
