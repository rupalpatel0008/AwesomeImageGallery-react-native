import React, { Component } from 'react';
import {
  Dimensions
} from 'react-native';
import PhotoView from 'react-native-photo-view';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default class ZoomImage extends Component {
  render() {
    return (
      <PhotoView
        style={styles.image}
        source={this.props.imgSource}
        minimumZoomScale={0.5}
        maximumZoomScale={10}
        androidScaleType="fitCenter"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onLoad={() => console.log("Image loaded!")}
      />
    );
  }
}

const styles = {
  image: {
    flex: 1,
    width: screenWidth,
    height: screenHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
};
