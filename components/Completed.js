import * as React from "react";
import {View, Text, Image, StyleSheet, Button, TextInput, SafeAreaView} from "react-native";
import LottieView from "lottie-react-native";




export default function  Completed ({ navigation }) {
   
   return (

        <View style={styles.whitecard}>
            
            <LottieView
            source={require("../assets/lottie/completed.json")}
            style={styles.completedAnimation}
            autoPlay
            loop
            />
            

        </View>


    );

 }

 const styles = StyleSheet.create({
   

    completedAnimation:{

        width:200,
        height:200,
        alignSelf:'center',
        marginTop:70,

    },
    whitecard:{
            flex: 1,
            backgroundColor: '#fbfbfb',
            alignContent:'center',
            padding: 20, 
            paddingTop:50,
            shadowColor: '#000',
            shadowOpacity: 0.1, },
})

