import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import Styles from "../styles/Styles";
import ScreenStyles from "../styles/Splash";

import Colors from "../values/Colors";

export default function Splash({navigation}){
    return <ScrollView style={[Styles.full, Styles.bgPrimary, Styles.pd2]}>
        <View style={Styles.mt4}>
            <Image style={ScreenStyles.splashImage} source={ require("../assets/images/splash.png") }/>
            <View>
                <Text style={[Styles.textWhite, Styles.textXl, Styles.textBold]}>Track your baby activities</Text>
                <Text style={[Styles.textMd, Styles.mt1, Styles.textGrey]}>This app will track your daily baby activities. Get reminder to feed or sleep your baby.</Text>
                <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                activeOpacity={0.7}>
                    <View style={[Styles.bg, Styles.mt3, Styles.pd2, Styles.bdRad1]}>
                        <Text style={[Styles.textDark, Styles.textBold, Styles.textLg, Styles.textCenter]}>Get Started</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
}