import "react-native-gesture-handler";
import React from "react";
import { View, Icon, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  createAppContainer,
  createSwitchNavigator,
  DrawerActions,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

//importing Screens
import Login1 from "./screens/Login1";
import ProfileScreen from "./screens/ProfileScreen";
import SettingScreen from "./screens/SettingScreen";
import CoachScreen from "./screens/CoachScreen";
import ExploreScreen from "./screens/ExploreScreen";

const LoginStack = createStackNavigator({
  Login: {
    screen: Login1,
    navigationOptions: {
      tabBarLabel: "Login Page",
      color: "#1A5CAD",
      //tabBarActiveTintColor
    },
  },
});
const ProfileStack = createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "Profile",
      tabBarLabel: "Profile",
      color: "#1A5CAD",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("openDrawer")}>
          <Ionicons name={"md-menu"} size={30} color={"black"} />
        </TouchableOpacity>
      ),
      //tabBarActiveTintColor
    },
  },
});

//bottomTab
const BottomTabPage = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarIcon: () => {
          return <Ionicons name={"md-home"} size={22} color={"white"} />;
        },
        tabBarColor: "#526F35",
      },
    },
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: () => {
          return <Ionicons name={"md-search"} size={22} color={"white"} />;
        },
        headerTitle: "Explore",
        tabBarColor: "#4A7023",
      },
    },
    Coach: {
      screen: CoachScreen,
      navigationOptions: {
        tabBarIcon: () => {
          return <Ionicons name={"md-book"} size={22} color={"white"} />;
        },
        tabBarColor: "#3B5323",
      },
    },

    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarIcon: () => {
          return <Ionicons name={"md-person"} size={22} color={"white"} />;
        },
        tabBarColor: "#636F57",
      },
    },
  },
  {
    initialRouteName: "Profile",
    activeColor: "white",
    inactiveColor: "black",
    barStyle: { backgroundColor: "black" },
  }
);
const DrawerNavigator = createDrawerNavigator({
  Settings: {
    screen: BottomTabPage,
  },
});

const AppNavigator = createSwitchNavigator({
  Login: { screen: LoginStack },
  Profile: {
    screen: DrawerNavigator,
    path: "onBoarding",
  },
});

export default createAppContainer(AppNavigator);
