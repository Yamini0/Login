import React, { Component } from 'react';
import { View, ImageBackground , Image, TextInput, Dimensions, TouchableOpacity, StyleSheet, Text } from 'react-native'

//react-native logo
import logo from "../assets/atom.png";

//for icons
import { Ionicons } from '@expo/vector-icons';

//screen-width
const{ width: WIDTH } = Dimensions.get('window')


export default class LoginPage extends Component {
    constructor(){
        super()
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () =>{
        if(this.state.press == false) {
            this.setState({ showPass: false, press: true})
        }else{
            this.setState({ showPass: true, press: false})
        }
    }
    render() {
        return(
            <ImageBackground source={require("../images/Login_bg.jpg")} style={styles.backgroundContainer} >
                <View style={styles.LogoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.LogoText}>React-Native</Text>
                </View>
                
                <View style={styles.inputContainer}>
                <Ionicons name={'md-person-outline'} size={22} color={'black'}
                    style={styles.inputIcon} />
                <TextInput 
                    style={styles.input}
                    placeholder={'Username'}
                    placeholderTextColor={'black'}
                    underlineColorAndroid='transparent'
                />
                </View>

                <View style={styles.inputContainer}>
                <Ionicons name={'md-lock-closed-outline'} size={28} color={'black'}
                    style={styles.inputIcon} />
                <TextInput 
                    style={styles.input}
                    placeholder={'Password'}
                    secureTextEntry={this.state.showPass}
                    placeholderTextColor={'black'}
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={styles.btnEye}
                    onPress={this.showPass.bind(this)}>
                    <Ionicons name={this.state.press == false ? 'md-eye-off-outline' : 'md-eye-outline'} size={22} 
                    color={'black'}
                    />
                </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnLogin}
                   onPress={
                       () => this.props.navigation.navigate(' ProfileScreen ')}>
                    <Text style={styles.Text}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.6
    },
    LogoContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },
    logo: {
        width: 120,
        height: 120,
    },
    LogoText: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    inputContainer: {
        marginTop: 12
    },
    input: {
        width: WIDTH - 175,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'white',
        color: 'black',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 37
    },
    btnLogin: {
        width: WIDTH - 295,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#fc7a00',
        justifyContent: 'center',
        marginTop:20,
        padding: 25,
        alignItems: 'center'
    },
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 32,
        textAlign: 'center',
        fontWeight: "bold"
    }
});
