import React from 'react'
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native'
import { Title, Text, Button, Paragraph } from 'react-native-paper'
// Custom Components
import Header from '../components/Header'
// Labels
import Labels from '../i18n/Labels'


const ProjectScreen = (props) => {
    return (
 
            <View>
            <Header 
                navigation={props.navigation}
                title="Red 2"
            />
            <ScrollView style={styles.container}>
                <Title style={styles.title}>Proyecto Uno</Title>
                <Title style={styles.label}>Solicita</Title>
                <Text style={styles.text}>Lorem ipsum</Text>
                
                <Title style={styles.label}>Nombre</Title>
                <Text style={styles.text}>Lorem ipsum</Text>

                <Title style={styles.label}>Propósito</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
             
                <Title style={styles.label}>Monto solicitado</Title>
                <Text style={styles.text}>80 USD</Text>

                <Title style={styles.label}>Fecha último pago</Title>
                <Text style={styles.text}>01/01/2022</Text>

                <Title style={styles.label}>Ayudas no monetarias</Title>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>

                <Button 
                      style={styles.button}
                      mode="contained" 
                      title="Aprobar"
                >      
                      Aprobar
                </Button>


                <Button 
                     style={styles.button}
                      mode="outlined" 
                      title="Aprobar"
                >      
                      Rechazar
                </Button>
            
            
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
        marginBottom: '10px',
      },
      title: {
        fontWeight: 'bold',
        textAlign: 'center'
      },
      button:{
        margin:15,
        paddingBottom:5
     }
    });
export default ProjectScreen