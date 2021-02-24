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

export default class Splash extends React.Component {
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
                    source={require("../images/travel-2.jpg")}
                    style={{ width: "100%", height: "100%" }}
                >
                    <View style={{ backgroundColor: "rgba(255, 0, 0, 0.2)", width: "100%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../assets/logo.png")} style={{ width: 100, height: 100, borderRadius: 30 }} />
                        <Text style={{ color: "white" }}>Travel..</Text>
                        <Text style={{ color: "white" }}>Explore..</Text>
                        <Text style={{ color: "white" }}>Memories..</Text>
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


