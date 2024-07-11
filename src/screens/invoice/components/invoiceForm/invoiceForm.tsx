import IconButton from '@src/components/button/button';
import {IInvoice} from '@src/store/actions/invoiceActions';
import {styled} from 'nativewind';
import React from 'react';
import {FormProvider} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {useInvoiceForm} from '../../hooks/useInvoiceForm';
import BillFromForm from '../billFromForm/billFromForm';
import BillToForm from '../billToForm/billToForm';
import ItemListForm from '../itemListForm/itemListForm';

const StyledView = styled(View);

interface InvoiceFormProps {
  editing?: boolean;
  initialData?: IInvoice;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({editing, initialData}) => {
  const {methods, onSaveDraft, onSaveAndSend, onUpdate, onHandleCancelFlow} =
    useInvoiceForm({
      editing,
      initialData,
    });
  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <BillFromForm />
        <StyledView className="mt-3">
          <BillToForm />
        </StyledView>
        <ItemListForm />
        {editing ? (
          <StyledView className="flex flex-row justify-center py-5">
            <IconButton
              addClass="mx-1"
              title="Cancel"
              onPress={onHandleCancelFlow}
            />

            <IconButton
              title="Save changes"
              addClass="bg-primary mx-1"
              onPress={methods.handleSubmit(onUpdate)}
            />
          </StyledView>
        ) : (
          <StyledView className="flex flex-row justify-center py-5">
            <IconButton
              addClass="mx-1"
              title="Discard"
              onPress={onHandleCancelFlow}
            />
            <IconButton
              title="Save as Draft"
              addClass="bg-light-400 mx-1"
              onPress={methods.handleSubmit(onSaveDraft)}
            />
            <IconButton
              title="Save & Send"
              addClass="bg-primary mx-1"
              onPress={methods.handleSubmit(onSaveAndSend)}
            />
          </StyledView>
        )}
      </View>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default InvoiceForm;
