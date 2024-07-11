import {styled} from 'nativewind';
import React from 'react';
import {TextInput as RNTextInput, TextInputProps, View} from 'react-native';
import Paragraph from '../paragraph/paragraph';

const StyledTextInput = styled(RNTextInput);
const StyledView = styled(View);

interface ExtendedTextInputProps extends TextInputProps {
  error?: string;
}

const TextInput: React.FC<ExtendedTextInputProps> = props => {
  return (
    <StyledView className="flex flex-1">
      <Paragraph size="small" addClass="opacity-30">
        {props.placeholder}
      </Paragraph>
      <StyledTextInput
        className="flex border border-light-400 bg-dark-purple-200 p-2 rounded-md px-4 mt-2  text-light-400"
        placeholderTextColor={'#787c9f'}
        {...props}
      />
      {props.error && props.error?.length > 0 && (
        <Paragraph size="small" addClass="text-red-100 mb-4">
          {props.error}
        </Paragraph>
      )}
    </StyledView>
  );
};

export default TextInput;
