import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TextInput,
  Button,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Animated,
  Text,
  Dimensions,
} from "react-native";
import { Formik } from "formik";
import logo from "../assets/atom.png";
//for icons
import { Ionicons } from "@expo/vector-icons";
const { width: WIDTH } = Dimensions.get("window");

//animation
import * as Animatable from "react-native-animatable";

const LoginScreen = ({ navigation }) => {
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <ImageBackground
      source={require("../images/Login_bg.jpg")}
      style={styles.backgroundContainer}
    >
      <View style={styles.LogoContainer}>
        <Animated.Image
          source={logo}
          style={styles.logo}
          style={{ height: 100, width: 100, transform: [{ rotate: spin }] }}
        />
        <Text style={styles.LogoText}>React-Native</Text>
      </View>

      <View style={{ margin: 12 }}>
        <Formik
          initialValues={{ email: "", password: "" }} //initial state of email & password_change
          onSubmit={(values) => console.warn(values)} //values store the user input for us
        >
          {(
            props //a function returning jsx
          ) => (
            <SafeAreaView>
              <View style={styles.inputContainer}>
                <Ionicons
                  name={"md-person-outline"}
                  size={22}
                  color={"black"}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder={"E-mail"}
                  placeholderTextColor={"black"}
                  onChangeText={props.handleChange("email")}
                  value={props.values.email} //jb onsubmit is done this will chnge the email field with initial value
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons
                  name={"md-lock-closed-outline"}
                  size={22}
                  color={"black"}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder={"Password"}
                  placeholderTextColor={"black"}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password} //jb onsubmit is done this will chnge the email field with initial value
                />
              </View>
              <View style={styles.inputContainer}>
                <TouchableOpacity
                  style={styles.btnLogin}
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.Text}>Login</Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
          )}
        </Formik>
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
  },
  LogoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  LogoText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 12,
  },
  input: {
    width: WIDTH - 175,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "white",
    color: "black",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },

  btnLogin: {
    width: WIDTH - 295,
    marginLeft: 90,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#e95203",
    justifyContent: "center",
    marginTop: 20,
    padding: 25,
    alignItems: "center",
  },
  text: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default LoginScreen;
