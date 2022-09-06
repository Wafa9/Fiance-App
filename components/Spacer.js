import { View, Text } from "react-native";
import React from "react";

const Spacer = ({ vertical, horizontal }) => {
  return (
    <View
      style={{
        marginVertical: vertical ? vertical : 0,
        marginHorizontal: horizontal ? horizontal : 0,
      }}
    ></View>
  );
};

export default Spacer;
