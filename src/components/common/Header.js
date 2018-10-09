import React from 'react'
import { Platform, StyleSheet, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'

const Header = ({backButton, textTitle, menuButton}) => {

    const showDrawer = () => {
        Actions.drawerOpen()
    }

    const _backButton = () => {
        return(
            <TouchableOpacity style={[styles.buttonLeft, styles.icon]} onPress={() => Actions.pop({})}>
                <Icon color="#FFF" name="angle-left" size={25} />
            </TouchableOpacity>
        )
    }

    const _menuButton = () => {
        return(
            <TouchableOpacity style={[styles.buttonRight, styles.icon]} onPress={() => showDrawer()}>
                <Icon color="#FFF" name="bars" size={25} />
            </TouchableOpacity>
        )
    }

    return(
        <LinearGradient colors={['#3498db', '#2980b9']} style={styles.header}>
            {backButton ? _backButton() : null}
            <Text style={styles.textTitle}>{textTitle}</Text>
            {menuButton ? _menuButton() : null}
        </LinearGradient>
    )

}

const styles = StyleSheet.create({
    header: {
        height: 60,
        display: 'flex',
        borderBottomWidth: 0,
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: '#000',
        shadowOpacity: 0.8,
        elevation: 5,
        paddingTop: Platform.OS === 'ios' ? 15 : 0
    },
    textTitle: {
        textAlign: 'center',
        color: '#FFF'
    },
    buttonLeft: {
        position: 'absolute',
        zIndex: 2,
        left: 10
    },
    buttonRight: {
        position: 'absolute',
        right: 10
    },
    icon: {
        paddingTop: Platform.OS === 'ios' ? 15 : 0
    }
})

export { Header }