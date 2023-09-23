import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import { COLORS, icons, images, SIZES } from './constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn } from './components';

export default function App() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
});
