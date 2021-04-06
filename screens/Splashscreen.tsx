import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function SplashScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([
    
    {
      image: require("../assets/pic_1.jpg"),
      title: "Easy To Search",
      description: "Afghanistan Art",
    },
    {
      image: require("../assets/pic_2.jpg"),
      title: "Easy To Access",
      description: "Afghanistan Art",
    },
    {
      image: require("../assets/pic_3.jpg"),
      title: "Easy To Manage",
      description: "Afghanistan Art",
    },
  ]);
  const nextStep = () => {
    setCurrentStep(currentStep >= 2 ? 2 : currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep <= 0 ? 0 : currentStep - 1);
  };
  return (
    <View style={styles.container}>
      <Image
        source={steps[currentStep].image}
        style={styles.stepImage}
        resizeMode="cover"
      />
      <View style={styles.stepIndicatorView}>
        {steps.map((step, index) => {
          return (
            <View
              style={{
                ...styles.stepIndicator,
                width: currentStep === index ? 40 : 30,
                backgroundColor: currentStep === index ? "#ffa500" : "gray",
              }}
            ></View>
          );
        })}
      </View>
      <Text style={styles.title}>{steps[currentStep].title}</Text>
      <Text style={styles.description}>{steps[currentStep].description}</Text>
      <View style={styles.navigationView}>
        {currentStep > 0 ? (
          <TouchableOpacity
            onPress={() => prevStep()}
            style={{
              ...styles.navigationBtn,
              borderTopEndRadius: 20,
              borderBottomEndRadius: 20,
            }}
          >
            <Text style={styles.navigationBtnTxt}>Back</Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}

        <TouchableOpacity
          onPress={() => nextStep()}
          style={{
            ...styles.navigationBtn,
            borderTopStartRadius: 20,
            borderBottomStartRadius: 20,
          }}
        >
          <Text style={styles.navigationBtnTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  stepImage: {
    width: "90%",
    height: "50%",
    marginVertical: 30,
  },
  stepIndicatorView: {
    flexDirection: "row",
  },
  stepIndicator: {
    height: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
  },
  description: {
    textAlign: "center",
    paddingHorizontal: 10,
  },
  navigationView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  navigationBtn: {
    backgroundColor: "#ffa500",
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  navigationBtnTxt: {
    color: "white",
    fontWeight: "bold",
  },
});
