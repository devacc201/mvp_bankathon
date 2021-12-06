import React from 'react'
import { View, StyleSheet, ScrollView  } from 'react-native'
import { Title, Button, Text, TextInput, Appbar, ProgressBar, Colors, Paragraph} from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup'
import Header from '../components/Header';


const CreateLoan = (props) => {
  const continueHandler = () => {
    props.navigation.navigate('ProjectScreen')
  }
  return (
        <View>
            <Header 
              navigation={props.navigation}
              title="Crear Prestamo"
            />
            {/* <Appbar.Header>
            <Appbar.BackAction/>
            <Appbar.Content title="Crear Red" subtitle="" />
            <Appbar.Action icon="magnify" />
            <Appbar.Action icon="dots-vertical" />
            </Appbar.Header> */}
          <ScrollView>
            <View style={styles.container}>
              <Title style={styles.title}>Información Básica</Title> 
              <Formik
                initialValues={{ networkName: '', purpose: '', amount: '', helps: '', lastPayment: '' }}
                onSubmit={values => console.log(values),continueHandler}
              >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                  <View>
                    <ScrollView>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                      style={styles.input}
                      label="Ingresa el nombre del prestamo"
                      onChangeText={handleChange('networkName')}
                      onBlur={handleBlur('networkName')}
                      value={values.networkName}
                      error={errors.networkName}
                      touched={touched.networkName}
                    />
   
                    <Text style={styles.label}>Proposito</Text>
                    <TextInput
                      style={styles.input}
                      label="Ingresa el proposito del prestamo"
                      onChangeText={handleChange('purpose')}
                      onBlur={handleBlur('purpose')}
                      value={values.purpose}
                      error={errors.purpose}
                      touched={touched.purpose}
                    />

                    <Text style={styles.label}>Monto Solicitado</Text>
                    <TextInput
                      style={styles.input}
                      label="Ingresa el valor en USD"
                      onChangeText={handleChange('amount')}
                      onBlur={handleBlur('amount')}
                      value={values.amount}
                      error={errors.amount}
                      touched={touched.amount}
                    />

                  <Text style={styles.label}>Fecha último pago</Text>
                    <TextInput
                      style={styles.input}
                      label="dia/mes/año"
                      onChangeText={handleChange('lastPayment')}
                      onBlur={handleBlur('lastPayment')}
                      value={values.lastPayment}
                      error={errors.lastPayment}
                      touched={touched.lastPayment}
                    />


                    <Text style={styles.label}>Ayudas no monetarias</Text>
                    <TextInput
                      style={styles.textArea}
                      label="Ingresa el proposito de la red"
                      onChangeText={handleChange('helps')}
                      onBlur={handleBlur('helps')}
                      value={values.helps}
                      error={errors.helps}
                      touched={touched.helps}
                    />


                    <Button 
                      mode="contained" 
                      onPress={handleSubmit} 
                      title="Continue" 
                      > 
                      Continuar
                    </Button>
                  </ScrollView>
                  </View>
                )}
              </Formik>

            </View>
          </ScrollView>   
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
export default CreateLoan