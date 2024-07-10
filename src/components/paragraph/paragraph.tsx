import {styled} from 'nativewind';
import React, {ReactNode} from 'react';
import {Text} from 'react-native';

interface ParagraphProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bold?: boolean;
  children: ReactNode;
}

const StyledText = styled(Text);

const Paragraph: React.FC<ParagraphProps> = ({
  size = 'medium',
  color = 'black',
  bold = false,
  children,
}) => {
  let textSizeClasses = 'text-base';

  switch (size) {
    case 'small':
      textSizeClasses = 'text-sm';
      break;
    case 'large':
      textSizeClasses = 'text-lg';
      break;
    default:
      textSizeClasses = 'text-base';
      break;
  }

  return (
    <StyledText
      className={`font-normal ${
        bold ? 'font-bold' : ''
      } text-${color} ${textSizeClasses}`}>
      {children}
    </StyledText>
  );
};

export default Paragraph;
