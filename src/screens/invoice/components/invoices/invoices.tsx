import {useNavigation} from '@react-navigation/native';
import AddIcon from '@src/assets/icons/icon-plus.svg';
import IconButton from '@src/components/button/button';
import Card from '@src/components/card/card';
import Paragraph from '@src/components/paragraph/paragraph';
import {getInvoiceById, IInvoice} from '@src/store/actions/invoiceActions';
import {formatDate} from '@src/utils/date';
import {styled} from 'nativewind';
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';

const StyledView = styled(View);

interface InvoiceProps {
  invoices: IInvoice[];
}

const Invoices: React.FC<InvoiceProps> = ({invoices}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleOpenDetail = (item: IInvoice) => {
    dispatch(getInvoiceById(item.id));
    navigation.navigate('InvoiceDetail', {id: item.id});
  };

  const handleNewInvoice = () => {
    navigation.navigate('InvoiceCreate');
    dispatch(getInvoiceById(null));
  };

  const renderItem = ({item}: {item: IInvoice}) => (
    <TouchableOpacity onPress={() => handleOpenDetail(item)}>
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
    <>
      <StyledView className="flex flex-row px-6 py-6 justify-between">
        <StyledView className="flex">
          <Paragraph bold size="large" color="light-100">
            Invoices
          </Paragraph>
          <Paragraph bold size="small" color="light-100">
            {invoices.length} invoices
          </Paragraph>
        </StyledView>
        <IconButton
          icon={
            <StyledView className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
              <AddIcon />
            </StyledView>
          }
          title="New"
          onPress={handleNewInvoice}
          addClass="bg-primary"
        />
      </StyledView>
      <FlatList
        data={invoices}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{paddingTop: 12}}
      />
    </>
  );
};

export default Invoices;
