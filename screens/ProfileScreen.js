import React, { useCallback } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import EditProfileScreen from "./EditProfileScreen";

function ProfileScreen(props, { route, navigation, ChngeImg }) {
  //console.warn("route", route.params);
  const { param } = route.params;
  const editedData = useCallback(() => {
    //console.warn("editedData", props.updatedData);
    props.updatedData();
  }, [ChngeImg]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Image
            source={{ uri: editedData }}
            size={20}
            style={{ width: 120, height: 120 }}
            imageStyle={{ borderRadius: 60 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={styles.title}>User-Name</Text>
            <Text style={styles.caption}>abcdef@xyz.mnb</Text>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Ionicons name={"location-outline"} size={18} color="#777777" />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            New Delhi, India
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name={"call-outline"} size={18} color="#777777" />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            +91-1234567897
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name={"mail-outline"} size={18} color="#777777" />
          <Text style={{ color: "#777777", marginLeft: 20 }}>abc@xyz.nmb</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Text style={styles.title}>3</Text>
          <Text style={styles.caption}>Your Courses</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.title}>6</Text>
          <Text style={styles.caption}>Wishlist</Text>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name={"md-bulb-outline"} size={20} color={"black"} />
            <Text style={styles.menuItemText}>Our Plans</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name={"md-card-outline"} size={20} color={"black"} />
            <Text style={styles.menuItemText}>Payment History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menuItem}>
            <Ionicons
              name={"md-person-add-outline"}
              size={20}
              color={"black"}
            />
            <Text style={styles.menuItemText}>Refer a friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name={"md-star-half-outline"} size={20} color={"black"} />
            <Text style={styles.menuItemText}>Give us feedback</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "#dddddddd",
    borderRightWidth: 1,
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
export default ProfileScreen;
