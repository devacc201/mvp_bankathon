import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import LoginScreen from '../src/screens/LoginScreen'
import HomeScreen from '../src/screens/HomeScreen'
import CreateNetwork from '../src/screens/CreateNetwork'
import Rules from '../src/screens/Rules'
import AddMembers from '../src/screens/AddMembers'
import InvestmentScreen from '../src/screens/InvestmentScreen'
import NetworkScreen from '../src/screens/NetworkScreen'
import ProjectScreen from '../src/screens/ProjectScreen'
import ServiceDetails from '../src/screens/ServiceDetails'
import ServiceScreen from '../src/screens/ServiceScreen'
import TermsAndConditions from '../src/screens/TermsAndConditions'
import CreateLoan from '../src/screens/CreateLoan'



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
                <Stack.Screen name="AddMembers" component={AddMembers} />
                <Stack.Screen name="CreateNetwork" component={CreateNetwork} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="InvestmentScreen" component={InvestmentScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="NetworkScreen" component={NetworkScreen} />
                <Stack.Screen name="ProjectScreen" component={ProjectScreen} />
                <Stack.Screen name="Rules" component={Rules} />
                <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
                <Stack.Screen name="ServiceScreen" component={ServiceScreen} />
                <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
                <Stack.Screen name="CreateLoan" component={CreateLoan} />


            </Stack.Navigator>
        )
    )
}

export default AppNavigator