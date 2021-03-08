import React from "react";
import { Text } from "react-native";

function TalkTrainer() {
  return <Text style={styles.backgroundContainer}>Talk-to-trainer-screen</Text>;
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

export default TalkTrainer;
