import React, { useState } from "react";

import { Image, Text, View, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "./CustomButton";
import Inputs from "./Inputs";
import Message from "./Messege";
import globalStyles from "../styles/global";
import globalText from "../styles/globalText";

import { COLORS } from "../styles/theme";

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  error,
  errors,
}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <>
      <ScrollView style={globalStyles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={globalStyles.subContainer}>
          <Image
            height={100}
            width={100}
            source={require("./../assets/images/logo.png")}
            style={globalStyles.logoImage}
          />
          <Text
            style={{
              ...globalText.h1,
              alignSelf: "center",
              color: COLORS.pink,
            }}
          >
            Sign up{" "}
          </Text>

          {error?.error && (
            <Message retry danger retryFn={onSubmit} message={error?.error} />
          )}
          <Inputs
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            error={errors.username || error?.username?.[0]}
            onChangeText={(value) => {
              onChange({ name: "username", value });
            }}
          />

          <Inputs
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors.email || error?.email?.[0]}
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
            error={errors.password || error?.password?.[0]}
            onChangeText={(value) => {
              onChange({ name: "password", value });
            }}
          />

          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Submit"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterComponent;
