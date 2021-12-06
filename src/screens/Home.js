import React from 'react';
import { ScrollView, View, Text, Image, Switch } from 'react-native';
import { Icon } from 'react-native-elements';

import Styles from "../styles/Styles";
import ScreenStyles from "../styles/Home";

import BottomNavigation from "../components/BottomNavigation";

export default function Home({navigation}){
    return <View>
        {/* header */}
        <View>
            <Icon name="" type="ionicon"/>
            <View>
                <Text>Monday</Text>
                <Text>6 Dec 2021</Text>
            </View>
            <View>
                <Icon name="" type="ionicon"/>
            </View>
        </View>
        {/* main content */}
        <ScrollView>
            <View>
                {/* progress */}
                <View>
                    <View>
                        <Text>Daily Program</Text>
                        <Text>doing 5 activities</Text>
                    </View>
                    <View>
                        <View>
                            <Text>60%</Text>
                            <Text>Complete</Text>
                        </View>
                    </View>
                </View>
                {/* tips */}
                <ScrollView
                horizontal={true}>
                    <View>
                        { TIPS.map((tip, index) => (
                            <View key={'tips-' + index}>
                                <Image />
                                <View>
                                    <Text>{ tip.category }</Text>
                                    <Text>{ tip.title }</Text>
                                    <View>
                                        <Text>Learn More</Text>
                                    </View>
                                </View>
                            </View>
                        )) }
                    </View>
                </ScrollView>
                {/* upcoming */}
                <View>
                    <View>
                        <Text>Upcoming Activity</Text>
                        <Text>See all</Text>
                    </View>
                    { ACTIVITIES.map((activity, index) => (
                        <View key={ 'activity-' + index }>
                            <View>
                                <Icon name="" type="ionicon" />
                            </View>
                            <View>
                                <Text>{ activity.name }</Text>
                                <Text>{ activity.time }</Text>
                            </View>
                            <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            value={activity.reminder}
                            />
                        </View>
                    )) }
                </View>
            </View>
        </ScrollView>
        {/* bottom navigation */}
        <BottomNavigation navigation={ navigation } active={0}/>
    </View>
}