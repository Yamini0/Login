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
import logo from "../assets/atom.png";
import LogoAnimation from "../component/LogoAnimation";
// import * as Font from 'expo-font';
const ExploreScreen = ({ navigation }) => {
  return (
    <ImageBackground style={styles.backgroundContainer}>
      <View style={styles.LogoContainer}>
        <Animated.LogoAnimation.Image
          source={logo}
          style={styles.logo}
          style={{ height: 100, width: 100, transform: [{ rotate: spin }] }}
        />
        <Text style={styles.LogoText}>ExploreScreeen</Text>
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
    backgroundColor: "#fafaff",
  },
  LogoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
});

export default ExploreScreen;
