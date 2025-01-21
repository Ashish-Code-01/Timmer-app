import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Time from './components/time'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Time />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})