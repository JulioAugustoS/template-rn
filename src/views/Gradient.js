import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'

import Style from '../assets/styles'
import { Header } from '../components'

class Gradient extends Component {

    render(){
        return(
            <LinearGradient colors={['#00B4DB', '#0083B0']} style={Style.Container}>
                <Header textTitle="Gradient" backButton />
            </LinearGradient>
        )
    }

}

export default Gradient