import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomIcon from './assets/love.svg'
export default function App() {
  return (
    <View style={styles.container}>
      <CustomIcon width={120} height={120} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
