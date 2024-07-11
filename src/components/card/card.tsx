import {styled} from 'nativewind';
import React, {ReactNode} from 'react';
import {View} from 'react-native';

interface CardProps {
  style?: string;
  children: ReactNode;
}

const StyledView = styled(View);

const Card: React.FC<CardProps> = ({style, children}) => {
  return (
    <StyledView
      className={`bg-dark-purple-100 rounded-lg overflow-hidden shadow-md p-4 ${style}`}>
      {children}
    </StyledView>
  );
};

export default Card;
