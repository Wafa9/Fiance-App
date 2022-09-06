import React, { useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalElements";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../styles/theme.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import globalText from "../styles/globalText";
import Headerfunc from "../components/Header.js";

const ProfileScreen = () => {
  const { navigate } = useNavigation();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();

  const getUser = async () => {
    try {
      const data = await AsyncStorage.getItem("username");
      if (data !== null) {
        setUser(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEmail = async () => {
    try {
      const data = await AsyncStorage.getItem("email");
      if (data !== null) {
        setEmail(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  getUser();
  getEmail();

  return (
    <>
      <ImageBackground
        source={require("../assets/images/squareBackground.png")}
        style={globalStyles.container3}
      >
        <Headerfunc colors={"white"} title={"Profile"} colors2={"white"} />

        <View style={globalStyles.welcomeBackCard}>
          <FontAwesome size={100} color={"white"} name="user-circle-o" />
          <View style={{ margin: 5 }}>
            <Text style={globalText.btn2text}>Welcome Back</Text>
            <Text style={{ ...globalText.h1B, color: "white" }}>{user}</Text>
          </View>
        </View>

        <View style={{ ...globalStyles.whitecard2, padding: "10%" }}>
          <Text style={globalText.h2B}>Username</Text>
          <Text style={globalText.h2}>{user}</Text>
          <View style={globalStyles.breaker} />
          <Text style={globalText.h2B}>Email</Text>
          <Text style={globalText.h2}>{email}</Text>
          <View style={globalStyles.breaker} />

          <TouchableOpacity
            onPress={() => {
              navigate("Logout");
            }}
            style={{
              ...globalStyles.btn2,
              backgroundColor: COLORS.gray,
              width: "100%",
            }}
          >
            <Text style={globalText.btn2text}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

export default ProfileScreen;
