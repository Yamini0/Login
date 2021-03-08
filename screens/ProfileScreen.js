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
import Carousel from "../component/Carousel";
import { dummyData } from "../data/Data";

// import * as Font from 'expo-font';
const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Carousel data={dummyData} />
    </View>
  );
};

export default ProfileScreen;
