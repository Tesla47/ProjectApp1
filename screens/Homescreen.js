import React from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions} from "react-native";
import ChooseMiniature from "./ChosenMiniatureScreen";
import Card from "../components/card";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  // console.log(props)
  return (
    
          <ScrollView>

            <View style={styles.pic_1_2}>
              {/* <Text>Home</Text>
            <Button
              title="Chose Miniature"
              onPress={() => {
                props.navigation.navigate({
                  routeName: "ChosenMiniature",
                });
              }}
            /> */}
              <View style={styles.imageContainer}>
                <Image
                  source={require("../assets/pic_one.jpg")}
                  style={styles.image_prop}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.imageContainer}>
                <Image
                  source={require("../assets/pic_two.jpg")}
                  style={styles.image_prop}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.pic_3_4}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/pic_three.jpg")}
                    style={styles.image_prop}
                    resizeMode="cover"
                  />
                </View>

                <View style={styles.imageContainer}>
                  <Image
                    source={require("../assets/pic_four.jpg")}
                    style={styles.image_prop}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </View>
          </ScrollView>
  );
};

const styles = StyleSheet.create({
  pic_1_2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
//     // flexWrap: "wrap",
//     // padding: 5,
//     // width: '100%',
//     // height: '100%'
//   },
  pic_3_4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // padding: 5,
    // width: '100%',
    // height: '100%'
  },

  imageContainer: {
    width: 200,
    height: 200,
    // height: Dimensions.get("window").height / 3 - 12,
    // width: Dimensions.get("window").height / 2 - 12,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "white",
    overflow: "hidden",
    marginVertical: 30,
    marginHorizontal: 3,
    // width: "80%",
    // height: 200,
    // borderRadius: 35,
    // borderWidth: 3,
    // borderColor: "white",
    // overflow: "hidden",
    // marginVertical: 10,
    // resizeMode: 'cover'
    // // flexDirection: "row",
    // // flexWrap: "wrap",
  },
  image_prop: {
    width: "100%",
    height: "100%",
  },
});

export default HomeScreen;
