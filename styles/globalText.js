import { StyleSheet } from "react-native";
import { WP } from "../utils/resources";
import { COLORS, SIZES, FONTS } from "./theme";

const globalText = StyleSheet.create({
  h1: {
    textAlign: "left",
    fontSize: SIZES.h1,
    fontFamily: "Normal",
    padding: 2,
    margin: 2,
  },

  h2: {
    fontSize: SIZES.h2,
    fontFamily: "LightItalic",
    padding: 2,
    margin: 2,
  },

  h3: {
    textAlign: "left",
    fontSize: SIZES.h4,
    fontFamily: "LightItalic",
    padding: 2,
    margin: 2,
  },

  h1B: {
    textAlign: "left",
    fontSize: SIZES.h1,
    fontFamily: "Bold",
    padding: 2,
    margin: 2,
  },

  h2B: {
    textAlign: "left",
    fontSize: SIZES.h2,
    color: COLORS.gray60,
    fontFamily: "Bold",
    padding: 2,
    margin: 2,
  },
  labelText: {
    fontSize: WP("4%"),
    fontFamily: "REGULAR",
  },

  wideButtonText: {
    color: COLORS.gray,
    fontSize: SIZES.h5,
    padding: 2,
    margin: 2,
  },

  btn2text: { fontFamily: "Normal", color: COLORS.white, fontSize: 20 },
  tinyText: {
    color: COLORS.gray50,
    alignSelf: "center",
    fontFamily: "Normal",
    fontSize: 12,
  },

  headerText: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 35,
    width: "100%",
    textAlign: "center",
  },
});

export default globalText;
