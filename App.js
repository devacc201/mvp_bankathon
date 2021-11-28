import React from 'react'
import { AppRegistry } from 'react-native'
import {Provider as PaperProvider } from 'react-native-paper'
import { name as appName } from './app.json'
import { NavigationContainer } from '@react-navigation/native'
import Theme from './theme/Theme'
import AppNavigator from './navigation/AppNavigator'

export default Main = () => {
  return (
    <PaperProvider theme={Theme}>
      <NavigationContainer theme={Theme}>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => Main)