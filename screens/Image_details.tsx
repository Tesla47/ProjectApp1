import React, { Component, useState } from "react";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";

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
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { images } from "../data/ImagesList";

var count = 0;
interface Props {
  navigation: NavigationStackProp;
}
interface State {
  images: any;
  selectedImage: any;
  visible: boolean
}
export default class ImageDetails extends Component<Props, State> {
  viewY: any = {};
  scrollView: any;
  selectedImage: any;
  constructor(props) {
    super(props);
    this.state = {
      images: images,
      selectedImage: this.props.navigation.getParam("SelectedImage"),
      visible: false,
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

  onClickImage = async (item) => {
    this.selectedImage = [
      {
        url: "",
        props: {
          source: item.url,
        },
      },
    ];
    this.setState({ visible: true });
  };

  scrollTo = async () => {
    setTimeout(async () => {
      this.scrollView.scrollTo({
        x: this.viewY[this.state.selectedImage.id],
        y: 0,
        animated: true,
      });
    }, 100);
  };

  onSwipeDown = () => {
    this.setState({ visible: false });
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

          <Modal visible={this.state.visible} transparent={true}>
            <ImageViewer
              enableSwipeDown
              onSwipeDown={this.onSwipeDown}
              imageUrls={this.selectedImage}
            />
          </Modal>
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
        <TouchableOpacity
          onPress={() => {
            this.onClickImage(item);
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
        </TouchableOpacity>
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
