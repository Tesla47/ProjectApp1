import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ProgressViewIOSComponent,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
import { NavigationStackProp } from "react-navigation-stack";
import HomeScreen from "../screens/Homescreen";
import About from "../screens/About";


interface Props {
  navigation: NavigationStackProp;
}
interface State {}
class BackButtonTrigger extends React.Component<Props, State> {
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
  },
});
export default BackButtonTrigger;
