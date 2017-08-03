import {
  Platform,
  Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const ImageParentStyle = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttoncontainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    marginTop: (Platform.OS === 'ios') ? 30 : 0,
  },
  gridText: {
    fontSize: 20,
    textAlign: 'center',
    width: screenWidth /2,
    height: 28,
  },
  listText: {
    fontSize: 20,
    textAlign: 'center',
    width: screenWidth /2,
    height: 28,
  },
};
