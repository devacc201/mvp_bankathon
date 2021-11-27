import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { name as appName } from './app.json'
import Home from './src/Home'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default Main = () => {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => Main)