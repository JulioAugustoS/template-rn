import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import Style from '../../assets/styles'

const Button = ({titleButton, onPress}) => {

    return(
        <TouchableOpacity style={Style.Button} onPress={onPress}>
            <Text style={Style.ButtonText}>{ titleButton }</Text>
        </TouchableOpacity>
    )

}

export { Button } 