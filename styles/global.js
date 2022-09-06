import { StyleSheet } from "react-native";
import { WP } from "../utils/resources";
import { COLORS } from "./theme";
let fontSize = 24;

const globalStyles = StyleSheet.create({
  whitecard: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    marginTop: 100,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
  avatarcontainer: {
    height: 80,
    width: 200,
    top: 10,
    alignSelf: "center",
    position: "absolute",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 10, height: 10 },
  },

  Avtrimg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "white",
  },

  h1: {
    textAlign: "left",
    fontSize,
    fontFamily: "Montserrat_100Thin",
    marginTop: 5,
  },

  h2: {
    textAlign: "center",
    fontSize,
    fontFamily: "Montserrat_400Regular",
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  // add on @kuldip
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  subContainer: {
    margin: WP("5%"),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: WP("2%"),
    paddingHorizontal: WP("5%"),
    borderRadius: WP("5%"),
    borderWidth: 1,
    borderColor: COLORS.brown,
  },
  inputBox: {
    fontFamily: "REGULAR",
    height: WP("8%"),
    width: WP("70%"),
    fontSize: WP("4%"),
    color: "black",
    marginLeft: WP("3%"),
  },
  absoluteText: {
    position: "absolute",
    bottom: WP("20%"),
    alignSelf: "center",
  },

  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 20,
  },

  welcomeImage: {
    height: "45%",
    width: "75%",
    alignSelf: 'center',
    marginBottom:10,
    marginTop:70,
   
  },

  logo2Image: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginTop:50,
   
  },

});



export default globalStyles;
