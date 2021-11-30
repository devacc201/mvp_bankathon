import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { Title, Card, Paragraph, Text, Button } from 'react-native-paper'

const ServiceDetails = () => {
    return (
        <SafeAreaView>
            <Title>Mis Ahorros</Title>
            <Text>Lorem ipsum dolor sit amet</Text>

            <Card>
                <Card.Content>
                    <Title>Mis contribuciones</Title>
                    <Paragraph>Valor BTC o USD</Paragraph>
                </Card.Content>
            </Card>


            <Card>
                <Card.Content>
                    <Title>Total contribuciones</Title>
                    <Paragraph>Valor BTC o USD</Paragraph>
                </Card.Content>
            </Card>


            <Card>
                <Card.Content>
                    <Title>Saldo disponible</Title>
                    <Paragraph>Valor BTC o USD</Paragraph>
                </Card.Content>
            </Card>


            <ScrollView>
                <View>
                    <Text>22/11/2021    USD</Text>
                    <Text>Marge Simpson Mi Red1</Text>
                </View>
                <View>
                    <Text>22/11/2021    USD</Text>
                    <Text>Marge Simpson Mi Red2</Text>
                </View>
                <View>
                    <Text>22/11/2021    USD</Text>
                    <Text>Marge Simpson Mi Red3</Text>
                </View>
            </ScrollView>

            <View>
                <Button>
                    Descargar ahorro
                </Button>
                <Button>
                    Sumar ahorro
                </Button>
                <Button>
                    Volver
                </Button>
            </View>
            
        </SafeAreaView>
    )
}

export default ServiceDetails