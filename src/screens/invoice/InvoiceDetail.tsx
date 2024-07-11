import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Card from '@src/components/card/card';
import Paragraph from '@src/components/paragraph/paragraph';
import {useAppSelector} from '@src/store';
import {RootStackParamList} from '@src/types/InvoiceRoute';
import {styled} from 'nativewind';
import React from 'react';
import {ScrollView, View} from 'react-native';

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

const InvoiceDetail: React.FC<InvoiceDetailProps> = ({navigation, route}) => {
  const selectedInvoice = useAppSelector(
    state => state.invoices.selectedInvoice,
  );

  return (
    <StyledView className="flex-1 bg-dark-200">
      <ScrollView>
        <Card style="mb-4 mx-5 mt-4">
          <StyledView className="flex flex-row justify-between mb-2">
            <Paragraph size="small">Status</Paragraph>
            <Paragraph size="small">{selectedInvoice?.status}</Paragraph>
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

          <Card style="bg-light-500">
            <Paragraph size="small">
              {selectedInvoice?.senderAddress.city}
            </Paragraph>
            <Paragraph size="small">
              {selectedInvoice?.senderAddress.postCode}
            </Paragraph>
            <Paragraph size="small">
              {selectedInvoice?.senderAddress.country}
            </Paragraph>
          </Card>
          <StyledView className="flex flex-row justify-between">
            {/* <StyledView className="flex">
            <Paragraph size="small">
              Due {formatDate(item.paymentDue)}
            </Paragraph>
            <Paragraph bold>$ {item?.total}</Paragraph>
          </StyledView> */}
          </StyledView>
        </Card>
      </ScrollView>
    </StyledView>
  );
};

export default InvoiceDetail;
