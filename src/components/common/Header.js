import React from 'react'
import { Platform, StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux'

const Header = ({ backButton, textTitle, menuButton }) => {

    const showMenu = () => {
        Actions.drawerOpen()
    }

    const _backButton = () => {
        return(
            <TouchableOpacity style={style.buttonLeft}>
                <Icon color="#FFF" style={style.icon} name="angle-left" size={25} />
            </TouchableOpacity>
        )
    }

    const _menuButton = () => {
        return(
            <TouchableOpacity style={style.buttonRight} onPress={() => showMenu()}>
                <Icon color="#FFF" style={style.icon} name="bars" size={25} />
            </TouchableOpacity>
        )
    }

    return(
        <View style={style.header}>
            {backButton ? _backButton() : null}
            {menuButton ? _menuButton() : null}
            <Text style={style.textTitle}>{ textTitle }</Text>
        </View>
    )

}

const style = StyleSheet.create({
    header: {
        height: 60,
        paddingTop: Platform.OS === 'ios' ? 15 : 0,
        backgroundColor: '#2980b9',
        display: 'flex',
        borderBottomWidth: 0,
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowColor: '#999',
        shadowOpacity: 0.8,
        elevation: 5
    },
    textTitle: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonLeft: {
        position: 'absolute',
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