import React from 'react'
import {View, Text, Image, StyleSheet, Button} from "react-native";
import { Field, FieldArray, Formik} from "formik";

function RadioButtons(props) {
    const { lable, name, options, ...rest } = props;
    return (

        <View name='radioOpt'>
            <Text>{name}</Text>
            <Field>
                {
                    ({ field }) => {
                        return options.map(option => {
                            return
                        })
                    }
                }
            </Field>

        </View>
        
    )
}

export default RadioButtons
