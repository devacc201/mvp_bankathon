import React from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import {FormBuilder} from 'react-native-paper-form-builder'
import {useForm} from 'react-hook-form'


function CrateNetwork() {
    const {control, setFocus, handleSubmit} = useForm({
      defaultValues: {
        email: '',
        password: '',
      },
      mode: 'onChange',
    });
  
    return (
      <View style={styles.containerStyle}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <Text style={styles.headingStyle}>Form Builder Basic Demo</Text>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                type: 'text',
                name: 'email',
  
                rules: {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                },
                textInputProps: {
                  label: 'Name',
                },
              },
              {
                type: 'text',
                name: 'password',
                rules: {
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                },
                textInputProps: {
                  label: 'Password',
                },
              },
            ]}
          />
          <Button
            mode={'contained'}
            onPress={handleSubmit((data: any) => {
              console.log('form data', data);
            })}>
            Submit
          </Button>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
    },
    scrollViewStyle: {
      flex: 1,
      padding: 15,
      justifyContent: 'center',
    },
    headingStyle: {
      fontSize: 30,
      textAlign: 'center',
      marginBottom: 40,
    },
  });
  
  function DetailsScreen() {
    return (
      <View style={style.container}>
        <Text>Details Screen</Text>
      </View>
    );
  }
  export default CrateNetwork;