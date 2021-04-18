import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
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

import Header from "../components/Header";
import { ImageData } from "../data/captionsArray";

var loadImageCount = 6;
export default class PicFlatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadImageCount: 6,
      images: [
        {
          url: require("../assets/pic_1.jpg"),
          id: 1,
          title: ImageData["image1"].title,
          description: ImageData["image1"].description,
        },
        {
          url: require("../assets/pic_2.jpg"),
          id: 2,
          title: "cool image #2",
          description: "Some people sitting in a garden",
        },
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
        { url: require("../assets/pic_25.jpg"), id: 25 },
        { url: require("../assets/pic_26.jpg"), id: 26 },
        { url: require("../assets/pic_27.jpg"), id: 27 },
        { url: require("../assets/pic_28.jpg"), id: 28 },
        { url: require("../assets/pic_29.jpg"), id: 29 },
        { url: require("../assets/pic_30.jpg"), id: 30 },
        { url: require("../assets/pic_31.jpg"), id: 31 },
        { url: require("../assets/pic_32.jpg"), id: 32 },
        { url: require("../assets/pic_33.jpg"), id: 33 },
        { url: require("../assets/pic_34.jpg"), id: 34 },
        { url: require("../assets/pic_35.jpg"), id: 35 },
        { url: require("../assets/pic_36.jpg"), id: 36 },
        { url: require("../assets/pic_37.jpg"), id: 37 },
        { url: require("../assets/pic_38.jpg"), id: 38 },
        { url: require("../assets/pic_39.jpg"), id: 39 },
        { url: require("../assets/pic_40.jpg"), id: 40 },
        { url: require("../assets/pic_41.jpg"), id: 41 },
        { url: require("../assets/pic_42.jpg"), id: 42 },
        { url: require("../assets/pic_43.jpg"), id: 43 },
        { url: require("../assets/pic_44.jpg"), id: 44 },
        { url: require("../assets/pic_45.jpg"), id: 45 },
        { url: require("../assets/pic_46.jpg"), id: 46 },
        { url: require("../assets/pic_47.jpg"), id: 47 },
      ],
    };
  }

  loadMore = () => {
    var ImageCount = this.state.loadImageCount + 12;
    this.setState({ loadImageCount: ImageCount });
  };

  static navigationOptions = () => {
    return {
      header: null,
    };
  };
  renderFooter = () => {
    if (this.state.loadImageCount < this.state.images.length) {
      return (
        <View style={styles.buttonRow}>
          <Icon.Button
            name="sort"
            backgroundColor="#ffa500"
            onPress={() => {
              this.loadMore();
            }}
          >
            <Text style={{ fontSize: 15 }}>View More</Text>
          </Icon.Button>
        </View>
      );
    } else {
      return null;
    }
  };
  render() {
    return (
      <View>
        <View
          style={{
            width: "100%",
            height: undefined,
            paddingTop: StatusBar.currentHeight,
          }}
        >
          <Header />
        </View>
        <View style={styles.outerContainer}>
          <FlatList
            data={this.state.images.slice(0, this.state.loadImageCount)}
            key={"2"}
            numColumns={2}
            contentContainerStyle={styles.homescreen}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={this.renderFooter}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={({}) =>
                  this.props.navigation.navigate("Image Details", {
                    SelectedImage: [this.state.images],
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homescreen: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    height: undefined,
    paddingBottom: Dimensions.get("window").height * 0.1,
    backgroundColor: "white",
  },
  outerContainer: {
    position: "relative",
    marginTop: Dimensions.get("window").height * 0.05,
  },
  buttonRow: {
    margin: 15,
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});
