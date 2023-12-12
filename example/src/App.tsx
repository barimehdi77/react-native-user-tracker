import * as React from 'react';

import { StyleSheet, View, Text, Platform } from 'react-native';
import Tracker from 'react-native-user-tracker';
import type {
  AppTrackerConfiguration,
  NetworkConfiguration,
  TrackedUserConfiguration,
} from '../../src/types';

export default function App() {
  const nework: NetworkConfiguration = {
    host: 'localhost:8080/',
    endpoint: '/collector',
    method: 'post',
  };
  const appTracker: AppTrackerConfiguration = {
    appId: 'example app',
    appLanguage: 'en',
    devicePlatform: Platform.OS,
  };
  const trackedUser: TrackedUserConfiguration = {
    userId: '77',
  };

  const tracker = new Tracker(nework, appTracker, trackedUser);
  return (
    <View style={styles.container}>
      <Text>Result: {tracker.network.host}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
