import {styled} from 'nativewind';
import React, {ReactNode} from 'react';
import {View} from 'react-native';
import Paragraph from '../paragraph/paragraph';

interface StatusProps {
  addClass?: string;
  status: string;
}

const StyledView = styled(View);

const Status: React.FC<StatusProps> = ({addClass, status}) => {
  const getColors = () => {
    switch (status) {
      case 'pending':
        return {
          bgColor: '#1f2d40',
          color: '#33d69f',
        };

      case 'paid':
        return {
          bgColor: '#2b2735',
          color: '#ff8e02',
        };

      case 'draft':
        return {
          bgColor: '#2a2d43',
          color: '#dee4f9',
        };

      default:
        return {
          bgColor: '#1f2d40',
          color: '#33d69f',
        };
    }
  };

  return (
    <StyledView
      className={`py-1 px-4 rounded-md flex flex-row items-center ${addClass}`}
      style={{backgroundColor: getColors().bgColor}}>
      <StyledView
        className="w-2 h-2 rounded-full mr-2"
        style={{backgroundColor: getColors().color}}/>
      <Paragraph style={{color: getColors().color}}>
        {status.toLowerCase()}
      </Paragraph>
    </StyledView>
  );
};

export default Status;
