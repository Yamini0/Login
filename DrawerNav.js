import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import SettingScreen from "./screens/SettingScreen";

const DrawerNavigator = createDrawerNavigator({
  Settings: {
    screen: SettingScreen,
  },
});
export default createAppContainer(DrawerNavigator);
