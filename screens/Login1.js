import React, { Component, useState } from 'react';
import { View, ImageBackground , Image, TextInput, Dimensions, TouchableOpacity, StyleSheet, Text, Button, Animated} from 'react-native'

//react-native logo
import logo from "../assets/atom.png";

//for icons
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

//screen-width
const{ width: WIDTH } = Dimensions.get('window')
const Login=({navigation})=>{
    const [username, setusername] = useState(null);
 const [password, setpassword] = useState(null);

  
    return (
      
      <View style={styles.container}>
         <Image style={styles.image3} source={require("./f.png")}></Image>
         <Image style={styles.image4} source={require("./t.png")}></Image>
         <Image style={styles.image5} source={require("./g.png")}></Image>
             <Text style={styles.description}>
          CAFE WIFI
        </Text>
        
           <ImageBackground style={styles.backgroundImage} source={require("./b.jpg")}>
           </ImageBackground>
           <Image style={styles.image} source={require("./smile.png")}></Image>
          
        <TextInput
       value={username}
          onChangeText={(username) =>{
            setusername( username )}
            }
          placeholder={'Username'}
          style={styles.input}
        />

        {username===""? (<Text>UserName Can't be empty!</Text>):null}
        
        <TextInput
          value={password}
          onChangeText={(password) =>setpassword( password )}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
     
{password===""? (<Text>password can't be empty!</Text>):null}
       
       
        <Button
          title={'Login'}
          style={styles.input}
          onPress={()=>{
            if(username!='' && username!= null &&password!='' && password!=null){
              navigation.navigate('Navigation')}
            }
        }
          />
        </View>
    );
}


  export default Login;

showPass = () =>{
    if(this.state.press == false) {
        this.setState({ showPass: false, press: true})
    }else{
        this.setState({ showPass: true, press: false})
    }
}

validate_field = () => {
    const{username, password} = this.state
    if(username === "" && password === ""){
        alert("Please login with valid Credentials.")
        return false
    }else if( password == "" ){
        alert("Password is empty.")
        return false
    }else if(username == ""){
        alert("Username is empty.")
        return false
    }
    return true
}

making_alert = () => {
    if(this.validate_field()){
        return (this.props.navigation.navigate( 'ProfileScreen' ))
    }
}


return (
    <ImageBackground source={require("../images/Login_bg.jpg")} style={styles.backgroundContainer} >
    <View style={styles.LogoContainer}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.LogoText}>React-Native</Text>
    </View>
    

    <View style={styles.inputContainer}>
    <Ionicons name={'md-person-outline'} size={22} color={'black'}
        style={styles.inputIcon}  />
    <TextInput 
        style={styles.input}
        placeholder={'Username'}
        placeholderTextColor={'black'}
        underlineColorAndroid='transparent'
        onChangeText={ (value) => this.validate({username : value})}
        onChangeText ={ (value) => this.setState({username : value})}
    />
    <Animated>
    <Text style={styles.ErrorMsg}>Invalid Username.</Text>
    </Animated>
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
        onChangeText ={ (value) => this.setState({password : value}) }
    />
    <Animated>
    <Text style={styles.ErrorMsg}>Password should be 6 character long.</Text>
    </Animated>

    <TouchableOpacity style={styles.btnEye}
        onPress={this.showPass.bind(this)}>
        <Ionicons name={this.state.press == false ? 'md-eye-off-outline' : 'md-eye-outline'} size={22} 
        color={'black'}
        />
    </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.btnLogin}
       onPress={() => this.making_alert()}>
        <Text style={styles.Text}>Login</Text>
    </TouchableOpacity>

</ImageBackground>
);   

export default Login;