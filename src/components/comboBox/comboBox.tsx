import {Picker} from '@react-native-picker/picker';
import {styled} from 'nativewind';
import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import Paragraph from '../paragraph/paragraph';

const StyledView = styled(View);

interface ComboBoxProps {
  name: string;
  control: Control<any>;
  items: {label: string; value: any}[];
}

const ComboBox: React.FC<ComboBoxProps> = ({name, control, items}) => {
  return (
    <StyledView className="flex flex-1">
      <Paragraph size="small" addClass="opacity-30 mb-2">
        Payments Terms
      </Paragraph>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({field: {onChange, value}}) => (
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={value}
              onValueChange={itemValue => onChange(itemValue)}
              style={styles.picker}
              dropdownIconColor="white">
              {items.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>
        )}
      />
    </StyledView>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    borderColor: '#7e88c3',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#1e2139',
    color: 'white',
  },
  picker: {
    height: 40,
    width: '100%',
    color: 'white',
  },
});

export default ComboBox;
