import React from 'react'
import { Container } from 'native-base'
import { RNCamera } from 'react-native-camera'

import Style from '../assets/styles'

const Camera = () => {

    return(
        <Container>
            <RNCamera
                ref={cam => {
                    this.camera = cam
                }}
                style={Style.Preview}
            />
        </Container>
    )

}

export default Camera