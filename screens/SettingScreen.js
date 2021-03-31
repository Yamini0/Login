import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
  Animated,
  Easing,
} from "react-native";
import LogoAnimation from "../component/LogoAnimation";
import logo from "../assets/atom.png";
// import * as Font from 'expo-font';
const SettingScreeen = ({ navigation }) => {
  return (
    <ImageBackground style={styles.backgroundContainer}>
      <View style={styles.LogoContainer}>
        <LogoAnimation />
        <Text style={styles.LogoText}>SettingScreeen</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    backgroundColor: "yellow",
  },
  LogoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
});

export default SettingScreeen;
