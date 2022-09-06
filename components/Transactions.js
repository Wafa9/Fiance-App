import React, { useState } from 'react'
import { Text, View ,StyleSheet ,Image , FlatList, TouchableOpacity} from 'react-native'
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import globalStyles from '../styles/globalElements';
import globalText from '../styles/globalText';


export default function App(props){
return(
  
      <View style={{
        backgroundColor: COLORS.white,
       alignSelf:'center'}}>
      
       {/* <FlatList 
        data={props.data}
        inverted
        disableVirtualization={false}
        keyExtractor={(item, index) => 'key'+index}
        renderItem={({item}) =>{
         return(
             <View style={{height: 100, width: 350}}>
             <View style={globalStyles.transactionContainer}>
              <Text style={globalText.h3}>{item.type}</Text>
              <Text style={globalText.h3}>{item.amount}</Text>
              </View>
          
          </View>
         )}}
       /> */}
       <FlatList 
    
    data={props.data.reverse()}
    disableVirtualization={false}
    keyExtractor={(item, index) => 'key'+index}
    snapToInterval={90}
    decelerationRate='fast'
    renderItem={({item}) =>{
     return(
         <View style={{height: 100, width: 350}}>
         <View style={globalStyles.transactionContainer}>
          <Text style={globalText.h3}>{item.type}</Text>
          <Text style={globalText.h3}>{item.amount}</Text>
        </View>
      
      </View>
     )}}
   />
       
      
  </View>
)

}

