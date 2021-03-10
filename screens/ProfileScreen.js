import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
  Animated,
  Easing,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import logo from "../assets/atom.png";
import Carousel from "../component/Carousel";
import MusicItem from "../component/MusicItem";
import { dummyData } from "../apis/Data";
import { MusicData } from "../apis/MusicData";
import Music from "../component/Music";

// import * as Font from 'expo-font';
const ProfileScreen = ({ navigation }) => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    getMusicFromAPI();
  }, []);

  // const newsResponse = async() =>{
  //     const response = await newAPI.get('top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1')
  //     console.log(response.data)
  // }

  function getMusicFromAPI() {
    MusicData.get("search?term=Michael+jackson")
      .then(async function (response) {
        setMusic(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!music) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={music.results}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return <MusicItem item={item} />;
        }}
      />
    </View>
  );
};

export default ProfileScreen;
/*<View>
      <Carousel data={dummyData} />
    </View>*/
