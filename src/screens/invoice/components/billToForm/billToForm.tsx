import ComboBox from '@src/components/comboBox/comboBox';
import DatePicker from '@src/components/datePicker/datePicker';
import Paragraph from '@src/components/paragraph/paragraph';
import TextInput from '@src/components/textInput/textInput';
import {styled} from 'nativewind';
import React from 'react';
import {Controller, FieldError, useFormContext} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {PAYMENTS_TERMS} from '../../../../constants/invoice';

const StyledView = styled(View);

const BillToForm: React.FC = () => {
  const {
    control,
    formState: {errors},
  } = useFormContext();

  return (
    <View>
      <Paragraph bold color="secondary" addClass="mb-4">
        Bill To
      </Paragraph>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Client Name"
            error={
              errors.clientName && (errors.clientName as FieldError).message
            }
          />
        )}
        name="clientName"
        defaultValue=""
      />

      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Client Email"
            error={
              errors.clientEmail && (errors.clientEmail as FieldError).message
            }
          />
        )}
        name="clientEmail"
        defaultValue=""
      />

      <StyledView className="flex flex-row">
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              style={[styles.inputSpace]}
              onChangeText={onChange}
              value={value}
              placeholder="City"
            />
          )}
          name="clientAddress.city"
          defaultValue=""
        />
      </StyledView>

      <DatePicker name="createdAt" />
      <ComboBox name="paymentTerms" control={control} items={PAYMENTS_TERMS} />

      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Project Description"
            error={
              errors.description && (errors.description as FieldError).message
            }
          />
        )}
        name="description"
        defaultValue=""
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  inputSpace: {
    marginRight: 8,
  },
});

export default BillToForm;
