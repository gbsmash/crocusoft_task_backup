import React from "react"
import { View, Text } from "react-native"
import { greetingStyle } from "../../styles/HomeStyle"

const Greeting: React.FC = () => {
    return (
        <View>
            <Text style={greetingStyle.greeting}>Welcome,</Text>
            <Text style={greetingStyle.span}>Our Fashions App</Text>
        </View>
    )
}


export default Greeting;