import React, { Component } from 'react'
import { View } from 'react-native'

// Components
import { Header } from '../components'

class Home extends Component {

    render(){
        return(
            <View>
                <Header textTitle="Home" backButton menuButton />
            </View>
        )
    }

}

export default Home