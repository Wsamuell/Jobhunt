import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Welcome from './welcome/Welcome';
import { SIZES } from '../../constants';
import Popularjobs from './popular/Popularjobs';
import NearbyJobCard from '../common/cards/nearby/NearbyJobCard';

type Props = {};

const Home = (props: Props) => {
  return (
    <SafeAreaView>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs />
          <NearbyJobCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
