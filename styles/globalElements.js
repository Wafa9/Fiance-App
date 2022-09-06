import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "./theme";
import { WP } from "../utils/resources";
import colors from "./colors";

const globalStyles = StyleSheet.create({
  whitecard: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    marginTop: 150,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  avatarcontainer: {
    height: 80,
    width: 80,
    top: 10,
    alignSelf: "center",
    position: "absolute",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 10, height: 10 },
  },
  whitecard2: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: "8%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },

  profileWhitecard: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    marginTop: 50,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  avatarcontainer: {
    height: 80,
    width: 80,
    top: 10,
    alignSelf: "center",
    position: "absolute",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 10, height: 10 },
  },

  Avtrimg: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginTop: 60,

    backgroundColor: "white",
  },

  plusbutton: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.green10,
    borderRadius: 60 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },
  wideButton: {
    marginTop: 15,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },

  transactionContainer: {
    padding: 20,
    marginTop: 3,
    backgroundColor: COLORS.gray10,
    borderRadius: SIZES.radius,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 5,
      height: 5,
    },
  },

  codesContainer: {
    padding: "1%",
    marginTop: "5%",

    backgroundColor: COLORS.green10,
    borderRadius: SIZES.radius,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      height: 5,
    },
  },

  homeHeader: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 10,
    paddingHorizontal: SIZES.padding,
    alignItems: "center",
  },

  categoryContainer: {
    height: 150,
    width: SIZES.width - 20,
    borderRadius: 140,
    alignSelf: "center",
  },

  categoryPage: {
    height: 60,
    width: 60,
    borderRadius: SIZES.radius,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 5, height: 5 },
  },

  inputstyle: {
    borderWidth: 0.2,
    backgroundColor: "white",
    borderColor: "gray",
    padding: 8,
    fontSize: 15,
    borderRadius: 6,
    marginTop: 5,
    marginRight: 2,
    marginLeft: 2,
  },
  inputCard: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    padding: 20,
    paddingTop: 100,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },

  absoluteText: {
    position: "absolute",
    bottom: WP("20%"),
    alignSelf: "center",
  },

  wrapper: {
    height: 42,

    paddingHorizontal: 5,

    paddingVertical: 13,

    marginVertical: 5,
    borderRadius: 4,
  },

  container: {
    backgroundColor: "white",
    padding: 50,
    flex: 1,
  },

  btn: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  container2: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },

  btn2: {
    margin: 10,
    backgroundColor: COLORS.pink,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    height: 40,
    width: 350,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: {
      height: 5,
    },
  },
  logo2Image: {
    height: 60,
    width: 60,
    alignSelf: "center",
    marginTop: 50,
  },

  welcomeImage: {
    height: "35%",
    width: "75%",
    alignSelf: "center",
    marginBottom: 70,
    marginTop: 70,
  },
  breaker: {
    backgroundColor: "gray",
    height: "0.2%",
    width: "100%",
    margin: "2%",
  },
  container3: {
    flex: 1,
    height: "50%",
    width: "100%",
  },
  devider: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "10%",
    width: "100%",
    marginTop: "10%",
    padding: "5%",
  },
  welcomeBackCard: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "15%",
    width: "90%",
    marginTop: "8%",
    marginLeft: "5%",
  },
  codeInput: {
    backgroundColor: COLORS.white,
    padding: 5,
    width: "100%",
    borderRadius: 10,
  },
  loaderSection: {
    flexDirection: "row",
  },
});

export default globalStyles;