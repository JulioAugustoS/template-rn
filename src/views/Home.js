import React, { Component } from 'react'
import { Platform, ScrollView } from 'react-native'
import { Container } from 'native-base'
import { Actions } from 'react-native-router-flux'

// Components
import { Header, Button } from '../components'

class Home extends Component {

    render(){

        const touchId = () => {
            return(
                <Button titleButton="TouchId" onPress={() => Actions.touchid({})} />
            )
        }

        return(
            <Container>
                <Header textTitle="Home" menuButton />
                <ScrollView style={{padding:10}}>
                    <Button titleButton="Gradient" onPress={() => Actions.gradient({})} />
                    {Platform.OS === 'ios' ? touchId() : null}
                    <Button titleButton="Login" onPress={() => Actions.login({})} />
                </ScrollView>
            </Container>
        )
    }

}

export default Home