import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";

var loadImageCount = 6;
export default function PicFlatlist(props) {
  
  const [images, setimages] = useState([
    { url: require("../assets/pic_1.jpg"), id: 1 },
    { url: require("../assets/pic_2.jpg"), id: 2 },
    { url: require("../assets/pic_3.jpg"), id: 3 },
    { url: require("../assets/pic_4.jpg"), id: 4 },
    { url: require("../assets/pic_5.jpg"), id: 5 },
    { url: require("../assets/pic_6.jpg"), id: 6 },
    { url: require("../assets/pic_7.jpg"), id: 7 },
    { url: require("../assets/pic_8.jpg"), id: 8 },
    { url: require("../assets/pic_9.jpg"), id: 9 },
    { url: require("../assets/pic_10.jpg"), id: 10 },
    { url: require("../assets/pic_11.jpg"), id: 11 },
    { url: require("../assets/pic_12.jpg"), id: 12 },
    { url: require("../assets/pic_13.jpg"), id: 13 },
    { url: require("../assets/pic_14.jpg"), id: 14 },
    { url: require("../assets/pic_15.jpg"), id: 15 },
    { url: require("../assets/pic_16.jpg"), id: 16 },
    { url: require("../assets/pic_17.jpg"), id: 17 },
    { url: require("../assets/pic_18.jpg"), id: 18 },
    { url: require("../assets/pic_19.jpg"), id: 19 },
    { url: require("../assets/pic_20.jpg"), id: 20 },
    { url: require("../assets/pic_21.jpg"), id: 21 },
    { url: require("../assets/pic_22.jpg"), id: 22 },
    { url: require("../assets/pic_23.jpg"), id: 23 },
    { url: require("../assets/pic_24.jpg"), id: 24 },
  ]);

  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={images.slice(0,loadImageCount)}
        key={"2"}
        numColumns={2}
        contentContainerStyle={styles.homescreen}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              props.navigation.navigate("Image Details", {
                SelectedImage: [item],
              })
            }
          >
            <Image
              source={item.url}
              style={{
                width: Dimensions.get("window").width * 0.45,
                height: Dimensions.get("window").width * 0.55,
                borderWidth: 2,
                borderColor: "white",
                resizeMode: "cover",
                marginVertical: Dimensions.get("window").width * 0.02,
                marginHorizontal: Dimensions.get("window").width * 0.02,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function renderFooter(){
  return (        
        <View style={styles.buttonRow}>
          <Icon.Button
            name="sort"
            backgroundColor="#ffa500"
            onPress={() => {loadImageCount = loadImageCount + 12;
            PicFlatlist();}}
          >
            <Text style={{ fontSize: 15 }}>
              View More
            </Text>
          </Icon.Button>
        </View>
      )
}

const styles = StyleSheet.create({
  homescreen: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    // paddingBottom: Dimensions.get("window").height * 0.3,
  },
  outerContainer: {
    position: "relative",
  },
  buttonRow: {
    margin: 15,
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});
