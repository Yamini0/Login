import React, { useMemo, useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
  ScrollView,
} from "react-native";
import FoodItem from "./FoodItem";
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
          </View>
        </View>
        <View style={{ height: 150, width: 150 }}>
          <View style={{ flex: 2 }}>
            <Image
              source={props.data.Url2}
              style={{
                flex: 1,
                width: null,
                margin: 5,
                height: null,
                resizeMode: "cover",
              }}
            />
          </View>
        </View>
        <View style={{ height: 150, width: 150 }}>
          <View style={{ flex: 2 }}>
            <Image
              source={props.data.Url3}
              style={{
                flex: 1,
                width: null,
                margin: 5,
                height: null,
                resizeMode: "cover",
              }}
            />
          </View>
        </View>
        <View style={{ height: 150, width: 150 }}>
          <View style={{ flex: 2 }}>
            <Image
              source={props.data.Url1}
              style={{
                flex: 1,
                width: null,
                margin: 5,
                height: null,
                resizeMode: "cover",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Food;
