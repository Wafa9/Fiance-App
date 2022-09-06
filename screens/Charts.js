import React, { useEffect, useState } from 'react'
import { Text, View  , FlatList, TextInput,Image} from 'react-native'
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import axios from 'axios';
import Transactions from "../components/Transactions";
import globalText from '../styles/globalText';
import globalStyles from '../styles/globalElements';
import { Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import {useRoute,useNavigation} from '@react-navigation/native';


const Charts = () => {
  const {navigate} = useNavigation();


    return(
        <View style={{backgroundColor:"white", flex:1}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",height:"20%",width:"100%",marginTop:"10%",padding:"5%"}}>
        <EvilIcons size={50} color={COLORS.gray} name="arrow-left" onPress={()=>{navigate("HomeStack")}}/>
        <Text style={{textAlign:"center",color:COLORS.pink,fontFamily:"Bold",fontSize:32}}>CARDS</Text>
        <View style={{width:30}}/>
        </View>
        <View>
            <Image source={require('../assets/images/card.png')}
            style={{height: 200, width: 370, marginLeft:2, marginTop:-40}} />
            
        </View>
        {/* <View>
         <Image source={require('../assets/images/card.png')}
            style={{height: 200, width: 370, marginLeft:2, marginTop:-40}} />
      </View> */}
        </View>

      
    )
}

export default Charts;