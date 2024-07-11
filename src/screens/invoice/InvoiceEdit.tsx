import Paragraph from '@src/components/paragraph/paragraph';
import {useAppSelector} from '@src/store';
import {styled} from 'nativewind';
import React from 'react';
import {ScrollView, View} from 'react-native';
import GoBack from './components/goBack/goBack';
import InvoiceForm from './components/invoiceForm/invoiceForm';

const StyledView = styled(View);

const InvoiceEdit = () => {
  const selectedInvoice = useAppSelector(
    state => state.invoices.selectedInvoice,
  );

  return (
    <StyledView className="flex bg-dark-200">
      <GoBack />
      <ScrollView style={{marginBottom: 50}}>
        <Paragraph bold addClass="text-3xl ml-4 mb-2">
          Edit #{selectedInvoice?.id}
        </Paragraph>
        {selectedInvoice && (
          <InvoiceForm editing={true} initialData={selectedInvoice} />
        )}
      </ScrollView>
    </StyledView>
  );
};

export default InvoiceEdit;
