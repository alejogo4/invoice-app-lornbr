import {styled} from 'nativewind';
import React from 'react';
import {TextInput as RNTextInput, TextInputProps, View} from 'react-native';
import Paragraph from '../paragraph/paragraph';

const StyledTextInput = styled(RNTextInput);
const StyledView = styled(View);

const TextInput: React.FC<TextInputProps> = props => {
  return (
    <StyledView className="flex flex-1">
      <Paragraph size="small" addClass="opacity-30">
        {props.placeholder}
      </Paragraph>
      <StyledTextInput
        className="flex border border-light-400 bg-dark-purple-200 placeholder-dark-purple-100 p-2 rounded-md px-4 mt-2 mb-4"
        placeholderTextColor={'#dfe3fa'}
        {...props}
      />
    </StyledView>
  );
};

export default TextInput;
