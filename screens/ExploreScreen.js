import React from "react";
import { View, StatusBar } from "react-native";

import styles from "../component/FoodUI/ExploreStyles";
import { FoodData as data } from "../apis/FoodData.js";
import CheckOut from "../component/FoodUI/Button/CheckOut";

import FoodHeader from "../component/FoodUI/FoodHeader";
import FoodFooter from "../component/FoodUI/FoodFooter";

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <FoodHeader data={data} />

      <FoodFooter data={data} />
      <CheckOut data={data} />
    </View>
  );
};

export default ExploreScreen;
