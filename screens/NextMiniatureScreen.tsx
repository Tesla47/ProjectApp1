import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const NextMiniatureScreen = (props) => {
  return (
    <View style={styles.homescreen}>
      <Text>Next Miniature Screen</Text>
      <Button
        title='Home Screen'
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  
  },
});

export default NextMiniatureScreen;
