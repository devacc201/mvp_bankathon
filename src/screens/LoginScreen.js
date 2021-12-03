import React, { useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Button, TextInput, Title, Colors } from 'react-native-paper'

const LoginScreen = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = () => {
        console.log('Login Handler')
        props.navigation.navigate('HomeScreen')
    }
    return (
        <SafeAreaView>
           <ScrollView style={styles.container}>
           
          
           <Image 
            source={require('../images/logo.png')} 
            style={styles.image}
           />

            <TextInput 
                style={styles.input}
                label="Email"
                placeholder="valid@email.com"
            />
            <TextInput 
                style={styles.input}
                label="Password"
                placeholder="Min 8 characters"
                secureTextEntry={true}
            />
            <Button
                icon="account-arrow-right-outline"
                style={styles.button}
                mode="contained"
                onPress={loginHandler}
            >
                Login
            </Button>
            <Button
                style={styles.button}
                icon="account-clock-outline"
                mode="contained"
                onPress={loginHandler}
            >
                Forgot Password
            </Button>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
       padding: 40,
    },
    input: {
       marginBottom: 10,
     },
     label: {
       paddingTop: 15,  
       paddingBottom: 10,
       fontWeight: 'bold',
       fontSize: 16,
     },
     textArea: {
       height: 120,
       marginBottom: 10,
     },
     title: {
       fontWeight: 'bold',
       fontSize: 60,
       paddingTop:60,
       paddingBottom:20,
       textAlign: 'center',
       color: '#6300ee'
    },
     errorText: {
       fontSize: 14,
       color: 'red',
       fontWeight: 'bold',
       textAlign: 'center'
     },
     button:{
        marginBottom:15,
        paddingBottom:5
     },
     image:{
         width: 350,
         height:350,
          marginLeft: 'auto',
          marginRight: 'auto'
     }

   
   
   });

export default LoginScreen