import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styles from "./ExploreStyles";
const CheckOut = () => {
  return (
    <View style={styles.viewsize}>
      <Text>Rs.250</Text>
      <TouchableOpacity>
        <Text>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CheckOut;
