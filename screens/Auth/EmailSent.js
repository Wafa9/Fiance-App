import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import globalText from "../../styles/globalText";
import globalStyles from "../../styles/globalElements";
import { COLORS } from "../../styles/theme";

const EmailSentScreen = (props) => {
  const { navigate } = useNavigation();

  return (
    <View style={globalStyles.container2}>
      <Text style={{ ...globalText.h1B, marginTop: 70 }}>Activation Email</Text>
      <Text
        style={{
          ...globalText.h3,
          padding: 20,
          textAlign: "center",
        }}
      >
        Your account was created successfully, to activate click on the link
        sent by our team
      </Text>

      <Image
        height={100}
        width={100}
        source={require("../../assets/images/Confirm.png")}
        style={globalStyles.welcomeImage}
      />

      <TouchableOpacity
        onPress={() => {
          navigate("Welcome");
        }}
        style={globalStyles.btn2}
      >
        <Text
          style={{ fontFamily: "Normal", color: COLORS.white, fontSize: 20 }}
        >
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailSentScreen;
