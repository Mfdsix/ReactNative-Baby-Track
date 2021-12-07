import {StyleSheet} from 'react-native';
import Colors from '../values/Colors';

export default StyleSheet.create({
  progressWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.PRIMARY,
  },
  progress: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.YELLOW_LIGHT,
  },
  tipsImage: {
    width: 80,
    height: 80,
  },
  tipsCategory: {
    backgroundColor: '#4f40a8',
    color: Colors.LIGHT,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
