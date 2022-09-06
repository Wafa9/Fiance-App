import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../styles/theme";
import { WP } from "../utils/resources";

export default function Button(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.absolute ? styles.absoluteContainer : styles.btnContainer}
    >
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  absoluteContainer: {
    backgroundColor: COLORS.pink,
    padding: WP("3%"),
    width: WP("90%"),
    alignItems: "center",
    borderRadius: WP("5%"),
    alignSelf: "center",
    position: "absolute",
    bottom: WP("5%"),
  },
  btnContainer: {
    backgroundColor: COLORS.gray,
    padding: WP("3%"),
    borderRadius: WP("5%"),
    alignItems: "center",
  },
  btnText: {
    fontFamily: "REGULAR",
    fontSize: WP("5%"),
    color: "white",
  },
});
