import React from "react";
import { Text, View, Image } from "react-native";
//import { Icon, Drawer, Item as FormItem } from "native-base";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'
import FirstPage from "./screens/FirstPage";

const AppNavigator = createStackNavigator(
    {

        FirstPage: {
            screen: FirstPage,
            navigationOptions: {
                tabBarLabel: "FirstPage",
                // color:"#1A5CAD",
                //tabBarActiveTintColor
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="ios-home" size={20} style={{ color: "white" }} />
                )
            }
        },

    },
    {
        tabBarOptions: {
            activeTintColor: "#74442D",
            inactiveTintColor: "gray",
            style: {
                backgroundColor: "white"
            }
        },

        initialRouteName: "FirstPage"
    }
);

export default createAppContainer(AppNavigator)