import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, View, StatusBar, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../CustomButton";
import Inputs from "../Inputs";
import Message from "../Messege";
import globalStyles from "../../styles/global";
import globalText from "../../styles/globalText";
import { COLORS } from "../../styles/theme";

const LoginComponent = ({
  error,
  form,
  justSignedUp,
  onChange,
  loading,
  onSubmit,
}) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  return (
    <>
      <ScrollView style={globalStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={globalStyles.subContainer}>
          <Image
            height={100}
            width={100}
            source={require("../../assets/images/logo.png")}
            style={globalStyles.logoImage}
          />
          <Text
            style={{
              ...globalText.h1,
              alignSelf: "center",
              color: COLORS.pink,
            }}
          >
            Login{" "}
          </Text>
          {justSignedUp && (
            <Message
              onDismiss={() => {}}
              success
              message="Account created successfully"
            />
          )}
          {error && !error.error && (
            <Message
              onDismiss={() => {}}
              danger
              message="invalid credentials"
            />
          )}
          {error?.error && <Message danger onDismiss message={error?.error} />}

          <Inputs
            label="Email"
            iconPosition="right"
            placeholder="Enter email"
            value={form.email || null}
            onChangeText={(value) => {
              onChange({ name: "email", value });
            }}
          />

          <Inputs
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry((prev) => !prev);
                }}
              >
                <Text>{isSecureEntry ? "Show" : "Hide"}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />

          <CustomButton
            disabled={loading}
            onPress={onSubmit}
            loading={loading}
            primary
            title="Submit"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default LoginComponent;
