import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import styles from "../ExploreStyles";
const CheckOut = (props, { data }) => {
  return (
    <View style={styles.Checkout}>
      <TouchableOpacity style={styles.Checkoutbtn}>
        <Text style={styles.checkoutbtntext1}>{props.data.price}</Text>
        <Text style={styles.checkoutbtntext2}>Check Out</Text>
        <Icon
          name="arrow-forward-outline"
          color="white"
          style={styles.checkouticon}
        />
      </TouchableOpacity>
    </View>
  );
};
export default CheckOut;
