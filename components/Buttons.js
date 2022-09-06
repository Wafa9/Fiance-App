import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../styles/theme.js";
import globalText from "../styles/globalText";
import globalStyles from "../styles/globalElements";

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={globalStyles.wideButton}>
        <Text style={globalText.wideButtonText}>
          {text}
          <AntDesign name="caretright" size={10} color={COLORS.green} />
        </Text>
      </View>
    </TouchableOpacity>
  );
}
