import React from 'react'
import { View, StyleSheet  } from 'react-native'
import { Title, Button, Text, TextInput, Appbar, ProgressBar, Colors, Paragraph} from 'react-native-paper';
import { Formik,FieldArray } from 'formik';
import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  memberName: yup
    .string()
    .required('Nombre es requerido'),
  memberEmail : yup
    .string()
    .required('Email es requerido'),
})

const members = 
  [
    {
      name: '',
      email: '',
    },
  ]


const AddMembers = (props) => {
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
              <Title style={styles.title}>Agregar Miembros</Title> 
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
              <Formik
                initialValues={{ memberName: '', memberEmail: '', members }}
                validationSchema={loginValidationSchema}
                onSubmit={values => console.log(values),continueHandler}
              >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                  <View>
                    
                    <FieldArray 
                        name="members"
                        render={arrayHelpers => (<View>
                            <Text style={styles.label}>Prueba</Text>
                            <TextInput
                            style={styles.input}
                            label="Nombre"
                            onChangeText={handleChange('memberName')}
                            onBlur={handleBlur('networkName')}
                            value={values.memberName}
                            error={errors.memberName}
                            touched={touched.memberName}
                          />
                        </View>) }
                    />
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput
                      style={styles.input}
                      label="Nombre"
                      onChangeText={handleChange('memberName')}
                      onBlur={handleBlur('networkName')}
                      value={values.memberName}
                      error={errors.memberName}
                      touched={touched.memberName}
                    />
   
                    <Text style={styles.label}>Correo Electronico</Text>
                    <TextInput
                      style={styles.input}
                      label="Correo Electronico"
                      onChangeText={handleChange('memberEmail')}
                      onBlur={handleBlur('memberEmail')}
                      value={values.memberEmail}
                      error={errors.memberEmail}
                      touched={touched.memberEmail}
                    />

                    <Button 
                      mode="contained" 
                      onPress={console.log(members), members.push({ name: values.memberName, email: values.memberEmail })} 
                      title="Add Member" 
                    > 
                      Agregar Miembro
                    </Button>
                  
  
                    <Button 
                      mode="contained" 
                      onPress={handleSubmit} 
                      title="Continue" 
                      disabled={!isValid}> 
                      Continuar
                    </Button>
    
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
    marginBottom: '10px',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
export default AddMembers