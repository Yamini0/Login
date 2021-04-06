import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../ExploreStyles";
const FreeShipBtn = () => {
  return (
    <View>
      <TouchableOpacity style={styles.btncontainer}>
        <Text style={styles.btntext}>FREE SHIP</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FreeShipBtn;
