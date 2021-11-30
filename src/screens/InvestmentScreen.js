import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Title, Card, Paragraph, Text, Button } from 'react-native-paper'


const InvestmentScreen = (props) => {
    return (
        <SafeAreaView>
            <Title>Inversiones</Title>
            <Text>Lorem ipsum dolor sit amet</Text>
            
            <View>
                <Text>Mis proyectos</Text>
                <Text>Otras inversiones</Text>
            </View>


            <Card>
                <Card.Content>
                    <Title>Mis ganancias</Title>
                    <Paragraph>Valor BTC o USD</Paragraph>
                </Card.Content>
            </Card>


            <Card>
                <Card.Content>
                    <Title>Total inversiones</Title>
                    <Paragraph>Valor BTC o USD</Paragraph>
                </Card.Content>
            </Card>


            <Card>
                <Card.Content>
                    <Title>Rendimientos generados</Title>
                    <Paragraph>Valor BTC o USD</Paragraph>
                </Card.Content>
            </Card>


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

            <View>
                <Button>
                    Crear proyecto
                </Button>
                <Button>
                    Volver
                </Button>
            </View>
            
        </SafeAreaView>
    )
}

export default InvestmentScreen