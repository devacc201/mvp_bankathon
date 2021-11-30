import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { Paragraph, Title, List } from 'react-native-paper'
// Labels
import Labels from '../i18n/Labels'

const NetworkScreen = (props) => {
    return (
        <SafeAreaView>
            <Title>{Labels.network_title}</Title>
            <Paragraph>{Labels.network_description}</Paragraph>
            <ScrollView>
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

export default NetworkScreen