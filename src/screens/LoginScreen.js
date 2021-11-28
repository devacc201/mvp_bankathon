import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const LoginScreen = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = () => {
        console.log('Login Handler')
        props.navigation.navigate('HomeScreen')
    }
    return (
        <SafeAreaView>
            <TextInput 
                label="Email"
                placeholder="valid@email.com"
            />
            <TextInput 
                label="Password"
                placeholder="Min 8 characters"
                secureTextEntry={true}
            />
            <Button
                icon="account-arrow-right-outline"
                mode="contained"
                onPress={loginHandler}
            >
                Login
            </Button>
            <Button
                icon="account-clock-outline"
                mode="contained"
                onPress={loginHandler}
            >
                Forgot Password
            </Button>
        </SafeAreaView>
    )
}

export default LoginScreen