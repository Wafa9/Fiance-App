import React, { useEffect, useState } from "react";
import { Text, View, FlatList, TextInput } from "react-native";
import { COLORS } from "../styles/theme.js";
import globalText from "../styles/globalText";
import globalStyles from "../styles/globalElements";
import { Linking } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axiosInstance from "../helpers/axiosInterceptor.js";
import Headerfunc from "../components/Header.js";

const DiscountScreen = () => {
  const { navigate } = useNavigation();

  const [operation, setOperation] = useState();
  useEffect(() => {
    axiosInstance
      .get("discount/codes/")
      .then((resp) => {
        return resp.data;
      })
      .then((data) => {
        setOperation(data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  return (
    <View style={{ ...globalStyles.container3, backgroundColor: "white" }}>
      <Headerfunc
        colors={COLORS.pink}
        title={"Discount Codes"}
        colors2={COLORS.gray}
      />
      <View
        style={{
          backgroundColor: COLORS.white,
          padding: "5%",
          alignSelf: "center",
        }}
      >
        <FlatList
          data={operation}
          disableVirtualization={false}
          keyExtractor={(item) => item.key}
          snapToInterval={90}
          decelerationRate="fast"
          renderItem={({ item }) => {
            return (
              <View style={globalStyles.codesContainer}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={70}
                  color={"gray"}
                  style={{ padding: 5 }}
                />
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      onPress={() => Linking.openURL(item.website)}
                      style={globalText.h3}
                    >
                      {item.website}
                    </Text>
                    <MaterialCommunityIcons
                      name="cursor-default-click-outline"
                      size={15}
                      color={COLORS.gray50}
                    />
                  </View>
                  <TextInput
                    defaultValue={item.code}
                    style={globalStyles.codeInput}
                  ></TextInput>
                  <Text style={globalText.h3}>
                    Discount code gives you a {item.precent}%
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default DiscountScreen;
