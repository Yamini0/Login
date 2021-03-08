import React from "react";
import { Text } from "react-native";

function ReferFriend() {
  return <Text style={styles.backgroundContainer}>Refer-a-friend-screen</Text>;
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

export default ReferFriend;
