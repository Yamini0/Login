import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  Animated,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { Ionicons as Icon } from "@expo/vector-icons";
import styles from "../component/ExploreStyles";
import { FoodData as data } from "../apis/FoodData.js";
import Food from "../component/Food";
import CheckOut from "../component/CheckOut";

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={styles.header}>
        <View style={styles.image}>
          <Image source={data.image} />
        </View>
        <View style={styles.dotView}>
          <Animated.View style={styles.dot} />
          <Animated.View style={styles.dot} />
          <Animated.View style={styles.dot} />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>{data.Title}</Text>
        <View style={styles.priceContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.price}>{data.OfferPrice}</Text>
            <Text style={styles.canceledprice}>{data.Price} </Text>
          </View>
          <TouchableOpacity style={styles.btncontainer}>
            <Text style={styles.btntext}>FREE SHIP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View style={styles.infoBox}>
            <Icon name="happy-outline" size={32} color={"#3ea806"} />
            <Text style={styles.caption}>Safe</Text>
          </View>
          <View style={styles.infoBox}>
            <Icon name="duplicate-outline" size={32} color={"#3ea806"} />
            <Text style={styles.caption}>Quality</Text>
          </View>
          <View style={styles.infoBox}>
            <Icon name="eyedrop-outline" size={32} color={"#3ea806"} />
            <Text style={styles.caption}>Fresh</Text>
          </View>
        </View>
        <View>
          <Text
            style={styles.description}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {data.Body}
          </Text>
          <Text style={styles.viewmore}>View more</Text>
        </View>
        <View style={styles.addtocart}>
          <Icon name="heart" size={42} color="#fd2d59" />
          <TouchableOpacity style={styles.addtocartbtn}>
            <Text style={styles.addcartbtntext}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>Similar Products</Text>
          <Food data={data} />
        </View>
      </View>
      <CheckOut data={data} />
    </View>
  );
};

export default ExploreScreen;
