import React from 'react'
import { AppRegistry } from 'react-native'
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { name as appName } from './app.json'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './navigation/AppNavigator'

const theme = {
  ...DefaultTheme,
  roundness: 2,

};

export default function Main () {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => Main)