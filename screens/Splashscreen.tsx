import AsyncStorage from "@react-native-community/async-storage";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,  } from "react-native";
import HomeScreen from '../screens/Homescreen';

export default function SplashScreen(props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([
    {
      image: require("../assets/SplashScreen_image_1.gif"),
      backgroundColor: "#d7e0eb",
      // title: "Culture Preserving",
      // description: `The Goal of our App is to preserve the fragile history of Afghanistan by using modern technologies. This will help us to have a compact, easy to use interface for our cultural heritage.`,
    },
    {
      image: require("../assets/SplashScreen_image_2.gif"),
      backgroundColor: "#d4b88c",
      // title: "Easy To Use",
      // description: `This Application is design with the idea in mind to make as easy to access and easy to use. No internet required after downloading and no registration needed`,
    },
    {
      image: require("../assets/SplashScreen_image_3.gif"),
      // title: "Getting Started",
      backgroundColor: "#69aabb",
      // description: `The next screen includes all the catalogue in detail. You can sort and search for a particular miniature through the main window. Also, you can use categories and settings to personalize the app to your taste. Enjoy`,
    },
  ]);
  const nextStep = async () => {
    setCurrentStep(currentStep >= 2 ? 2 : currentStep + 1);
    if (currentStep >= 2) {
      await AsyncStorage.setItem("firstReview","1")
      props.navigation.navigate({ routeName: "Home" });
      
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep <= 0 ? 0 : currentStep - 1);
  };


  return (
    <View
      style={[styles.container, { backgroundColor: steps[currentStep]["backgroundColor"]}]}
    >
      <Image
        source={steps[currentStep].image}
        style={styles.stepImage}
        resizeMode="cover"
      />
      <View style={styles.stepIndicatorView}>
        {steps.map((step, index) => {
          return (
            <View
              key={Math.random()}
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
    alignItems: "center",
    justifyContent: "center",
  },
  stepImage: {
    width: "95%",
    height: "70%",
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
