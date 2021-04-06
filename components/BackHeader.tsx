import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Dimensions, ProgressViewIOSComponent } from "react-native";

import BackButtonTrigger from "./BackButtonTrigger";
import { NavigationStackProp } from "react-navigation-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";


interface Props{
  navigation: NavigationStackProp
}

interface State{

}

class BackHeader extends React.Component<Props,State> {

  constructor(props: Props){
    super(props)  
  }
  render() {
    return (
      <View style={styles.header}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <TouchableOpacity
          style={styles.trigger}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <View style={{ width: 40, height: 40 }}>
            <Ionicons name="arrow-back" size={35} color={"grey"} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    top: Dimensions.get("window").height * 0.04,
    height: undefined,
    width: "100%",
    backgroundColor: "white",
    shadowRadius: 6,
    elevation: 8,
    padding: 5,
    borderRadius: 2,
  },
  trigger: {
    marginLeft: 10,
  },
});

export default BackHeader;