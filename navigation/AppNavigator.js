import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import LoginScreen from '../src/screens/LoginScreen'
import HomeScreen from '../src/screens/HomeScreen'

const Stack = createNativeStackNavigator()

const screen_options = {
    headerShown: false
}

const AppNavigator = () => {
    return(
        (
            <Stack.Navigator
                initialRouteName="LoginScreen"
                screenOptions={screen_options}
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        )
    )
}

export default AppNavigator