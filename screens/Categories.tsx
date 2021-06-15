import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Linking,  } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Header";



interface Props {
  navigation: NavigationStackProp;
}

interface State {
  
}

export default class categories extends Component<Props, State>  {
  

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View style={styles.buttonRow}>
          <Icon.Button
            name="th-large"
            raised={true}
            backgroundColor="#ffa500"
            size={30}
            onPress={() => this.props.navigation.navigate("CategoryChosen")}
          >
            <Text style={{ fontSize: 15 }}>
              Herat: The "Academy" of Prince Bay Sunghur (1420-1433)
            </Text>
          </Icon.Button>
          <Separator />
          <Icon.Button
            name="th-large"
            raised={true}
            backgroundColor="#ffa500"
            size={30}
            onPress={() => {
              Linking.openURL("https://www.buymeacoffee.com/splendor");
            }}
          >
            <Text style={{ fontSize: 15 }}>
              Venice, Istanbul, and Herat (15th Century)
            </Text>
          </Icon.Button>
          <Separator />
          <Icon.Button
            name="th-large"
            raised={true}
            backgroundColor="#ffa500"
            size={30}
            onPress={() => {
              Linking.openURL("https://www.buymeacoffee.com/splendor");
            }}
          >
            <Text style={{ fontSize: 15 }}>
              The Age of Bihzad of Herat (1465-1535)
            </Text>
          </Icon.Button>
          <Separator />
          <Icon.Button
            name="th-large"
            raised={true}
            backgroundColor="#ffa500"
            size={30}
            onPress={() => {
              Linking.openURL("https://www.buymeacoffee.com/splendor");
            }}
          >
            <Text style={{ fontSize: 15 }}>
              Bihzaad's disciple (16th Century)
            </Text>
          </Icon.Button>
          <Separator />

          <Icon.Button
            name="th-large"
            raised={true}
            backgroundColor="#ffa500"
            size={30}
            onPress={() => {
              Linking.openURL("https://www.buymeacoffee.com/splendor");
            }}
          >
            <Text style={{ fontSize: 15 }}>
              The Gathering of the Artists in Kabul Under the Humayun son of
              Babur and the Foundation of the Mughal School (Mid 16th Century)
            </Text>
          </Icon.Button>
          <Separator />

          <Icon.Button
            name="th-large"
            raised={true}
            backgroundColor="#ffa500"
            size={30}
            onPress={() => {
              Linking.openURL("https://www.buymeacoffee.com/splendor");
            }}
          >
            <Text style={{ fontSize: 15 }}>
              The Babur-Nama in Mughal Art (Late 16th Century)
            </Text>
          </Icon.Button>
          <Separator />

          <Icon.Button
            name="th-large"
            raised={true}
            backgroundColor="#ffa500"
            size={30}
            onPress={() => {
              Linking.openURL("https://www.buymeacoffee.com/splendor");
            }}
          >
            <Text style={{ fontSize: 15 }}>
              The Story of Humayu in Mughal Art (Late 16th Century)
            </Text>
          </Icon.Button>
          <Separator />

          <Icon.Button
            name="th-large"
            raised={true}
            backgroundColor="#ffa500"
            size={30}
            onPress={() => {
              Linking.openURL("https://www.buymeacoffee.com/splendor");
            }}
          >
            <Text style={{ fontSize: 15 }}>
              The Story of Akbar and the Mystical Meaning of the Paintings of
              Babur, Humayun and Himself that he Commissioned (Late 16th
              Century)
            </Text>
            <Text style={{ fontSize: 15 }}>
              Babur, Humayun and Himself that he Commissioned
            </Text>
            <Text style={{ fontSize: 15 }}>(Late 16th Century)</Text>
          </Icon.Button>
          <Separator />

          <Icon.Button
            name="th-large"
            raised={true}
            backgroundColor="#ffa500"
            size={30}
            onPress={() => {
              Linking.openURL("https://www.buymeacoffee.com/splendor");
            }}
          >
            <Text style={{ fontSize: 15 }}>
              The Coming of the Europeans- The Portuguese and English (16th and
              17th Centuries)
            </Text>
          </Icon.Button>
          <Separator />

          <Icon.Button
            name="th-large"
            raised={true}
            backgroundColor="#ffa500"
            size={30}
            onPress={() => {
              Linking.openURL("https://www.buymeacoffee.com/splendor");
            }}
          >
            <Text style={{ fontSize: 15, alignSelf: "center" }}>
              The Imperial Image- From the Moghals to Ahmad Shah Baba (17th and
              18th Centuries)
            </Text>
          </Icon.Button>
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
    

