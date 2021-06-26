import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationStackProp } from "react-navigation-stack";



interface Props {
  navigation: NavigationStackProp;
}
interface State {

}


export default class BackButtonTrigger extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => {
          this.props.navigation.goBack();
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
    backgroundColor: 'blue'
  },
});