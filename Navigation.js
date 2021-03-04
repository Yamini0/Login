import "react-native-gesture-handler";
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

//importing Screens
import Login1 from "./screens/Login1";
import ProfileScreen from "./screens/ProfileScreen";
import SettingScreen from "./screens/SettingScreen";
import CoachScreen from "./screens/CoachScreen";
import ExploreScreen from "./screens/ExploreScreen";

const AppStack = createStackNavigator({
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
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: "ProfileScreen",
      color: "#1A5CAD",
      //tabBarActiveTintColor
    },
  },
  CoachScreen: {
    screen: CoachScreen,
    navigationOptions: {
      tabBarLabel: "ProfileScreen",
      color: "#1A5CAD",
      //tabBarActiveTintColor
    },
  },
});

const BottomTabPage = createMaterialBottomTabNavigator(
  {
    Profile: { screen: AppStack },
    Setting: { screen: SettingScreen },
    Coach: { screen: CoachScreen },
    Explore: { screen: ExploreScreen },

    // SettingScreen: { screen: SettingScreen },
  },
  {
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" },
  }
);

const AppNavigator = createSwitchNavigator({
  AppStack: {
    screen: BottomTabPage,
    path: "onBoarding",
  },
});

/*const AppDrawerNavigator = createDrawerNavigator({
  Profile: ProfileScreen,
  setting: SettingScreen,
});*/
export default createAppContainer(AppNavigator);

//const AppNavigator = createStackNavigator();
{
  /*
export default function Navigation() {
  return (
    /*<NavigationContainer>
      <AppNavigator.Navigator headerMode="none">
        <AppNavigator.Screen name="Login" component={Login1} />
        <AppNavigator.Screen name="ProfileScreen" component={ProfileScreen} />
      </AppNavigator.Navigator>
    </NavigationContainer>

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Navigator name="login" component={ProfileScreen} />
        <Drawer.Navigator name="profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  ),
  */
}
