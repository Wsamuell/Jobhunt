import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet } from 'react-native';

import styles from './screenheader.style';
import { COLORS } from '../../../constants';

type Prop = {
  title?: string;
  onPress?: () => void;
  iconPath?: string;
  picture?: string;
};

const ScreenHeaderBtn = ({ title, onPress, iconPath, picture }: Prop) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={
        {
          // flex: 1,
          // backgroundColor: COLORS.lightWhite,
          // justifyContent: 'space-between',
          // alignItems: 'center',
          // paddingTop: insets.top,
          // paddingBottom: insets.bottom,
          // paddingLeft: insets.left,
          // paddingRight: insets.right,
        }
      }
    >
      {/* {title && <Text>{title}</Text>} */}
      <Text>ScreenHeaderBtn</Text>
      {/* {picture && (
        <Image
          source={{ height: 24, width: 24, uri: picture }}
          style={{ borderRadius: 12 }}
        />
      )} */}
      {/* {iconPath && <Image source={{ height: 24, width: 24, uri: iconPath }} />} */}
    </View>
  );
};

export default ScreenHeaderBtn;
