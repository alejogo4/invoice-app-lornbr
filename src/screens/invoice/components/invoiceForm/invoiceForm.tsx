import IconButton from '@src/components/button/button';
import {
  addInvoice,
  IAddress,
  IInvoice,
  IItem,
} from '@src/store/actions/invoiceActions';
import {generateInvoiceID} from '@src/utils/strings';
import {styled} from 'nativewind';
import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import BillFromForm from '../billFromForm/billFromForm';
import BillToForm from '../billToForm/billToForm';
import ItemListForm from '../itemListForm/itemListForm';

const StyledView = styled(View);

function calculateTotal(items: IItem[]): number {
  return items.reduce((total, item) => total + item.total, 0);
}

const InvoiceForm: React.FC = () => {
  const methods = useForm();
  const dispatch = useDispatch();

  const mapDataToInvoice = (data: any, status: string) => {
    const senderAddress: IAddress = {
      street: data.senderAddress.street,
      city: data.senderAddress.city,
      postCode: data.senderAddress.postCode,
      country: data.senderAddress.country,
    };

    const clientAddress: IAddress = {
      street: data.clientAddress.street,
      city: data.clientAddress.city,
      postCode: data.clientAddress.postCode,
      country: data.clientAddress.country,
    };

    const items: IItem[] = data.items.map((item: any) => ({
      name: item.name,
      quantity: parseInt(item.quantity),
      price: parseFloat(item.price),
      total: parseFloat(item.total),
    }));

    const invoice: IInvoice = {
      id: generateInvoiceID(),
      createdAt: data.createdAt,
      paymentDue: data.paymentDue,
      description: data.description,
      paymentTerms: data.paymentTerms,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      status,
      senderAddress,
      clientAddress,
      items,
      total: calculateTotal(items),
    };

    return invoice;
  };

  const onSaveDraft = (data: any) => {
    console.log('Saved as Draft:', data);
    const invoice = mapDataToInvoice(data, 'draft');
    dispatch(addInvoice(invoice));
  };

  const onSaveAndSend = (data: any) => {
    console.log('Saved and Send:', data);
    const invoice = mapDataToInvoice(data, 'pending');
    dispatch(addInvoice(invoice));
  };

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <BillFromForm />
        <StyledView className="mt-3">
          <BillToForm />
        </StyledView>
        <ItemListForm />
        <View style={styles.buttonContainer}>
          <IconButton
            title="Discard"
            onPress={methods.handleSubmit(onSaveDraft)}
          />
          <IconButton
            title="Save as Draft"
            onPress={methods.handleSubmit(onSaveDraft)}
          />
          <IconButton
            title="Save & Send"
            onPress={methods.handleSubmit(onSaveAndSend)}
          />
        </View>
      </View>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default InvoiceForm;
