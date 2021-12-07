import React from 'react';
import {ScrollView, View, Text, Image, Switch} from 'react-native';
import {Icon} from 'react-native-elements';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Home';

import BottomNavigation from '../components/BottomNavigation';

import TIPS from '../data/Tips';
import ACTIVITIES from '../data/Activities';

import Colors from '../values/Colors';

export default function Home({navigation}) {
  const ACTIVITY_COLORS = [
    {
      bg: Colors.GREEN_LIGHT,
      color: Colors.GREEN,
    },
    {
      bg: Colors.PINK_LIGHT,
      color: Colors.PINK,
    },
  ];

  return (
    <View style={[Styles.full, Styles.bg]}>
      {/* header */}
      <View
        style={[
          Styles.flexRow,
          Styles.alignCenter,
          Styles.flexBetween,
          Styles.pd2,
        ]}>
        <Icon color={Colors.DARK} name="grid-outline" type="ionicon" />
        <View style={Styles.alignCenter}>
          <Text style={[Styles.textDark, Styles.textBold, Styles.textMd]}>
            Monday
          </Text>
          <Text style={[Styles.textGrey, Styles.textSm]}>6 Dec 2021</Text>
        </View>
        <View
          style={[
            Styles.pd1,
            Styles.bdRad1,
            {
              backgroundColor: Colors.YELLOW_LIGHT,
            },
          ]}>
          <Icon name="person-outline" type="ionicon" />
        </View>
      </View>
      {/* main content */}
      <ScrollView style={Styles.full}>
        <View style={Styles.pd2}>
          {/* progress */}
          <View
            style={[
              Styles.pd2,
              Styles.bdRad2,
              Styles.flexRow,
              Styles.flexBetween,
              Styles.alignCenter,
              {
                backgroundColor: Colors.YELLOW_LIGHT,
              },
            ]}>
            <View>
              <Text style={[Styles.textDark, Styles.textBold, Styles.textMd]}>
                Daily Program
              </Text>
              <Text style={[Styles.textDark]}>doing 5 activities</Text>
            </View>
            <View
              style={[
                ScreenStyles.progressWrapper,
                Styles.alignCenter,
                Styles.flexCenter,
              ]}>
              <View
                style={[
                  ScreenStyles.progress,
                  Styles.alignCenter,
                  Styles.flexCenter,
                ]}>
                <Text style={[Styles.textDark, Styles.textBold, Styles.textMd]}>
                  60%
                </Text>
                <Text
                  style={[
                    {
                      fontSize: 8,
                    },
                  ]}>
                  complete
                </Text>
              </View>
            </View>
          </View>
          {/* tips */}
          <ScrollView horizontal={true}>
            <View style={[Styles.mt2, Styles.flexRow]}>
              {TIPS.map((tip, index) => (
                <View
                  key={'tips-' + index}
                  style={[
                    Styles.mr2,
                    Styles.bgPrimary,
                    Styles.pd2,
                    Styles.bdRad2,
                    Styles.flexRow,
                    Styles.flexBetween,
                    Styles.alignCenter,
                    {
                      width: 350,
                    },
                  ]}>
                  <Image style={ScreenStyles.tipsImage} source={tip.image} />
                  <View
                    style={[Styles.ml2, Styles.alignStart, Styles.textWrap]}>
                    <Text style={ScreenStyles.tipsCategory}>
                      {tip.category}
                    </Text>
                    <Text
                      style={[
                        Styles.textWhite,
                        Styles.textBold,
                        Styles.textMd,
                        Styles.textWrap,
                      ]}>
                      {tip.title}
                    </Text>
                    <View
                      style={[
                        Styles.pv1,
                        Styles.ph2,
                        Styles.bg,
                        Styles.bdRad1,
                        Styles.mt1,
                      ]}>
                      <Text style={[Styles.textDark]}>Learn More</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
          {/* upcoming */}
          <View style={Styles.mt3}>
            <View
              style={[
                Styles.flexRow,
                Styles.flexBetween,
                Styles.alignCenter,
                Styles.mb2,
              ]}>
              <Text style={[Styles.textDark, Styles.textLg, Styles.textBold]}>
                Upcoming Activity
              </Text>
              <Text style={Styles.textGrey}>See all</Text>
            </View>
            {ACTIVITIES.map((activity, index) => (
              <View
                key={'activity-' + index}
                style={[
                  Styles.flexRow,
                  Styles.flexBetween,
                  Styles.alignCenter,
                  Styles.bd,
                  Styles.bdRad2,
                  Styles.pd2,
                  Styles.mb1,
                ]}>
                <View style={[Styles.flexRow]}>
                  <View
                    style={[
                      Styles.pd1,
                      Styles.bdRad2,
                      {
                        backgroundColor: ACTIVITY_COLORS[index % 2].bg,
                      },
                    ]}>
                    <Icon
                      color={ACTIVITY_COLORS[index % 2].color}
                      name={activity.icon}
                      type="ionicon"
                    />
                  </View>
                  <View style={Styles.ml2}>
                    <Text
                      style={[Styles.textDark, Styles.textBold, Styles.textMd]}>
                      {activity.title}
                    </Text>
                    <Text>{activity.time}</Text>
                  </View>
                </View>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={activity.reminder ? '#81b0ff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  value={activity.reminder}
                  onValueChange={() => !ACTIVITIES[index].reminder}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {/* bottom navigation */}
      <BottomNavigation navigation={navigation} active={0} />
    </View>
  );
}
