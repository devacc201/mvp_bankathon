import React from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView  } from 'react-native'
import { Title, Button, Text, TextInput, Appbar, ProgressBar, Colors, Paragraph, RadioButton, Checkbox} from 'react-native-paper';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup'
import Header from '../components/Header';



const loginValidationSchema = yup.object().shape({
  duration: yup
    .string()
    //.networkName("Por favor ingrese un nombre")
    .required('Duracion es requerido'),
  minSavings : yup
    .string()
    .required('Ahorro minimo es requerido'),
  volSavings : yup
    .string()
    .required('Campo requerido'),  
  loans : yup
    .string()
    .required('Campo requerido'),    
  decisions : yup
    .string()
    .required('Campo requerido'), 
})


const Rules = (props) => {
  const [checked, setChecked] = React.useState(false);
  const continueHandler = () => {
    props.navigation.navigate('AddMembers')
  }
    return (
      <SafeAreaView>
            <Header 
              navigation={props.navigation}
              title="Crear Red"
            />
      <ScrollView>
        <View>

            <View style={styles.container}>
              <Title style={styles.title}>Reglas</Title> 
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
              <Formik
                initialValues={{ duration: '', minSavings: '', volSavings: '', frecSavings: '', loans: '' }}
                validationSchema={loginValidationSchema}
                onSubmit={values => console.log(values), continueHandler}
              >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, touched }) => (
                  <ScrollView>
                  <Text style={styles.label}>Duración</Text>
                    <TextInput
                      style={styles.input}
                      label="Ingresa la duracion en meses"
                      mode="outlined"
                      onChangeText={handleChange('duration')}
                      onBlur={handleBlur('duration')}
                      value={values.duration}
                      error={errors.duration}
                      touched={touched.duration}
                    />

                    <Text style={styles.label}>Ahorro Minimo</Text>
                    <TextInput
                      style={styles.input}
                      label="Ingresa el valor en USD"
                      mode="outlined"
                      onChangeText={handleChange('minSavings')}
                      onBlur={handleBlur('minSavings')}
                      value={values.minSavings}
                      touched={touched.minSavings}
                    />

                    <Text style={styles.label}>Permitir Ahorro Voluntario</Text>
                    <RadioButton.Group
                     style={styles.row}
                     onValueChange={handleChange('volSavings')}
                     value={values.volSavings}
                     error={errors.volSavings}
                     touched={touched.volSavings}
                     >
                      <View style={styles.row}>
                        <Text>Si</Text>
                        <RadioButton value='Yes'></RadioButton>
                    
                        <Text>No</Text>
                        <RadioButton value='No'></RadioButton>
                      </View>
                    </RadioButton.Group>  
                    
                    {values.volSavings === 'Yes' &&  
                      <View> 
                       <Text style={styles.label}>Frecuencia</Text> 
                        <Checkbox.Item label="Semanal" status="unchecked" status={checked ? 'checked' : 'unchecked'}
                              onPress={() => {
                                  setChecked(!checked);
                        }}/>
                        <Checkbox.Item label="Bimensual" status="unchecked" status={checked ? 'checked' : 'unchecked'}
                              onPress={() => {
                                  setChecked(!checked);
                        }}/>    
                       <Checkbox.Item label="Mensual" status="unchecked" status={checked ? 'checked' : 'unchecked'}
                              onPress={() => {
                                  setChecked(!checked);
                        }}/>                    
                      </View> 

                    }

                    <Text style={styles.label}>Deseas Prestar Dinero (en la red)</Text>
                    <RadioButton.Group
                     style={styles.row}
                     onValueChange={handleChange('loans')}
                     value={values.loans}
                     error={errors.loans}
                     touched={touched.loans}
                     >
                      <View style={styles.row}>
                        <Text>Si</Text>
                        <RadioButton value='Yes'></RadioButton>
                    
                        <Text>No</Text>
                        <RadioButton value='No'></RadioButton>
                      </View>
                    </RadioButton.Group>  

                    <Text style={styles.label}>Decisiones</Text>
                    <RadioButton.Group
                     style={styles.row}
                     onValueChange={handleChange('decisions')}
                     value={values.decisions}
                     error={errors.decisions}
                     touched={touched.decisions}
                     >
                      <View style={styles.row}>
                        <Text>Mayoria</Text>
                        <RadioButton value='Mayority'></RadioButton>
                    
                        <Text>Unanimidad</Text>
                        <RadioButton value='Unanimity'></RadioButton>
                      </View>
                    </RadioButton.Group>  

                       
                    <Button 
                      mode="contained" 
                      onPress={handleSubmit} 
                      title="Continue" 
                      disabled={!isValid}> 
                      Continuar
                    </Button>
    
                  </ScrollView>
                )}
              </Formik>
            </View>     
          
        </View>
        </ScrollView>   
        </SafeAreaView>
           
    )
}

function DetailsScreen() {
    return (
      <View style={style.container}>
        <Text>Details Screen</Text>
      </View>
    );
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center'
  },


});
export default Rules