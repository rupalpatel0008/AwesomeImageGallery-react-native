import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { ImageListStyle } from './ImageListStyle';
import ImageElement from '../../components/ImageElement';
import { fetchImages } from '../../actions';

class ImageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  componentDidMount() {
    this.props.fetchImages(this.state.page, 10);
  }

  handleRefresh = () => {
    this.setState({
      page: 1
    },
      () => {
        this.props.fetchImages(this.state.page, 10);
      }
    );
  };

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    },
      () => {
        this.props.fetchImages(this.state.page, 10);
      }
    );
  };

  renderFooter = () => {
    if (!this.props.loading) return null;

    return (
      <ActivityIndicator animating size="large" />
    );
  }

  renderListItem = ({item}) => (
    <ImageElement
      imageKey={item.email}
      source={{uri: item.picture.large}}
      resizeMode={'contain'}
      thumbnailresizeMode={'cover'}
      thumbnail={require("../../images/placeholder.png")}
      style={ImageListStyle.imageWrapList}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.currentImages}
        renderItem={this.renderListItem}
        numColumns={1}
        keyExtractor={item => item.email}
        ListFooterComponent={this.renderFooter}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={1}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    apiPage: state.imageReducer.apiPage,
    loading: state.imageReducer.loading,
    currentImages: state.imageReducer.userImages,
    fetchImagesError: state.imageReducer.error
  };
};

export default connect(mapStateToProps, { fetchImages })(ImageList);
