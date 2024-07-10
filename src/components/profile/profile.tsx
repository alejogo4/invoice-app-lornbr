import {styled} from 'nativewind';
import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';

const StyledView = styled(View);
const StyledImage = styled(Image);

interface ProfileProps {
  uri: ImageSourcePropType;
}

const Profile: React.FC<ProfileProps> = ({uri}) => {
  return (
    <StyledView className="rounded-full overflow-hidden w-10 h-10">
      <StyledImage source={uri} className="w-full h-full" />
    </StyledView>
  );
};

export default Profile;
