import ComboBox from '@src/components/comboBox/comboBox';
import DatePicker from '@src/components/datePicker/datePicker';
import Paragraph from '@src/components/paragraph/paragraph';
import TextInput from '@src/components/textInput/textInput';
import {styled} from 'nativewind';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {PAYMENTS_TERMS} from '../../constants/invoice';

const StyledView = styled(View);

const BillToForm: React.FC = () => {
  const {control} = useFormContext();

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
          />
        )}
        name="clientEmail"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Street Address"
          />
        )}
        name="clientAddress.street"
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
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholder="Post Code"
            />
          )}
          name="clientAddress.postCode"
          defaultValue=""
        />
      </StyledView>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Country"
          />
        )}
        name="clientAddress.country"
        defaultValue=""
      />

      <DatePicker name="createdAt" />
      <ComboBox name="paymentTerms" control={control} items={PAYMENTS_TERMS} />

      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Project Description"
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
