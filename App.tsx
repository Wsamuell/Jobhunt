import { useRouter } from 'expo-router';
import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { COLORS, iconMap, images, SIZES } from './constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn } from './components';
import Home from './components/home/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={() => ({
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconPath={iconMap.menu}
                dimension={20}
                onPress={() => console.log('Menu pressed')}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                picture={images.profile}
                dimension={30}
                onPress={() => console.log('picture pressed')}
              />
            ),
            title: '',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
