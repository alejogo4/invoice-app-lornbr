import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {styled} from 'nativewind';

interface IconButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  addClass?: string;
}

const StyledTouchableOpacity = styled(TouchableOpacity);

const IconButton: React.FC<IconButtonProps> = ({
  title,
  onPress,
  icon,
  iconPosition = 'left',
  addClass,
}) => {
  return (
    <StyledTouchableOpacity
      className={`bg-dark-purple-200 text-light-100 py-3 px-3 rounded-full flex flex-row justify-center items-center ${addClass}`}
      onPress={onPress}>
      {icon && iconPosition === 'left' && (
        <View style={styles.iconContainerLeft}>{icon}</View>
      )}
      <Text style={styles.buttonText}>{title}</Text>
      {icon && iconPosition === 'right' && (
        <View style={styles.iconContainerRight}>{icon}</View>
      )}
    </StyledTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainerLeft: {
    marginRight: 8,
  },
  iconContainerRight: {
    marginLeft: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#dfe3fa',
  },
});

export default IconButton;
