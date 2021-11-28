import React from 'react'
import { SafeAreaView } from 'react-native'
import { Button, Text } from 'react-native-paper'

const LoginScreen = (props) => {
    const loginHandler = () => {
        console.log('Login Handler')
        props.navigation.navigate('HomeScreen')
    }
    return (
        <SafeAreaView>
            <Text>Login Screen</Text>
            <Button
                icon="camera"
                mode="contained"
                onPress={loginHandler}
            ></Button>
        </SafeAreaView>
    )
}

export default LoginScreen