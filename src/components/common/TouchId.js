import React from 'react'
import { Alert } from 'react-native'
import { Content } from 'native-base'
import TouchID from 'react-native-touch-id'

const TouchId = () => {

    const _autenticar = () => {

        const optionalConfigObject = {
            unifiedErrors: false
        }

        TouchID.isSupported(optionalConfigObject)
            .then(biometryType => {
                if(biometryType === 'FaceID'){
                    console.log('FaceID is supported.')
                }else{
                    console.log('TouchID is supported.')
                    TouchID.authenticate('Toque no sensor para acessar sua conta.')
                    .then(success => {
                        Alert.alert('Autenticado com sucesso!')
                    })
                    .catch(error => {
                        Alert.alert('Utilize a autenticação por senha!')
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <Content>
            {_autenticar()}
        </Content>
    )

}

export { TouchId }