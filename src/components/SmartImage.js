import React, { Component } from 'react';
import PhotoView from 'react-native-photo-view';

export default class SmartImage extends Component {
  render() {
    return (
      <PhotoView
        source={this.props.source}
        minimumZoomScale={0.5}
        maximumZoomScale={3}
        androidScaleType="center"
        onLoad={() => console.log("Image loaded!")}
        style={SmartImageStyle.image}
      />
    );
  }
}

const SmartImageStyle = {
  image: {
    width: 300,
    height: 300
  },
};
