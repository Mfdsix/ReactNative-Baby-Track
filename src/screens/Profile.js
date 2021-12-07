import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';

import Styles from '../styles/Styles';
import ScreenStyles from '../styles/Profile';
import Colors from '../values/Colors';

import BottomNavigation from '../components/BottomNavigation';

import PROFILES from '../data/Profiles.js';

export default function Profile({navigation}) {
  const BG = [Colors.GREEN_LIGHT, Colors.YELLOW_LIGHT, Colors.PURPLE_LIGHT];

  return (
    <View style={[Styles.full, Styles.bg]}>
      <ScrollView style={Styles.full}>
        <View style={Styles.pd2}>
          <Text style={[Styles.textDark, Styles.textBold, Styles.textXl]}>
            Profile Type
          </Text>
          <View style={Styles.mt2}>
            {PROFILES.map((profile, index) => (
              <View
                key={'profile-' + index}
                style={[
                  Styles.pd3,
                  Styles.mb2,
                  Styles.bdRad2,
                  Styles.flexRow,
                  Styles.flexBetween,
                  Styles.alignCenter,
                  {
                    backgroundColor: BG[index % 3],
                  },
                ]}>
                <View style={Styles.full}>
                  <Text
                    style={[Styles.textDark, Styles.textLg, Styles.textBold]}>
                    {profile.title}
                  </Text>
                  <Text style={[Styles.textGrey]}>{profile.description}</Text>
                </View>
                <View
                  style={[Styles.bg, Styles.bdRad2, Styles.pd1, Styles.ml1]}>
                  <Icon name="chevron-forward" type="ionicon" />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <BottomNavigation navigation={navigation} active={4} />
    </View>
  );
}
