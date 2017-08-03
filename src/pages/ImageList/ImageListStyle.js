import {
  Platform,
  Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const ImageListStyle = {
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  imageWrapList: {
    margin: 0.5,
    padding: 0.5,
    width: screenWidth,
    height: screenHeight / 3,
    backgroundColor: '#000'
  },
};
