import React from 'react'
import { View, StyleSheet, ScrollView  } from 'react-native'
import { Title, Button, Text, TextInput, Appbar, ProgressBar, Colors, Paragraph} from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  networkName: yup
    .string()
    //.networkName("Por favor ingrese un nombre")
    //.min(4, ({ min }) => `Nombre must be at least ${min} characters`)
    .required('Nombre es requerido'),
  purpose : yup
    .string()
    .required('Proposito es requerido'),
})

const CreateNetwork = (props) => {
  const continueHandler = () => {
    props.navigation.navigate('Rules')
  }
  return (
        <View>
            <Appbar.Header>
            <Appbar.BackAction/>
            <Appbar.Content title="Crear Red" subtitle="" />
            <Appbar.Action icon="magnify" />
            <Appbar.Action icon="dots-vertical" />
            </Appbar.Header>
 
            <View style={styles.container}>
              <Title style={styles.title}>Información Básica</Title> 
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
              <Formik
                initialValues={{ networkName: '', purpose: '' }}
                validationSchema={loginValidationSchema}
                onSubmit={values => console.log(values),continueHandler}
              >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                  <View>
                    <ScrollView>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                      style={styles.input}
                      label="Ingresa el nombre de la red"
                      onChangeText={handleChange('networkName')}
                      onBlur={handleBlur('networkName')}
                      value={values.networkName}
                      error={errors.networkName}
                      touched={touched.networkName}
                    />
   
                    <Text style={styles.label}>Proposito</Text>
                    <TextInput
                      style={styles.textArea}
                      label="Ingresa el proposito de la red"
                      onChangeText={handleChange('purpose')}
                      onBlur={handleBlur('purpose')}
                      value={values.purpose}
                      error={errors.purpose}
                      touched={touched.purpose}
                    />

                    <Button 
                      mode="contained" 
                      onPress={handleSubmit} 
                      title="Continue" 
                      disabled={!isValid}> 
                      Continuar
                    </Button>
                  </ScrollView>
                  </View>
                )}
              </Formik>

            </View>
             
        </View>
  )
}
const styles = StyleSheet.create({
 container: {
    padding: 20,
 },
 input: {
    //fontSize: '12px', 
    marginBottom: 10,
    //marginTop: 50,
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
    textAlign: 'center'
  },
});
export default CreateNetwork