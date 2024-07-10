import {useNavigation} from '@react-navigation/native';
import Card from '@src/components/card/card';
import Paragraph from '@src/components/paragraph/paragraph';
import {IInvoice} from '@src/store/actions/invoiceActions';
import {formatDate} from '@src/utils/date';
import {styled} from 'nativewind';
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';

const StyledView = styled(View);

interface InvoiceProps {
  invoices: IInvoice[];
}

const Invoices: React.FC<InvoiceProps> = ({invoices}) => {
  const navigation = useNavigation();

  const renderItem = ({item}: {item: IInvoice}) => (
    <TouchableOpacity onPress={() => navigation.navigate('InvoiceCreate')}>
      <Card style="mb-4 mx-5">
        <StyledView className="flex flex-row justify-between mb-2">
          <Paragraph bold>#{item.id}</Paragraph>
          <Paragraph size="small">{item.clientName}</Paragraph>
        </StyledView>
        <StyledView className="flex flex-row justify-between">
          <StyledView className="flex">
            <Paragraph size="small">
              Due {formatDate(item.paymentDue)}
            </Paragraph>
            <Paragraph bold>$ {item?.total}</Paragraph>
          </StyledView>
          <Paragraph>{item.status}</Paragraph>
        </StyledView>
      </Card>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={invoices}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{paddingTop: 12}}
    />
  );
};

export default Invoices;
