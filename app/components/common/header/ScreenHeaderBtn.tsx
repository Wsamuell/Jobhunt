import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

// import styles from './screenheader.style'

type Prop = {
  icon: ReactElement;
  optionalText?: string;
};

const ScreenHeaderBtn = ({ icon, optionalText }: Prop) => {
  return (
    <View>
      {icon}
      {optionalText && <Text>{optionalText}</Text>}
    </View>
  );
};

export default ScreenHeaderBtn;
