//import "react-native-gesture-handler";
import React from "react";
import { Text, View, Image } from "react-native";
//import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
//import { createDrawerNavigator } from "@react-navigation/drawer";

import Login1 from "./screens/Login1";
import ProfileScreen from "./screens/ProfileScreen";
import SettingScreen from "./screens/SettingScreen";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login1,
      navigationOptions: {
        tabBarLabel: "Login Page",
        color: "#1A5CAD",
        //tabBarActiveTintColor
      },
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: "ProfileScreen",
        color: "#1A5CAD",
        //tabBarActiveTintColor
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#74442D",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
      },
    },

    initialRouteName: "Login",
  }
);

const BottonTabPage = createMaterialBottomTabNavigator(
  {
    Login: { screen: Login1 },
    ProfileScreen: { screen: ProfileScreen },
    SettingScreen: { screen: SettingScreen },
  },
  {
    initialRouteName: "ProfileScreen",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" },
  }
);
//const Drawer = createDrawerNavigator();

export default createAppContainer(AppNavigator, BottonTabPage);
{
  /*

const AppNavigator = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppNavigator.Navigator headerMode="none">
        <AppNavigator.Screen name="Login" component={Login1} />
        <AppNavigator.Screen name="ProfileScreen" component={ProfileScreen} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}
*/
}
