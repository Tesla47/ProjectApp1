import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
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
  id: number;
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

    if (this.scrolledId === this.state.images.length) {
      this.scrolledId = 1;
    } else {
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
        <Header />
        <ScrollView
          ref={(view) => {
            this.scrollView = view;
          }}
          scrollEnabled={false}
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
      <View
        style={styles.homescreen}
        key={item.id}
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          this.setViewY(item.id, layout.y);
        }}
      >
        <Image
          source={item.url}
          style={{
            width: Dimensions.get("window").width * 0.99,
            height: Dimensions.get("window").height * 0.4,
            borderWidth: 2,
            borderColor: "white",
            resizeMode: "cover",
            marginVertical: Dimensions.get("window").width * 0.1,
            marginHorizontal: Dimensions.get("window").width * 0.02,
          }}
        />
        <View style={styles.TitleTextStyling}>
          <Text
            style={{ fontWeight: "bold", fontSize: 20, textAlign: "justify" }}
          >
            {item.title}
          </Text>
        </View>
        <View style={styles.DescriptionTextStyling}>
          <Text style={{ fontWeight: "normal", textAlign: "center" }}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homescreen: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "white",
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "flex-start",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bottomButton: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 36,
  },
  TitleTextStyling: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "yellow",
  },
  DescriptionTextStyling: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "white",
  },
});
