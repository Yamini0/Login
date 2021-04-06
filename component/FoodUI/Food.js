import React from "react";
import { View, Image, ScrollView, Text } from "react-native";

const Food = (props, { data }) => {
  return (
    <View style={{ height: 180, marginTop: 10 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ height: 150, width: 150 }}>
          <View style={{ flex: 2 }}>
            <Image
              source={props.data.Url1}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover",
                margin: 5,
              }}
            />
            <Text>Japanese Cherry</Text>
          </View>
        </View>
        <View style={{ height: 150, width: 150 }}>
          <View style={{ flex: 2 }}>
            <Image
              source={props.data.Url2}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover",
                margin: 5,
              }}
            />
            <Text>American Cherry</Text>
          </View>
        </View>
        <View style={{ height: 150, width: 150 }}>
          <View style={{ flex: 2 }}>
            <Image
              source={props.data.Url3}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover",
                margin: 5,
              }}
            />
            <Text>Indian Cherry</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Food;
