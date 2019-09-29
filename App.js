import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomIcon from './assets/love.svg'

import Svg from './components/svg/svg.component'


export default function App() {
  return (
    <View style={styles.container}>
      <Svg source={'fire'} width={120} height={120} />
      <Svg source={'love'} width={120} height={120} />
      <Svg source={'passion'} width={120} height={120} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
