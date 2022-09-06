import * as React from "react";
import {View, Text, StyleSheet} from "react-native";
import globalText from '../styles/globalText'

   let fontSize=24;
const  UserName = ({ title }) => { 

      return (
      <View>
  
          <Text style={globalText.h2}>{title}</Text>
          
      </View>
    );
  }

  UserName.defaultProps = {
    title:'john doe'
  }


 
  export default UserName;