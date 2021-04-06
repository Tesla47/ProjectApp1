import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
} from "react-native";

import { NavigationStackProp } from "react-navigation-stack";
import Header from "../components/Header";
import BackHeader from "../components/BackHeader";

var count = 0;
interface Props {
  navigation: NavigationStackProp;
}
interface State {
  images: any;
}
export default class ImageDetails extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.navigation.getParam("SelectedImage"),
    };
  }

  static navigationOptions = () => {
    return {
      header: null,
    };
  };

  render() {
    return (
      <View>
        <View style={{ width: "100%", height: undefined }}>
          <BackHeader navigation={this.props.navigation} />
        </View>
        <FlatList
          data={this.state.images}
          numColumns={1}
          contentContainerStyle={styles.homescreen}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => this.loadImage(item)}
        />
      </View>
    );
  }
  loadImage = (item) => {
    return (
      <View style={styles.homescreen}>
        <Image
          source={item.item.url}
          style={{
            width: Dimensions.get("window").width * 0.99,
            height: Dimensions.get("window").height * 0.7,
            borderWidth: 2,
            borderColor: "white",
            resizeMode: "cover",
            marginVertical: Dimensions.get("window").width * 0.1,
            marginHorizontal: Dimensions.get("window").width * 0.02,
          }}
        />
        <Text>{item.item.title}</Text>
        <Text>{item.item.description}</Text>
      </View>
    );
  };
}
const styles = StyleSheet.create({
  homescreen: {
    position: "relative",
    width: Dimensions.get("window").width,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});

