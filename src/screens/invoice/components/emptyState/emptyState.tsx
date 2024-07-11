import ImageEmptyState from '@src/assets/icons/illustration-empty.svg';
import Paragraph from '@src/components/paragraph/paragraph';
import {styled} from 'nativewind';
import React from 'react';
import {View} from 'react-native';

const StyledView = styled(View);

const EmptyState: React.FC = () => {
  return (
    <StyledView className="flex px-6 py-5 items-center">
      <ImageEmptyState />
      <Paragraph bold addClass="text-light-100 text-xl py-6">
        There is nothing here
      </Paragraph>
      <Paragraph size="small" addClass="text-light-100 text-center">
        Create an invoice by clicking the New button and get started
      </Paragraph>
    </StyledView>
  );
};

export default EmptyState;
