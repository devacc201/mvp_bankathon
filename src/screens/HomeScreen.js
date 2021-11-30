import React from 'react'
import { View, TouchableOpacity, Touchable } from 'react-native'
import { Text } from 'react-native-paper'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = (props) => {
    const communityHandler = () => {
        props.navigation.navigate('CreateNetwork')
    }
    return (
        <SafeAreaView>
            <TouchableOpacity>
                <Card>
                    <Card.Title 
                        title="Invitacion"
                    />
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Content>
                        <Paragraph>Unirse a comunidad por Invitacion</Paragraph>
                    </Card.Content>
                    {/* <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions> */}
                </Card>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={communityHandler}
            >
                <Card>
                    <Card.Title 
                        title="Comunidad"
                    />
                    <Card.Cover source={{ uri: 'https://picsum.photos/750' }} />
                    <Card.Content>
                        <Paragraph>Crear o Buscar comunidad</Paragraph>
                    </Card.Content>
                    {/* <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions> */}

                </Card>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default HomeScreen