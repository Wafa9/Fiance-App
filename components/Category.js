import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, SIZES, FONTS } from "../styles/theme.js";
import { FontAwesome5 } from "@expo/vector-icons";
import globalStyles from "../styles/globalElements";
import globalText from "../styles/globalText";

const Category = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(props.style || null);
  const [name, setName] = useState(props.name || null);

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ marginLeft: SIZES.margin, marginRight: SIZES.margin }}
    >
      <View
        style={{
          ...globalStyles.categoryPage,
          backgroundColor: backgroundColor,
        }}
      >
        <View />
        <View style={{ alignSelf: "center", marginTop: 18 }}>
          <FontAwesome5 name={props.title} size={20} color="white" />
        </View>
      </View>
      <Text style={{ ...globalText.h3, alignSelf: "center" }}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Category;
