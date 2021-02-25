import React from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
    ImageBackground,
    AsyncStorage, Text
} from "react-native";
// import * as Font from 'expo-font';

export default class ProfileScrren extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        }
    }

    render() {
        return (
            <View>

                <ImageBackground
                    source={require("../images/3_bg.jpg")}
                    style={{ width: "100%", height: "100%", opacity: 0.8 }}
                >
                    <View style={{ width: "100%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../assets/atom.png")} style={{ width: 100, height: 100, borderRadius: 30, backgroundColor: "white", opacity: 0.9}} />
                        <Text style={{ color: "white" }}>Loading...</Text>
                    </View>
                </ImageBackground>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 22,
        backgroundColor: "#008BEF",
        alignItems: "center",
        justifyContent: "center"
    }
});


