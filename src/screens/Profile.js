import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import Styles from "../styles/Styles";
import ScreenStyles from "../styles/Profile";

import BottomNavigation from "../components/BottomNavigation";

import PROFILES from "../data/Profiles.js";

export default function Profile({navigation}){
    return <View>
        <ScrollView>
            <View>
                <Text>Profile Type</Text>
                <View>
                    { PROFILES.map((profile, index) => (
                        <View key={ 'profile-' + index }>
                            <View>
                                <Text>{ profile.title }</Text>
                                <Text>{ profile.description }</Text>
                            </View>
                            <View>
                                <Icon name="" type="ionicon"/>
                            </View>
                        </View>
                    )) }
                </View>
            </View>
        </ScrollView>
        <BottomNavigation navigation={ navigation } index={4}/>
    </View>
}