import React from "react";
import { Text, View, Image } from "react-native";
//import { Icon, Drawer, Item as FormItem } from "native-base";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'
import Login1 from "./screens/Login1";
import ProfileScreen from "./screens/ProfileScreen";

const AppNavigator = createStackNavigator(
    {

        Login: {
            screen: Login1,
            navigationOptions: {
                tabBarLabel: "Login Page",
                color: "#1A5CAD",
                //tabBarActiveTintColor 
            }
        },
        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: "ProfileScreen",
                color: "#1A5CAD",
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

        initialRouteName: "Login"
    }
);

export default createAppContainer(AppNavigator)