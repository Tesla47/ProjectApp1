import React, { Component, useState } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { Button, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationContext } from "react-navigation";
import Header from "../components/Header";
import { images } from "../data/ImagesList";
import { ScrollView, TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  navigation: NavigationStackProp;
}

interface State {

}

export default class CategoryChosen extends Component<Props, State> {

  constructor(props){
    super(props);

  }

  onClickImage = (element) => {
    console.log(element,"*************");
    this.props.navigation.navigate("Image Details", {
      SelectedImage: element,categoryId:element.categoryId
    })
  }

  getImagesList = () => {
    var categoryID = this.props.navigation.getParam("categoryId")
    var getImages = []
    images.forEach(element => {
      if (element.categoryId === categoryID){
        getImages.push(
          <TouchableOpacity
            activeOpacity={0.8}
            key={element.id}
            onPress={() => {this.onClickImage(element)}}
          >
            <Image
              source={element.url}
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
        );}
    });
    return getImages;
  }
  render() {
    return (
      <View>
        <View>
          <Header />
        </View>
        <ScrollView style={styles.container}>
        <View style={styles.outerContainer}>
            {this.getImagesList()}
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  outerContainer: {
    position: "relative",
    marginTop: Dimensions.get("window").height * 0.05,

  },
  homescreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    width: "45%",
    marginTop: 99,
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    alignSelf: "center",
  },
});
