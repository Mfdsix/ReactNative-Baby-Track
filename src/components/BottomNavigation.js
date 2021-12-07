import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import Styles from '../styles/Styles';
import Colors from '../values/Colors';

const MENUS = [
  {
    icon: 'home-outline',
    activeIcon: 'home',
    destination: 'Home',
  },
  {
    icon: 'receipt-outline',
    activeIcon: 'receipt',
  },
  {
    icon: 'add',
    type: 'center',
  },
  {
    icon: 'pulse-outline',
    activeIcon: 'pulse',
  },
  {
    icon: 'person-outline',
    activeIcon: 'person',
    destination: 'Profile',
  },
];

export default function BottomNavigation(props) {
  return (
    <View style={[Styles.pv1, Styles.pd2]}>
      <View
        style={[
          Styles.pv1,
          Styles.ph2,
          Styles.bdRad2,
          Styles.flexRow,
          Styles.flexBetween,
          Styles.alignCenter,
          {
            backgroundColor: Colors.PURPLE_LIGHT,
          },
        ]}>
        {MENUS.map((menu, index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              menu.destination
                ? props.navigation.navigate(menu.destination)
                : false
            }>
            <View key={'menu-' + index}>
              <View
                style={[
                  menu.type == 'center' ? Styles.bgPrimary : {},
                  BottomNavigationStyles.menuWrapper,
                  Styles.alignCenter,
                  Styles.flexCenter,
                ]}>
                {menu.type == 'center' && (
                  <Icon color={Colors.LIGHT} name={menu.icon} type="ionicon" />
                )}
                {(!menu.type || menu.type != 'center') && (
                  <Icon
                    color={props.active == index ? Colors.PRIMARY : Colors.DARK}
                    name={props.active == index ? menu.activeIcon : menu.icon}
                    type="ionicon"
                  />
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const BottomNavigationStyles = StyleSheet.create({
  menuWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
