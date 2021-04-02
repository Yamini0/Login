import React, { useMemo, useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import FoodItem from "./FoodItem";
import * as data from "../apis/Food.json";
const Food = (props, { data }) => {
  const [dataList, setDataList] = useState(data);
  useEffect(() => {
    setDataList(data);
  });
  //   const renderItem = useMemo(() => ({ item }) => {
  //     return <FoodItem item={item} />;
  //   });
  return (
    <SafeAreaView>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => retrun(<FoodItem item={item} />)}
      />
    </SafeAreaView>
  );
};
export default Food;