import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import LogoAnimation from "../component/LogoAnimation";
function Logout() {
  return (
    <SafeAreaView>
      <LogoAnimation />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    backgroundColor: "#fff",
  },
});

export default Logout;
