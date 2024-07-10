import Paragraph from '@src/components/paragraph/paragraph';
import TextInput from '@src/components/textInput/textInput';
import {styled} from 'nativewind';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
const StyledView = styled(View);

const BillFromForm: React.FC = () => {
  const {control} = useFormContext();

  return (
    <View>
      <Paragraph bold color="secondary" addClass="mb-4">
        Bill From
      </Paragraph>
      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            placeholder="Street Address"
          />
        )}
        name="senderAddress.street"
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
          name="senderAddress.city"
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
          name="senderAddress.postCode"
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
        name="senderAddress.country"
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
    color: 'white',
  },
  inputSpace: {
    marginRight: 8,
  },
});

export default BillFromForm;
