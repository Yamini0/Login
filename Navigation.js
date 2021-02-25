import React from "react";
import { Text, View, Image } from "react-native";
//import { Icon, Drawer, Item as FormItem } from "native-base";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'
import LoginPage from "./screens/LoginPage";
import ProfileScreen from "./screens/ProfileScreen"

const AppNavigator = createStackNavigator(
    {

        LoginPage: {
            screen: LoginPage,
            navigationOptions: {
                tabBarLabel: "Login Page",
                color:"#1A5CAD",
                //tabBarActiveTintColor
                
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: "ProfileScreen",
                color:"#1A5CAD",
                //tabBarActiveTintColor
                
            }
        },

    },
    {
        tabBarOptions: {
            activeTintColor: "#74442D",
            inactiveTintColor: "grey",
            style: {
                backgroundColor: "white"
            }
        },

        initialRouteName: "LoginPage"
    }
);

export default createAppContainer(AppNavigator)