import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import Films from './components/Films/Films';
import styles from "./styles";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello !</Text>
      <StatusBar style="auto" />
      <Films/>
    </View>
  );
}

export default App;
