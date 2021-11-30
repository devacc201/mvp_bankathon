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
            <Title>{Labels.network_title}</Title>
            <Paragraph>{Labels.network_description}</Paragraph>
            <ScrollView style={styles.container}>
                <List.Section>
                    <List.Subheader>Redes</List.Subheader>
                    <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
                    <List.Item
                        title="Second Item"
                        left={() => <List.Icon color="#000" icon="folder" />}
                    />
                </List.Section>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
 container: {
    padding: 20,
 }
});

export default NetworkScreen