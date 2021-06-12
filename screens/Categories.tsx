import React from "react";
import { Button, StyleSheet, Text, View, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Header";

const Seperator = () => <View style={styles.separator} />;
const BuyUsACoffee = (props) => {
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
          onPress={() => {
            Linking.openURL("https://www.buymeacoffee.com/splendor");
          }}
        >
          <Text style={{ fontSize: 15 }}>
            Herat: The "Academy" of Prince BaySunghur (1420-1433)
          </Text>
        </Icon.Button>
        <Seperator />
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
            Herat: The "Academy" of Prince BaySunghur (1420-1433)
          </Text>
        </Icon.Button>
        <Seperator />
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
            Herat: The "Academy" of Prince BaySunghur (1420-1433)
          </Text>
        </Icon.Button>
        <Seperator />
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
            Herat: The "Academy" of Prince BaySunghur (1420-1433)
          </Text>
        </Icon.Button>
        <Seperator />

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
            Herat: The "Academy" of Prince BaySunghur (1420-1433)
          </Text>
        </Icon.Button>
        <Seperator />

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
            Herat: The "Academy" of Prince BaySunghur (1420-1433)
          </Text>
        </Icon.Button>
        <Seperator />

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
            Herat: The "Academy" of Prince BaySunghur (1420-1433)
          </Text>
        </Icon.Button>
        <Seperator />

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
            Herat: The "Academy" of Prince BaySunghur (1420-1433)
          </Text>
        </Icon.Button>
        <Seperator />

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
            Herat: The "Academy" of Prince BaySunghur (1420-1433)
          </Text>
        </Icon.Button>
        <Seperator />

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
            Herat: The "Academy" of Prince BaySunghur (1420-1433)
          </Text>
        </Icon.Button>
        
      </View>
    </View>
  );
};

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
    justifyContent: "flex-start",
    flexDirection: "column",
    alignContent: "flex-start",
    alignSelf: "flex-start",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
export default BuyUsACoffee;
