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
import { images } from "../data/ImagesList";

var loadImageCount = 6;
export default class PicFlatlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadImageCount: 6,
      images: images,
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
                    SelectedImage: item,
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
