import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

// Rotas
import Home from '../pages/Home'

class Routers extends Component {

    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene 
                        drawer
                        hideNavBar
                    >
                        <Scene key="home" component={Home} hideNavBar hideTabBar />
                    </Scene>
                </Stack>
            </Router>
        )
    }

}

export default Routers