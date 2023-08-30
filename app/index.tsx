import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Colors, Sizes } from './sharedStyles';
import {
  NearbyJobCard,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from 'components';

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: Colors.lightWhite },
          headerShadowVisible: false,
          // headerLeft: () => (
          //   // <ScreenHeaderBtn icon={Bars3Icon}
          // )
        }}
      ></Stack.Screen>
    </SafeAreaView>
  );
};

export default Home;
