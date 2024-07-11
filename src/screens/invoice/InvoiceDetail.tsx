import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import IconButton from '@src/components/button/button';
import Card from '@src/components/card/card';
import Paragraph from '@src/components/paragraph/paragraph';
import Status from '@src/components/status/status';
import {useAppSelector} from '@src/store';
import {removeInvoice, updateInvoice} from '@src/store/actions/invoiceActions';
import {RootStackParamList} from '@src/types/InvoiceRoute';
import {styled} from 'nativewind';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import GoBack from './components/goBack/goBack';

const StyledView = styled(View);

type InvoiceDetailNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'InvoiceDetail'
>;

type InvoiceDetailRouteProp = RouteProp<RootStackParamList, 'InvoiceDetail'>;

type InvoiceDetailProps = {
  navigation: InvoiceDetailNavigationProp;
  route: InvoiceDetailRouteProp;
};

const InvoiceDetail: React.FC<InvoiceDetailProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const selectedInvoice = useAppSelector(
    state => state.invoices.selectedInvoice,
  );

  const onHandleDeteInvoice = () => {
    dispatch(removeInvoice(selectedInvoice?.id ?? '0'));
    navigation.replace('Invoices');
  };

  const onHandleEditInvoice = () => {
    navigation.navigate('InvoiceEdit');
  };

  const onHandleMarkAsPaid = () => {
    if (selectedInvoice) {
      const invoice = {...selectedInvoice, status: 'paid'};
      dispatch(updateInvoice(invoice));
    }
    navigation.replace('Invoices');
  };

  return (
    <StyledView className="flex-1 bg-dark-200">
      <GoBack />
      <ScrollView>
        <Card style="mb-4 mx-5 mt-4">
          <StyledView className="flex flex-row items-center justify-between mb-2">
            <Paragraph size="small">Status</Paragraph>
            <Status status={selectedInvoice?.status || ''} />
          </StyledView>
        </Card>
        <Card style="mb-4 mx-5">
          <StyledView className="flex justify-between mb-2">
            <Paragraph bold>#{selectedInvoice?.id}</Paragraph>
            <Paragraph size="small">{selectedInvoice?.description}</Paragraph>
          </StyledView>
          <StyledView className="flex justify-between mb-2 mt-2">
            <Paragraph size="small">
              {selectedInvoice?.senderAddress.street}
            </Paragraph>
            <Paragraph size="small">
              {selectedInvoice?.senderAddress.city}
            </Paragraph>
            <Paragraph size="small">
              {selectedInvoice?.senderAddress.postCode}
            </Paragraph>
            <Paragraph size="small">
              {selectedInvoice?.senderAddress.country}
            </Paragraph>
          </StyledView>

          <Card style="bg-light-500 p-0 mt-8">
            {selectedInvoice?.items.map(item => (
              <Card style="bg-transparent" key={item.name}>
                <StyledView className="flex flex-row justify-between items-center">
                  <StyledView className="flex ">
                    <Paragraph bold>{item.name}</Paragraph>
                    <Paragraph>
                      {item.quantity} x {item.price}
                    </Paragraph>
                  </StyledView>
                  <Paragraph bold size="large">
                    ${item.total}
                  </Paragraph>
                </StyledView>
              </Card>
            ))}
            <StyledView className="flex flex-row justify-between items-center bg-dark-200 p-4">
              <Paragraph bold size="small">
                Amount Due
              </Paragraph>
              <Paragraph size="large" addClass="text-2xl" bold>
                ${selectedInvoice?.total}
              </Paragraph>
            </StyledView>
          </Card>
        </Card>
      </ScrollView>
      <StyledView className="flex flex-row justify-center py-5">
        <IconButton
          addClass="mx-1 px-5"
          title="Edit"
          onPress={onHandleEditInvoice}
        />
        <IconButton
          addClass="mx-1 px-5 bg-red-100"
          title="Delete"
          onPress={onHandleDeteInvoice}
        />
        <IconButton
          addClass="mx-1 px-5 bg-primary"
          title="Mark as Paid"
          onPress={onHandleMarkAsPaid}
        />
      </StyledView>
    </StyledView>
  );
};

export default InvoiceDetail;
