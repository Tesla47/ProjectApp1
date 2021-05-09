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
} from "react-native";

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
          <View style={styles.AseelLogo}>
            <Image
              source={require("../assets/aseel.png")}
              style={{ height: 100, width: 100 }}
            />
          </View>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Thanks for Shopping! Do you wan to buy this product?
            </Text>
            <View style={styles.ButtonView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Add it to my Cart</Text>
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
    marginTop: 22,
  },
  modalView: {
    paddingBottom: 50,
    height: 180,
    maxHeight: "80%",
    margin: 20,
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
    padding: 10,
    elevation: 2,
    borderColor: 'white'
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  ButtonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 50,
  },
  AseelLogo: {
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    
  },
});

export default App;
