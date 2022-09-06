import React, { PureComponent, useState } from 'react'
import { Text, View ,StyleSheet ,Image , FlatList, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import CategorySlider from './CategorySlider'

const CategoryDetails =({navigation,route}) =>{
  const { item } = route.params;
  return(
      <View>
      <View style={{backgroundColor:COLORS.green}}
       <View style={{ padding: SIZES.padding}}>
             <View />
              <Text>{item.type}</Text>
              <Text>{item.amount}</Text>
            </View>
      </View>
  )

}