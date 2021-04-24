import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  ProgressViewIOSComponent,
} from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { images } from "../data/AboutPageImages";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/Ionicons";

interface Props {
  navigation: NavigationStackProp;
}
interface State {
  images: any;
  id: number
  
}

export default class About extends Component<Props, State> {
  viewY: any = {};
  scrollView: any;
  scrolledId: number = 1;
  constructor(props) {
    super(props);
    this.state = {
      images: images,
      id: 1,
    };
  }


  static navigationOptions = () => {
    return {
      header: null,
    };
  };

  async componentDidMount() {}

  scrollTo = () => {
      setTimeout(async () => {
        this.scrollView.scrollTo({
          x: 0,
          y: this.viewY[this.scrolledId],
          animated: true,
        });
      }, 100);
      console.log(this.scrolledId,"********")
      if(this.scrolledId === (this.state.images.length)){
        this.scrolledId = 1;
      }
      else{
        this.scrolledId = this.scrolledId + 1;
      }
    
  };

  getAllImages = () => {
    var arr = [];
    this.state.images.forEach((element) => {
      var image = this.loadImage(element);
      arr.push(image);
    });
    return arr;
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <ScrollView
          ref={(view) => {
            this.scrollView = view;
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          {this.getAllImages()}
        </ScrollView>
        {this.scrolledId <= this.state.images.length - 1 && (
          <View style={styles.bottomButton}>
            <View
              style={{
                // width: 40,
                position: "absolute",
                bottom: 50,
                paddingVertical: 0,
                paddingHorizontal: 0,
              }}
            >
              <Icon.Button
                name="chevron-down-outline"
                backgroundColor="#ffa500"
                paddingLeft={8}
                paddingRight={0}
                size={30}
                onPress={() => {
                  this.scrollTo();
                }}
              ></Icon.Button>
            </View>
          </View>
        )}
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
          this.setViewY(item.id, layout.y);
        }}
      >
        <Image
          source={item.url}
          style={{
            width: 80,
            height: 80,
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
  container: {
    flex: 1,
  },
  homescreen: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  bottomButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 36,
  },
});
