import React from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { Title, Text, Button } from 'react-native-paper'

const ProjectScreen = (props) => {
    return (
        <SafeAreaView>
            <Title>Proyecto Uno</Title>
            <Text>Lorem ipsum dolor sit amet</Text>
            
            <View>
                <Text>Detalles</Text>
                <Text>Historia</Text>
            </View>

            <ScrollView>
                <View>
                    <Text>Nombre Proyecto Uno</Text>
                    <Text>Marge Simpson Mi Red1</Text>
                    <Text>USD 50    Aprobar</Text>
                </View>
                <View>
                    <Text>Nombre Proyecto Dos</Text>
                    <Text>Marge Simpson Mi Red2</Text>
                    <Text>USD 750    Aprobar</Text>
                </View>
                <View>
                    <Text>Nombre Proyecto Tres</Text>
                    <Text>Marge Simpson Mi Red3</Text>
                    <Text>USD 150    Aprobar</Text>
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default ProjectScreen