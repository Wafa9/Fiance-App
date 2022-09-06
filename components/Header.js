import * as React from "react";
import { View, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import globalText from "../styles/globalText";
import globalStyles from "../styles/globalElements";
import { useNavigation } from "@react-navigation/native";

const Headerfunc = ({ title, colors, colors2 }) => {
  const { navigate } = useNavigation();
  return (
    <View style={globalStyles.devider}>
      <EvilIcons
        size={50}
        color={colors2}
        name="arrow-left"
        onPress={() => {
          navigate("HomeStack");
        }}
      />
      <Text
        style={{
          ...globalText.headerText,
          color: colors,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Headerfunc;
