import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

// Rotas
import Home from '../views/Home'
import Gradient from '../views/Gradient'
import Camera from '../views/Camera'
import TouchId from '../views/TouchId'

class Routers extends Component {

    render(){
        return(
            <Router>
                <Stack key="root">
                    <Scene 
                        drawer
                        hideNavBar
                    >
                        <Scene key="home" component={Home} hideNavBar initial />
                        <Scene key="gradient" component={Gradient} hideNavBar />
                        <Scene key="camera" component={Camera} hideNavBar />
                        <Scene key="touchid" component={TouchId} hideNavBar />
                    </Scene>
                </Stack>
            </Router>
        )
    }

}

export default Routers