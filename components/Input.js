import { Text, TextInput, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import globalText from "../styles/globalText";
import { WP } from "../utils/resources";
import globalStyles from "../styles/global";
import Spacer from "./Spacer";
import { COLORS } from "../styles/theme";

export default function Input(props) {
  return (
    <>
      <Text style={globalText.labelText}>{props.label}</Text>
      <Spacer vertical={WP("1%")} />
      <View style={globalStyles.inputContainer}>
        <MaterialIcons name={props.icon} size={24} color={COLORS.brown} />
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          style={globalStyles.inputBox}
        />
      </View>
    </>
  );
}
