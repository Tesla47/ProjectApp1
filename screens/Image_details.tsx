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
import BackHeader from "../components/BackHeader";
import { ScrollView } from "react-native-gesture-handler";
import { ImageData } from "../data/captionsArray";


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
      images: [
        this.props.navigation.getParam("SelectedImage"),
      ],
    };
  }

  static navigationOptions = () => {
    return {
      header: null,
    };
  };

  getAllImages = () => {
    var arr = []
    this.state.images.forEach(element => {
      var image = this.loadImage(element);
      arr.push(image);
    });
    return arr;
  }
  

  render() {
    return (
      <View>
          <BackHeader navigation={this.props.navigation} />
        <ScrollView showsHorizontalScrollIndicator = {false} pagingEnabled horizontal>
          {this.getAllImages()}
        </ScrollView>
      </View>
    );
  }
  loadImage = (item) => {
    return (
      <View style={styles.homescreen} key={item.id}>
          <Image
            source={item.url}
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
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
      </View>
    );
  };
}
const styles = StyleSheet.create({
  homescreen: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: Dimensions.get('screen').height * 0.8,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});

