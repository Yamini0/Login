import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import styles from "../ExploreStyles";

const CustomBtn = (props, { Iconname, title }) => {
  return (
    <TouchableOpacity style={styles.infoBox}>
      <Icon name={props.Iconname} size={32} color={"#3ea806"} />
      <Text style={styles.caption}> {props.title} </Text>
    </TouchableOpacity>
  );
};
export default CustomBtn;
