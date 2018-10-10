import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'

import { Header } from '../components'

class User extends Component {

    render(){
        return(
            <Container>
                <Header textTitle="Area Restrita" backButton />
                <Content>
                    <Text>Usuario Logado</Text>
                </Content>
            </Container>
        )
    }

}

export default User