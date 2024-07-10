import {styled} from 'nativewind';
import React from 'react';
import {ImageSourcePropType, View} from 'react-native';
import Profile from '../profile/profile';
import Logo from './../../assets/icons/logo.svg';

const StyledView = styled(View);

interface CustomHeaderProps {
  profileUri: ImageSourcePropType;
}

const Header: React.FC<CustomHeaderProps> = ({profileUri}) => {
  return (
    <StyledView className="w-full flex flex-row items-center justify-between px-4 bg-dark-purple-100">
      <StyledView className="py-2">
        <Logo width={28} height={28} />
      </StyledView>
      <StyledView className="border-l pl-4  py-3 border-light-200 ">
        <Profile uri={profileUri} />
      </StyledView>
    </StyledView>
  );
};

export default Header;
