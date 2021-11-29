import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import LoginScreen from '../src/screens/LoginScreen'
import HomeScreen from '../src/screens/HomeScreen'
import CreateNetwork from '../src/screens/CreateNetwork'
import Rules from '../src/screens/Rules'
import AddMembers from '../src/screens/AddMembers'



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
                <Stack.Screen name="CreateNetwork" component={CreateNetwork} />
                <Stack.Screen name="Rules" component={Rules} />
                <Stack.Screen name="AddMembers" component={AddMembers} />


            </Stack.Navigator>
        )
    )
}

export default AppNavigator