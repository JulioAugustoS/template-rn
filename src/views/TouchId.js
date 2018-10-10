import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Container, Content } from 'native-base'
import TouchID from 'react-native-touch-id'

import { Button, Header } from '../components'

class TouchId extends Component {

    _autenticar() {

        const optionalConfigObject = {
            unifiedErrors: false
        }

        TouchID.isSupported(optionalConfigObject)
            .then(biometryType => {
                if(biometryType === 'FaceID'){
                    console.log('FaceID is supported.')
                }else{
                    console.log('TouchID is supported.')
                    TouchID.authenticate('Autenticação')
                    .then(success => {
                        Alert.alert('Autenticado com sucesso!')
                    })
                    .catch(error => {
                        Alert.alert('Falha na autenticação!')
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        return(
            <Container>
                <Header textTitle="TouchId" backButton />
                <Content style={{padding: 10}}>
                    <Button titleButton="Autenticar com Touch ID" onPress={this._autenticar} />
                </Content>
            </Container>
        )
    }

}

export default TouchId