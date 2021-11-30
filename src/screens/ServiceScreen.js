import React, { useState } from 'react'
import { SafeAreaView, ScrollView, View, Image, StyleSheet } from 'react-native'
import { Title, Text, Card, Paragraph, Button, BottomNavigation } from 'react-native-paper'
import Labels from '../i18n/Labels'

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const ServiceScreen = (props) => {
    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Music', icon: 'album' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <SafeAreaView>
            <View>
                <Image
                    style={styles.banner}
                    source={{
                    uri: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
                    }}
                />
            </View>
            <View>
                <Title>{ Labels.welcome_title }</Title>
            </View>
            <View>
                <Title>Lisa Simpson</Title>
            </View>

            <View>
                <Text>Mi saldo</Text>
                <Text>BTC 0.0001 ~= 5USD</Text>
            </View>

            <View>
                <Text>Mis Redes</Text>
            </View>
            
            <ScrollView>
                <Card>
                    <Card.Content>
                        <Title>Mi Red 1</Title>
                        <Paragraph>15 mujeres</Paragraph>
                        <Paragraph>BTC 0.0003   Mis Ahorros ~= 17.42USD</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>

                <Card>
                    <Card.Content>
                        <Title>Mi Red 2</Title>
                        <Paragraph>12 mujeres</Paragraph>
                        <Paragraph>BTC 0.0005   Mis Ahorros ~= 29.03USD</Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>
            </ScrollView>
            
            <View>
                <Button>
                    Redes
                </Button>
                <Button>
                   Ahorros 
                </Button>
                <Button>
                    Inversiones
                </Button>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    banner: {
        height: 150,
    },
})

export default ServiceScreen