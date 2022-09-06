import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import globalText from "../../styles/globalText";
import globalStyles from "../../styles/globalElements";
import { COLORS } from "../../styles/theme";

const WelcomeScreen = (props) => {
  const { navigate } = useNavigation();

  return (
    <View style={globalStyles.container2}>
      <Image
        height={5}
        width={5}
        source={require("../../assets/images/logo2.png")}
        style={globalStyles.logo2Image}
      />

      <Text style={globalText.tinyText}>Welcome to </Text>
      <Text style={globalText.h1}>Halalah </Text>
      <Text style={globalText.tinyText}>Your personal finance manager</Text>

      <Image
        height={100}
        width={100}
        source={require("../../assets/images/welcome.png")}
        style={globalStyles.welcomeImage}
      />

      <TouchableOpacity
        onPress={() => {
          navigate("Login");
        }}
        style={globalStyles.btn2}
      >
        <Text style={globalText.btn2text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigate("Register");
        }}
        style={globalStyles.btn2}
      >
        <Text style={globalText.btn2text}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
