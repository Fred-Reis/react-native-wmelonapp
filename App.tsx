import { Home } from './src/pages/Home';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar translucent />
      <Home />
    </SafeAreaView>
  );
}
