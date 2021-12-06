import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import Styles from "../styles/Styles";
import ScreenStyles from "../styles/Splash";

export default function Splash({navigation}){
    return <ScrollView>
        <View>
            <Image src={ require("../assets/images/splash.png") }/>
            <View>
                <Text>Track your baby activities</Text>
                <Text>This app will track your daily baby activities. Get reminder to feed or sleep your baby.</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                activeOpacity={0.7}>
                    <View>
                        <Text>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
}