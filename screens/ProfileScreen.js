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
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import logo from "../assets/atom.png";
import DrawerNavigator from "../DrawerNav";

// import * as Font from 'expo-font';
const ProfileScreen = ({ navigation }) => {
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  });

  return (
    <ImageBackground style={styles.backgroundContainer}>
      <TouchableOpacity
        style={{ alignItems: "flex-end", margin: 16 }}
        onPress={() => navigation.navigate("openDrawer")}
      >
        <Ionicons name={"md-menu"} size={30} color={"black"} />
      </TouchableOpacity>
      <View style={styles.LogoContainer}>
        <Animated.Image
          source={logo}
          style={styles.logo}
          style={{ height: 100, width: 100, transform: [{ rotate: spin }] }}
        />
        <Text style={styles.LogoText}>ProfileScreeen</Text>
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

export default ProfileScreen;
