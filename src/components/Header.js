import React from 'react'
import { Appbar } from 'react-native-paper'

const Header = ({navigation, title, sub_title}) => {

    const backHandler = () => {
        navigation.goBack()
    }

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={backHandler}/>
            <Appbar.Content title={title} subtitle={sub_title} />
            <Appbar.Action icon="magnify" />
            <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
    )
}

export default Header