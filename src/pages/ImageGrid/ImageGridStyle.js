import {
  Platform,
  Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export const ImageGridStyle = {
  scrollContainer: {
    backgroundColor: '#000',
  },
  imageWrapGrid: {
    margin: 0.5,
    padding: 0.5,
    height: screenWidth / 3 - 1,
    width: screenWidth / 3 - 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  closeText: {
    color: 'white',
    textAlign: 'right',
    padding: 10,
  },
  footerText: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    marginRight: 2,
    height: 100,
  },
};
