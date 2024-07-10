declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'tailwind-react-native-classnames' {
  const classes: Record<string, string>;
  export default classes;
}
