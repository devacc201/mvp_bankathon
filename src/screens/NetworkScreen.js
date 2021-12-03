import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { Paragraph, Title, List } from 'react-native-paper'
// Custom Components
import Header from '../components/Header'
// Labels
import Labels from '../i18n/Labels'

const NetworkScreen = (props) => {
    return (
        <SafeAreaView>
            <Header 
                navigation={props.navigation}
                title="Mis Redes"
            />
            <ScrollView style={styles.container}>
            <Title>{Labels.network_title}</Title>
            <Paragraph>{Labels.network_description}</Paragraph>
                <List.Section>
                    <List.Subheader style={styles.title}>Redes</List.Subheader>
                    <List.Item title="Red 1" left={() => <List.Icon icon="network" />} />
                    <List.Item
                        title="Red 2"
                        left={() => <List.Icon color="#000" icon="network" />}
                    />
                </List.Section>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
 container: {
    padding: 20,
 },
 title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
});

export default NetworkScreen