import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../styles/colors";
import globalStyles from "../styles/globalElements";
import globalText from "../styles/globalText";

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.green;
    }
    if (danger) {
      return colors.danger;
    }

    if (secondary) {
      return colors.secondary;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[globalStyles.btn2, { backgroundColor: getBgColor() }, style]}
    >
      <View style={[globalStyles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              ...globalText.btn2text,
              color: disabled ? "black" : colors.white,
            }}
          >
            {loading ? "Please wait..." : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
