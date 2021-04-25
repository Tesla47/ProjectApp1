import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/FontAwesome";

const ContactUs = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.card}>
        <View style={styles.TextinCardStyling}>
          <Text style={{ fontSize: 16, textAlign: "justify" }}>
            Report issues/bugs or give us feedback through the following:{" "}
          </Text>
          <View style={styles.buttonRow}>
            <Icon.Button
              name="envelope"
              raised={true}
              backgroundColor="#ffa500"
              paddingLeft={8}
              paddingRight={8}
              size={30}
              onPress={() => {
                Linking.openURL(
                  "mailto:sayedshabeerhashimi@gmail.com?subject=Need Help!&body=Hi, I need help..."
                );
              }}
            >
              <Text style={{ fontSize: 15 }}>Email us</Text>
            </Icon.Button>
          </View>
        </View>
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
    paddingTop: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  card: {
    height: "50%",
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
  TextinCardStyling: {
    paddingRight: 5,
    paddingLeft: 5,
  },
  buttonRow: {
    width: '50%',
    margin: 25,
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default ContactUs;
