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

import { COLORS, icons, images, SIZES } from './constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn } from './components';

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
          options={() => ({
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => <ScreenHeaderBtn iconPath={icons.menu} />,
            headerRight: () => <ScreenHeaderBtn picture={icons.menu} />,
            title: '',
          })}
        >
          {() => (
            <Tab.Navigator
              initialRouteName="Analitics"
              tabBar={() => null}
              screenOptions={{ headerShown: false }}
            >
              {/* <TouchableOpacity>
                <Image source={{ uri: icons.menu }} style={styles.icon} />
              </TouchableOpacity> */}
              <Tab.Screen name="Analitics" component={ScreenHeaderBtn} />
              <Tab.Screen name="Profile" component={ScreenHeaderBtn} />
            </Tab.Navigator>
          )}
        </Stack.Screen>

        <Stack.Screen name="Settings" component={ScreenHeaderBtn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: COLORS.gray2,
  },
  icon: {},
  menu: {},
});

export default App;
