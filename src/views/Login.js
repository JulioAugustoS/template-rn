import React, { Component } from 'react'
import { StyleSheet, View, AsyncStorage, Alert } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button, Text, Switch } from 'native-base'
import { Actions } from 'react-native-router-flux'
import TouchID from 'react-native-touch-id'

import { Header } from '../components'

class Login extends Component {

    state = {
        usuario: '',
        senha: '',
        touchid: false
    }

    _requireSenha = () => {
        const {usuario, touchid} = this.state
        if(usuario !== '' && touchid !== true){
            return(
                <Item floatingLabel>
                    <Label>Senha</Label>
                    <Input value={this.state.senha} onChangeText={senha => this.setState({senha})} secureTextEntry />
                </Item>
            )
        }
    }

    _autenticar = () => {

        const user = 'Julio'
        const pass = '1234'
        const {usuario, senha, touchid} = this.state
        const optionalConfigObject = {
            unifiedErrors: false
        }

        if(usuario === ''){
            Alert.alert('Informe seu usuario!')
        }else if(touchid !== true){
            if(senha === ''){
                Alert.alert('Informe sua senha!')
            }else{ 
                if(user !== usuario && pass !== senha){
                    Alert.alert('Usuario ou senha incorreto!')
                }else{
                    Actions.user({})
                }
            }
        }else{
            if(user !== usuario){
                Alert.alert('Usuario informado está incorreto!')
            }else{
                TouchID.isSupported(optionalConfigObject)
                .then(biometryType => {
                    if(biometryType === 'FaceID'){
                        console.log('FaceID is supported.')
                    }else{
                        console.log('TouchID is supported.')
                        TouchID.authenticate('Toque no sensor para acessar sua conta.')
                        .then(success => {
                            Alert.alert('Autenticado com sucesso!')
                            Actions.user({})
                        })
                        .catch(error => {
                            this.setState({ touchid: false })
                        })
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }

    }

    render(){
        return(
            <Container>
                <Header textTitle="Login" backButton /> 
                <Content>
                    <Form>
                        <View style={style.form}>
                            <Item floatingLabel>
                                <Label>Usuario</Label>
                                <Input value={this.state.usuario} onChangeText={usuario => this.setState({usuario})} />
                            </Item>
                            {this._requireSenha()}
                        </View>
                        <View style={style.touchId}>
                            <Text style={style.left}>Usar o TouchID</Text>
                            <Switch style={style.right} value={this.state.touchid} onValueChange={touchid => this.setState({touchid})} />
                        </View>
                        <View style={style.viewButton}>
                            <Button block success onPress={() => this._autenticar()}>
                                <Text>Entrar</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        )
    }

}

const style = StyleSheet.create({
    form: {
        paddingRight: 15,
        marginTop: 60
    },
    viewButton: {
        padding: 15
    },
    touchId: {
        marginTop: 20,
        width: '100%',
        height: 30
    },
    left: {
        position: 'absolute',
        left: 15
    },
    right: {
        position: 'absolute',
        right: 15
    }
})

export default Login