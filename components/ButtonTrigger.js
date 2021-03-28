import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

import { DrawerActions } from "react-navigation-drawer";
import HomeScreen from '../screens/Homescreen';

class ButtonTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => {
          this.props.navigation.navigate(HomeScreen);
        }}
      >
        <Ionicons name="arrow-back" size={35} color={"grey"} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 10,
  },
});

export default withNavigation(ButtonTrigger);
