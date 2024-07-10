import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React, {useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import {TouchableOpacity, View} from 'react-native';
import TextInput from '../textInput/textInput';

interface DatePickerProps {
  name: string;
}

const DatePicker: React.FC<DatePickerProps> = ({name}) => {
  const {control, setValue} = useFormContext();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState<Date>(new Date());

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setValue(name, currentDate.toISOString().split('T')[0]); // Set the value in the form
  };

  return (
    <View>
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      <TouchableOpacity activeOpacity={1} onPress={() => setShow(true)}>
        <Controller
          control={control}
          name={name}
          defaultValue=""
          render={({field: {value}}) => (
            <TextInput
              value={value}
              placeholder="Invoice Date"
              editable={false}
            />
          )}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DatePicker;
