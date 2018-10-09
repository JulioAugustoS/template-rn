import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Container } from 'native-base'
import { Actions } from 'react-native-router-flux'

// Components
import { Header, Button } from '../components'

class Home extends Component {

    render(){
        return(
            <Container>
                <Header textTitle="Home" menuButton />
                <ScrollView style={{padding:10}}>
                    <Button titleButton="Gradient" onPress={() => Actions.gradient({})} />
                    <Button titleButton="Camera" onPress={() => Actions.camera({})} />
                    <Button titleButton="TouchId" onPress={() => Actions.touchid({})} />
                </ScrollView>
            </Container>
        )
    }

}

export default Home