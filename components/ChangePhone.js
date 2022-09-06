import * as React from "react";
import {View, Text, Image, StyleSheet, Button, TextInput} from "react-native";
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import { FieldArray, Formik} from "formik";
import globalText from '../styles/globalText';
import globalStyles from "../styles/globalElements.js";

const ChangePhone =({ navigation })=>{

    const radioopt = [{},{},{},{}]

    return(
        <View style={{flex: 1}}>

            <Formik
            initialValues={{oldNumber:'',newNumber:''}}
            onSubmit={(values)=>{console.log(values)}}
            >
                {(props)=>(
                    <View style={globalStyles.inputCard}>

                        <View style={{...globalStyles.transactionContainer, backgroundColor: COLORS.gray,}}>
                        <Text style={{...globalText.h1, paddingTop:15,textAlign:'center',fontSize:24, color:'white'}}>Change The Phone Number</Text>

                        <Text style={{...globalText.h3, paddingTop:25,textAlign:'left',color:'white'}}>Previous Phone Number :</Text>

                        <TextInput
                        style={globalStyles.inputstyle}
                        placeholder='0500000000'
                        onChangeText={props.handleChange('oldNumber')}
                        value={props.values.type}
                        keyboardType='numeric'
                        />

                        <Text style={{...globalText.h3, paddingTop:20,textAlign:'left',color:'white'}}>New Phone Number :</Text>

                        <TextInput
                        style={globalStyles.inputstyle}
                        placeholder='0500000000'
                        onChangeText={props.handleChange('newNumber')}
                        value={props.values.type}
                        keyboardType='numeric'
                        />
                        </View>
                        
                        <View style={{marginTop:50}}>
                        <Button title='Submit  >' color='gray' onPress={() => navigation.push("completed")}></Button>

                        </View>

                    </View>
                )}
            </Formik>

        </View>
    );



}



export default ChangePhone;