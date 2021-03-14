import React from "react";
import { StyleSheet, Text, View, Button} from "react-native";

const ChooseMiniature = (props) => {
  return (
    <View style={styles.homescreen}>
      <Text>Choose Miniatures</Text>
      <Button
        title="Next Miniature"
        onPress={() => {
          props.navigation.navigate({
            routeName: "NextMiniature",
          });
        }}
      />
      <Button title= "Go Back" onPress={() => {
        props.navigation.goBack();
      }}/>
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

export default ChooseMiniature;
