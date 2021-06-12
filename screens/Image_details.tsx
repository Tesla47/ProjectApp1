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
import { images } from "../data/ImagesList";

var count = 0;
interface Props {
  navigation: NavigationStackProp;
}
interface State {
  images: any;
  selectedImage: any;
}
export default class ImageDetails extends Component<Props, State> {
  viewY: any = {};
  scrollView: any;
  constructor(props) {
    super(props);
    this.state = {
      images: images,
      selectedImage: this.props.navigation.getParam("SelectedImage"),
    };
  }

  static navigationOptions = () => {
    return {
      header: null,
    };
  };

  async componentDidMount() {
    await this.scrollTo();
  }

  scrollTo = async () => {
    setTimeout(async () => {
      this.scrollView.scrollTo({
        x: this.viewY[this.state.selectedImage.id],
        y: 0,
        animated: true,
      });
    }, 100);
  };

  getAllImages = () => {
    var arr = [];
    var sId = this.state.selectedImage.id;
    this.state.images.forEach((element) => {
      var image = this.loadImage(element);
      arr.push(image);
    });
    return arr;
  };

  onSwipeDown = () =>{
    this.setState({visible:false});
  }

  render() {
    return (
      <View>
        <BackHeader navigation={this.props.navigation} />
        <ScrollView
          ref={(view) => {
            this.scrollView = view;
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
        >
          {this.getAllImages()}
        </ScrollView>
      </View>
    );
  }
  setViewY = (key, layout) => {
    this.viewY[key] = layout;
  };
  loadImage = (item) => {
    return (
      <ScrollView
        style={styles.homescreen}
        contentContainerStyle={{
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
        }}
        key={item.id}
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          this.setViewY(item.id, layout.x);
        }}
      >
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
      </ScrollView>
    );
  };
}
const styles = StyleSheet.create({
  homescreen: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
    
  },
});
