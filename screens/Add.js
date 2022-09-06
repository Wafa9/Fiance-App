import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput } from "react-native";
import { COLORS, SIZES, FONTS } from "../styles/theme.js";
import { FieldArray, Formik } from "formik";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode";
import axiosInstance from "../helpers/axiosInterceptor.js";

function AddScreen(props){
  const [token, setToken] = useState();

  const submit = ({ type, category, amount }) => {

     //here you define the token to be set
      

  //here you get the token from AsyncStorage
  const getToken = async () => {
    try {
      const data = await AsyncStorage.getItem('token');
      if (data !== null) {
        setToken(data)
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  //here you set the token
  getToken()
  //here you decode the token
  const tokens = token;
  const decoded = jwt_decode(tokens);
  //here you get the id and it returns a number
  const id = decoded.user_id

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const date = Date.now();
    const owner = id;
    const body = JSON.stringify({ type, category, amount, date, owner });
    if (type == "" || category == "" || amount == "") {
      alert("Please Enter all details");
      return;
    }
     axiosInstance
      .post("transactions/", body, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.gray }}>
      <Formik
        initialValues={{ type: "", category: "", amount: "" }}
        onSubmit={(values) => {
          submit(values);
        }}
      >
        {(props) => (
          <View style={styles.whitecard}>
            <TextInput
              style={styles.inputstyle}
              placeholder="type"
              onChangeText={props.handleChange("type")}
              value={props.values.type}
            />

            <TextInput
              style={styles.inputstyle}
              placeholder="category"
              onChangeText={props.handleChange("category")}
              value={props.values.category}
            />
            <TextInput
              style={styles.inputstyle}
              placeholder="amount"
              onChangeText={props.handleChange("amount")}
              value={props.values.amount}
              keyboardType="numeric"
            />

            <View
              style={{
                margin: 10,
                padding: 0,
                backgroundColor: COLORS.pink,
                borderRadius: 6,
              }}
            >
              <Button
                title="Submit"
                color="white"
                onPress={props.handleSubmit}
              ></Button>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  inputstyle: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    fontSize: 20,
    borderRadius: 6,
    margin: 10,
  },
  whitecard: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    marginTop: 100,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
    paddingTop: 50,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
});

export default AddScreen;