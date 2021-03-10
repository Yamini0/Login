import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
//import NewsCard from '../Components/NewsCard'
import { MusicData } from "../apis/MusicData";
import MusicItem from "./MusicItem";

const Music = ({ navigation }) => {
  // const [news, setNews] = useState([])
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

export default Music;
