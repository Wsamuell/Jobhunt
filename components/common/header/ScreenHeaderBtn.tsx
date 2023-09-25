import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

import styles from './screenheader.style';
import { COLORS } from '../../../constants';

type Prop = {
  onPress: () => void;
  iconPath?: IconDefinition; // thi
  picture?: any; // any for now
  dimension: number;
};

const ScreenHeaderBtn = ({ onPress, iconPath, picture, dimension }: Prop) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      {iconPath && (
        <FontAwesomeIcon
          icon={iconPath}
          size={dimension}
          // color={COLORS.primary}
        />
      )}
      {picture && (
        <Image
          source={picture}
          resizeMode="cover"
          style={{
            width: dimension,
            height: dimension,
            borderRadius: dimension / 2,
            // marginLeft: 5,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
