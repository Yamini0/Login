import React from "react";
import { View, Image, ScrollView, Text } from "react-native";

const Food = (props, { data }) => {
  const list = () => {
    return props.data.products.map((element) => {
      return (
        <View style={{ height: 150, width: 150 }}>
          <View style={{ flex: 2 }}>
            <Image
              source={element.productImg}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "cover",
                margin: 5,
              }}
            />
            <Text>{element.productName}</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={{ height: 180, marginTop: 10 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {list()}
      </ScrollView>
    </View>
  );
};
export default Food;
