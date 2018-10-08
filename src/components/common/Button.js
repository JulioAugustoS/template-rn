import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const Button = ({ titleButton }) => {

    return(
        <View>
            <TouchableOpacity>
                <Text>{ titleButton }</Text>
            </TouchableOpacity>
        </View>
    )

}

export { Button } 