import React from 'react'
import { SafeAreaView, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Button, Paragraph, Title } from 'react-native-paper'
import Labels from '../i18n/Labels'

const TermsAndConditions = (props) => {
    return (
        <SafeAreaView>
            <View>
                <Image
                    style={styles.banner}
                    source={{
                    uri: Labels.terms_conditions_banner_image,
                    }}
                />
            </View>
            <Title>{Labels.terms_conditions_title}</Title>
            <ScrollView>
                <Paragraph>{Labels.terms_conditions_description}</Paragraph>
            </ScrollView>
            <View>
                <TouchableOpacity>
                    <Button>
                        {Labels.terms_conditions_button_agree_label}
                    </Button>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Button>
                        {Labels.terms_conditions_button_back}
                    </Button>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    banner: {
        height: 150,
    },
})

export default TermsAndConditions