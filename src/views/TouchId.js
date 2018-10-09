import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Container } from 'native-base'
import TouchID from 'react-native-touch-id'

import { Button, Header } from '../components'

class TouchId extends Component {

    _autenticar() {
        TouchID.authenticate('Demo')
        .then(success => {
            Alert.alert('Autenticado com sucesso!')
        })
        .catch(error => {
            Alert.alert('Falha na autenticação!')
        })
    }

    render(){
        return(
            <Container>
                <Header textTitle="TouchId" backButton />
                <Button titleButton="Autenticar com Touch ID" onPress={this._autenticar} />
            </Container>
        )
    }

}

export default TouchId