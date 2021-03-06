import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import * as data from "../../apis/FoodData";
import styles from "./ExploreStyles";
const FoodItem = (props, { item }) => {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity onPress={() => {}}>
        {/* <Image
          source={require("../images/Login_bg.jpg")}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        /> */}
        <View style={{ flex: 1 }}>
          <Text style={{ color: "red" }}> {item.Name1} </Text>
          <Text style={{ color: "blue" }}>{item.Name2} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default FoodItem;
