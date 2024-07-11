import {Picker} from '@react-native-picker/picker';
import {FILTER_VALUES} from '@src/constants/filter';
import {getInvoiceByStatus} from '@src/store/actions/invoiceActions';
import {styled} from 'nativewind';
import React, {useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

const StyledTouchableOpacity = styled(TouchableOpacity);

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>();

  const pickerRef = useRef(null);

  const onChange = (_value: string) => {
    setValue(_value);
    dispatch(getInvoiceByStatus(_value === 'all' ? null : _value));
  };
  return (
    <StyledTouchableOpacity className="flex flex-row items-center">
      <Picker
        selectedValue={value}
        ref={pickerRef}
        focusable={true}
        onValueChange={itemValue => onChange(itemValue)}
        style={styles.picker}
        dropdownIconColor="white">
        {FILTER_VALUES.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </StyledTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: 40,
    width: 100,
    position: 'relative',
    color: 'white',
  },
});

export default Filter;
