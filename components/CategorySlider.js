import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, FONTS } from "../styles/theme.js";
import globalStyles from "../styles/globalElements";
import globalText from "../styles/globalText";
import ProgressCircle from "react-native-progress-circle";
import { WP } from "../utils/resources.js";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function App() {

  return (
    <View style={globalStyles.categoryContainer}>
      <ImageBackground
        resizeMode={"stretch"}
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          padding: WP("5%"),
        }}
        source={require("../assets/images/BackgroundImage.png")}
      >
        {/* --------------- Pie Chart Circle ------------------ */}
        <ProgressCircle
          percent={75}
          radius={50}
          borderWidth={12}
          color="#68AB9F"
          shadowColor="#f2dddd"
          opacity="0"

        >
          <Text style={globalText.labelText}>{"75%"}</Text>
        </ProgressCircle>
        <View style={{ position: "absolute", left: WP("34%"), top: WP("10%")  }}>
          {/* ProgressChart */}
          <Text style={{textAlign:"center",color:"white",fontFamily:"Bold",fontSize:26}}>Monthly Limit</Text>
          <Text style={{textAlign:"center",color:"white",fontFamily:"Bold",fontSize:26}}>$6,400</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
