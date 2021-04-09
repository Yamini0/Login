import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";

import styles from "./ExploreStyles";

import PriceContainer from "./PriceContainer";
import FreeShipBtn from "./Button/FreeShipbtn";
import CustomBtn from "./Button/CustomBtn";
import Description from "./Description";
import AddtoCart from "./Button/AddtoCart";
import Food from "./Food";

const FoodFooter = (props, { data }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.title}>{props.data.title}</Text>
      <View style={styles.priceContainer}>
        <PriceContainer data={props.data} />
        <FreeShipBtn />
      </View>

      {/* //CustomBtn */}
      <View style={styles.infoBoxWrapper}>
        <CustomBtn Iconname={"happy-outline"} title={"Safe"} />
        <CustomBtn Iconname={"duplicate-outline"} title={"Quality"} />
        <CustomBtn Iconname={"eyedrop-outline"} title={"Fresh"} />
      </View>

      <Description data={props.data} />

      <AddtoCart />

      <Text style={styles.subtitle}>Similar Products</Text>
      <Food data={props.data} />
    </View>
  );
};
export default FoodFooter;
