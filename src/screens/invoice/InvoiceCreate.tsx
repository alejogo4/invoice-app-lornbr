import {styled} from 'nativewind';
import React from 'react';
import {ScrollView, View} from 'react-native';
import InvoiceForm from './components/invoiceForm/invoiceForm';

const StyledView = styled(View);

const InvoiceCreate = () => {
  return (
    <StyledView className="flex bg-dark-200">
      <ScrollView>
        <InvoiceForm />
      </ScrollView>
    </StyledView>
  );
};

export default InvoiceCreate;
