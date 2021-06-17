import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Linking,  } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Header";
import { categoriesList } from "../data/ImagesList";



interface Props {
  navigation: NavigationStackProp;
}

interface State {
  
}




export default class categories extends Component<Props, State> {
  getCategories = () => {
    var arr = []
    categoriesList.forEach(element => {
      arr.push(
        <View key={element.id}>
        <Icon.Button
            name="th-large"
            raised={true}
            backgroundColor="#ffa500"
            size={30}
            onPress={() => this.props.navigation.navigate("CategoryChosen",{categoryId:element.id})}
          >
            <Text style={{ fontSize: 15 }}>
              {element.title}
            </Text>
          </Icon.Button>
          <Separator />
          </View>
      )
    });
    return arr;
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.buttonRow}>
          {this.getCategories()}
        </View>
      </View>
    );
  }
}


const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homescreen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  buttonRow: {
    width: "100%",
    marginTop: 50,
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    alignSelf: "center",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
    

