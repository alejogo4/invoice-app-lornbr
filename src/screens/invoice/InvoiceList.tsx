import IconButton from '@src/components/button/button';
import Paragraph from '@src/components/paragraph/paragraph';
import {useAppSelector} from '@src/store';
import {getInvoiceById} from '@src/store/actions/invoiceActions';
import {styled} from 'nativewind';
import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import EmptyState from './components/emptyState/emptyState';
import Invoices from './components/invoices/invoices';
import AddIcon from '@src/assets/icons/icon-plus.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@src/types/InvoiceRoute';

const StyledView = styled(View);

type InvoiceListNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Invoices'
>;

type InvoiceListProps = {
  navigation: InvoiceListNavigationProp;
};

const InvoiceList: React.FC<InvoiceListProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useAppSelector(state => state.invoices);

  const handleNewInvoice = () => {
    navigation.navigate('InvoiceCreate');
    dispatch(getInvoiceById(null));
  };
  //state.invoices.length === 0
  

  return (
    <StyledView className="flex-1 bg-dark-200">
      <StyledView className="flex flex-row px-6 py-6 justify-between">
        <StyledView className="flex">
          <Paragraph bold size="large" color="light-100">
            Invoices
          </Paragraph>
          <Paragraph bold size="small" color="light-100">
            {state.invoices.length} invoices
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
      {/* <Invoices invoices={state.invoices} /> */}

      <EmptyState />
    </StyledView>
  );
};

export default InvoiceList;
