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
  ProgressViewIOSComponent,
  Button,
} from "react-native";

export default function PicFlatlist(props) {
  var imagesUrl = [
    { url: "../assets/pic_one.jpg", id: 1 },
    { url: "../assets/pic_two.jpg", id: 2 },
    { url: "../assets/pic_three.jpg", id: 3 },
    { url: "../assets/pic_four.jpg", id: 4 },
    { url: "../assets/pic_five.jpg", id: 5 },
    { url: "../assets/pic_six.jpg", id: 6 },
  ];
  const [images, setimages] = useState([
    { url: require("../assets/pic_one.jpg"), id: 1 },
    { url: require("../assets/pic_two.jpg"), id: 2 },
    { url: require("../assets/pic_three.jpg"), id: 3 },
    { url: require("../assets/pic_four.jpg"), id: 4 },
    { url: require("../assets/pic_five.jpg"), id: 5 },
    { url: require("../assets/pic_six.jpg"), id: 6 },
  ]);

  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={images}
        key={"2"}
        numColumns={2}
        contentContainerStyle={styles.homescreen}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("Image Details", {
                Id: item.id,
                allImages: images,
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
              keyExtractor={(item) => item.id}
            />
          </TouchableOpacity>
        )}
      />
      <View style={styles.buttonRow}>
        <Icon.Button name="sort" backgroundColor="#ffa500">
          <Text style={{ fontFamily: "Arial", fontSize: 15 }}>View More</Text> 
          
        </Icon.Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homescreen: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
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
