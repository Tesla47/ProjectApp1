import React, { Component, useState } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/FontAwesome5";
import { images } from "../data/ImagesList";
import BackHeader from "../components/BackHeader";


interface Props {
  navigation: NavigationStackProp;
}

interface State {}

var loadImageCount = 6;
export default class CategoryChosen extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loadImagesCount: 6,
      images: images,
    };
  }

  loadMore = () => {
    var ImageCount = this.state.loadImageCount + 12;
    this.setState({ loadImageCount: ImageCount });
  };

  onClickImage = (element) => {
    this.props.navigation.navigate("Image Details", {
      SelectedImage: element,
      categoryId: element.categoryId,
    });
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

  getImagesList = () => {
    var categoryID = this.props.navigation.getParam("categoryId");
    var getImages = [];
    images.forEach((element) => {
      if (element.categoryId === categoryID) {
        getImages.push(element);
      }
    });

    return (
      <FlatList
        data={getImages}
        key={"2"}
        numColumns={2}
        contentContainerStyle={styles.homescreen}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={this.renderFooter}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={item.id}
            onPress={() => {
              this.onClickImage(item);
            }}
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
    );
  };

  render() {
    return (
      <View style={{ minHeight: "100%", width: "100%" }}>
        <View>
          <BackHeader navigation={this.props.navigation} />
        </View>
        <View style={styles.outerContainer}>{this.getImagesList()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerContainer: {
    position: "relative",
    marginTop: Dimensions.get("window").height * 0.05,
    flex: 1,
  },
  homescreen: {
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
    paddingBottom: Dimensions.get("window").height * 0.1,
    backgroundColor: "white",
  },
  buttonRow: {
    width: "45%",
    marginTop: 99,
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    alignSelf: "center",
  },
  card: {
    height: "25%",
    alignItems: "center",
    marginRight: 5,
    marginLeft: 5,
    position: "relative",
    marginTop: 45,
    justifyContent: "flex-start",
    alignSelf: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
