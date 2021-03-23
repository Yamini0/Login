import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import BottomSheet from "reanimated-bottom-sheet";
import { NavigationEvents } from "react-navigation";

//import BottomPopUp from "../screens/BottomPopUp";

const { width: WIDTH } = Dimensions.get("window");

function EditProfileScreen({ props, navigation }) {
  const [selectImg, setSelectedImg] = useState("");
  const refvar = useRef(); //botton-screen-reference

  const close = () => refvar.current.snapTo(1);

  //camera
  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted === false) {
      Alert.alert(
        "Permission Needed",
        "Permission to access camera is required!"
      );
      return;
    }
    let camerapicker = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (camerapicker.cancelled === true) {
      return;
    }
    setSelectedImg({ localUri: camerapicker.uri });
    //console.log(camerapicker);
    close();
  };
  //gallery
  const openImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permission.granted === false) {
      Alert.alert(
        "Permission Needed",
        "Permission to access gallery is required!"
      );
      return;
    }
    let picker = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 3],
    });
    if (picker.cancelled === true) {
      return;
    }
    setSelectedImg({ localUri: picker.uri });
    //console.log(picker);
    close();
  };
  //bottomsheet
  const renderContent = () => (
    <View style={styles.panel}>
      <TouchableOpacity style={styles.panelButton} onPress={() => openCamera()}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={() => openImage()}>
        <Text style={styles.panelButtonTitle}>Choose from gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          close();
          close();
        }}
        style={styles.panelButton}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
  const receivedValue = navigation.getParam("onSuccess");

  const updatedData = () => {
    receivedValue(selectImg.localUri);
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={refvar}
        renderContent={renderContent}
        snapPoints={[300, 0]} //up-down
        initialSnap={1}
        enabledGestureInteraction={true}
      />
      <View
        style={{
          margin: 2,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              refvar.current.snapTo(0);
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {selectImg !== "" ? (
                <ImageBackground
                  source={{
                    uri:
                      selectImg.localUri !== null
                        ? selectImg.localUri
                        : "https://source.unsplash.com/daily",
                  }}
                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 50 }}
                ></ImageBackground>
              ) : (
                <ImageBackground
                  source={{ uri: "https://source.unsplash.com/daily" }}
                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 50 }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="camera-outline"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "transparent",
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              )}
            </View>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              marginBottom: 10,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            User-Name
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" size={18} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="grey"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={18} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="grey"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" size={18} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="grey"
            keyboardType="number-pad"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" size={18} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="grey"
            keyboardType="email-address"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" size={18} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="grey"
            autoCorrect={false}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => updatedData()}
        >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  commandButton: {
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
    width: WIDTH - 150,
    justifyContent: "center",
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 20,
    color: "#dddddd",
    flexDirection: "row",
    marginBottom: 15,
  },
});

export default EditProfileScreen;
//"https://source.unsplash.com/daily",
// selectImg.localUri !== null
//       ? selectImg.localUri
//       : "https://source.unsplash.com/daily";
