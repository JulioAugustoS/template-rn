import React, { Component } from 'react'
import { Container } from 'native-base'

import { Header, TouchId } from '../components'

class TouchIdView extends Component {

    render(){
        return(
            <Container>
                <Header textTitle="TouchId" backButton />
                <TouchId />
            </Container>
        )
    }

}

export default TouchIdView