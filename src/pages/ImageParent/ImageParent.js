import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import { ImageParentStyle } from './ImageParentStyle';
import ImageGrid from '../ImageGrid/ImageGrid';
import ImageList from '../ImageList/ImageList';

class ImageParent extends Component {

  renderChildView() {
    if(this.props.selectedView == 2) {
      return (
        <ImageList />
      );
    }
    return (
      <ImageGrid />
    );
  }

  renderGridTitleStyle() {
    if(this.props.selectedView == 1) {
      return [ImageParentStyle.gridText, { color: 'blue'}];
    }
    return [ImageParentStyle.gridText, { color: 'white'}];
  }

  renderListTitleStyle() {
    if(this.props.selectedView == 2) {
      return [ImageParentStyle.listText, { color: 'blue'}];
    }
    return [ImageParentStyle.listText, { color: 'white'}];
  }

  render() {
    return (
      <View style={ImageParentStyle.container}>
        <View style={ImageParentStyle.buttoncontainer}>
          <Text
            style={this.renderGridTitleStyle()}
            onPress={() => this.props.currentView(1)}
          >
            Grid
          </Text>
          <Text
            style={this.renderListTitleStyle()}
            onPress={() => this.props.currentView(2)}
          >
            List
          </Text>
        </View>
        {this.renderChildView()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { selectedView: state.selectedView }
}
export default connect(mapStateToProps, actions)(ImageParent);
