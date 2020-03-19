import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import RootNavigator from './navigation/rootNavigator';

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
