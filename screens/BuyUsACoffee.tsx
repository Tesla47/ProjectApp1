import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ImageStore,
  Dimensions,
} from "react-native";

var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.AseelLogo}>
              <Image
                source={require("../assets/aseel.png")}
                style={{ height: screenWidth * 0.25, width: screenWidth * 0.25 }}
              />
            </View>
            <View>
              <Text style={styles.modalTextTitle}>
                  Thanks for Shopping!
              </Text>
            </View>
            <Text style={styles.modalTextBody}>
              Do you wan to buy this product to you cart or just go to checkout page?
            </Text>
            <View style={styles.ButtonView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Add it to My Cart</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Purchase Product</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: screenHeight * 0.025,
  },
  modalView: {
    height: undefined,
    marginHorizontal: screenWidth * 0.05,
    marginVertical: screenHeight * 0.02,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    // alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    paddingHorizontal: screenWidth * 0.025,
    paddingVertical: screenHeight * 0.012,
    elevation: 2,
    borderColor: "white",
  },
  buttonOpen: {
    backgroundColor: "#007399",
  },
  buttonClose: {
    backgroundColor: "#007399",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTextTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16
  },
  modalTextBody: {
    marginBottom: 12,
    textAlign: "center",
    fontSize: 13
   
  },
  ButtonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
  },
  AseelLogo: {
    justifyContent: "center",
    alignContent: "center",
    top: -60,
    alignSelf:"center",
    elevation:15,
    overflow:'hidden'
  },
});

export default App;
