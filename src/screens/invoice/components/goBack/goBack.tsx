import {useNavigation} from '@react-navigation/native';
import {styled} from 'nativewind';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import IconLeft from './../../../../assets/icons/icon-arrow-left.svg';
import Paragraph from '@src/components/paragraph/paragraph';

const StyledView = styled(View);

const GoBack: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <StyledView className="flex flex-row px-6 py-5 items-center">
        <IconLeft />
        <Paragraph bold addClass="ml-5 text-light-100">
          Go back
        </Paragraph>
      </StyledView>
    </TouchableOpacity>
  );
};

export default GoBack;
