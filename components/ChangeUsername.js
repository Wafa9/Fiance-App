import * as React from "react";
import {View, Text, Image, StyleSheet, Button, TextInput} from "react-native";
import { COLORS, SIZES,FONTS} from '../styles/theme.js';
import { FieldArray, Formik} from "formik";
import globalText from '../styles/globalText';
import globalStyles from "../styles/globalElements.js";

const ChangeUsername =({ navigation })=>{

    const radioopt = [{},{},{},{}]

    return(
        <View style={{flex: 1}}>

            <Formik
            initialValues={{username:''}}
            onSubmit={(values)=>{console.log(values)}}
            >
                {(props)=>(
                    <View style={globalStyles.inputCard}>
                        <View style={{...globalStyles.transactionContainer, backgroundColor: COLORS.pink,}}>

                        <Text style={{...globalText.h1, paddingTop:15,textAlign:'center',fontSize:24}}>Change The Name </Text>

                        <Text style={{...globalText.h3, paddingTop:25,textAlign:'left'}}>New Username :</Text>

                        <TextInput
                        style={globalStyles.inputstyle}
                        placeholder='New Username'
                        onChangeText={props.handleChange('type')}
                        value={props.values.username}
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


export default ChangeUsername;