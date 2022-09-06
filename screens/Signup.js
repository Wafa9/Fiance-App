import * as React from 'react';
import { View, Dimensions, Text } from 'react-native'
export default function SignUp() {
    return (
        <View style={{ height: Dimensions.get('window').height, width: "100%", padding: 80 }}>
            <Text>
                SignUp
            </Text>
        </View>
    );
}