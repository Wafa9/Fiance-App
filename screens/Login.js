import * as React from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native'

export default function Login(props) {
    return (
        <View>
            <Text>
                Login
            </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('App')} style={{  padding: 30, margin: 20 }}>
                <Text>
                    DONE
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')} style={{ padding: 30, margin: 20 }}>
                <Text>
                    Sign UP
                </Text>
            </TouchableOpacity>
        </View>
    );
}