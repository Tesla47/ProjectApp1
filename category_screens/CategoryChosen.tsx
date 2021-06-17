import React, { Component, useState } from "react";
import { NavigationStackProp } from "react-navigation-stack";
import { Button, Dimensions, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { NavigationContext } from "react-navigation";
import Header from "../components/Header";
import { images } from "../data/ImagesList";
import { FlatList, ScrollView, TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

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
          element
        );}
    });

    return (
      <FlatList
            data={getImages}
            key={"2"}
            numColumns={2}
            contentContainerStyle={styles.homescreen}
            keyExtractor={(item) => item.id.toString()}
            renderItem = {({item}) => 
                        <TouchableOpacity
            activeOpacity={0.8}
            key={item.id}
            onPress={() => {this.onClickImage(item)}}
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
            }
          />
    )
  }
  render() {
    return (
      <View style={{minHeight:"100%",width:"100%"}}>
        <View
        >
          <Header />
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
});
