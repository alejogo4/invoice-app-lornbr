import Card from '@src/components/card/card';
import {IInvoice} from '@src/store/actions/invoiceActions';
import React from 'react';
import {FlatList, Text} from 'react-native';

interface InvoiceProps {
  invoices: IInvoice[];
}

const Invoices: React.FC<InvoiceProps> = ({invoices}) => {
  const renderItem = ({item}: {item: IInvoice}) => (
    <Card>
      <Text>{item.clientName}</Text>
    </Card>
  );

  return (
    <FlatList
      data={invoices}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Invoices;
