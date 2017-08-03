import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
  Modal
} from 'react-native';
import { connect } from 'react-redux';
import { ImageGridStyle } from './ImageGridStyle';
import ImageElement from '../../components/ImageElement';
import SmartImage from '../../components/SmartImage';
import { fetchImages } from '../../actions';

class ImageGrid extends Component {
  imageCarousel: React$Element<*>;

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      refreshing: false,
    };
  }

  componentDidMount() {
    StatusBar.setBarStyle('dark-content');
    this.props.fetchImages(this.state.page, 18);
  }

  handleRefresh = () => {
    this.setState({
      page: 1,
      refreshing: true
    },
      () => {
        this.props.fetchImages(this.state.page, 18);
        this.setState({
          refreshing: false
        });
      }
    );
  };

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1
    },
      () => {
        this.props.fetchImages(this.state.page, 18);
      }
    );
  };

  renderFooter = () => {
    if (!this.props.loading) return null;

    return (
      <ActivityIndicator animating size="large" />
    );
  }

  openImageCarousel(image) {
    console.log('image=', image);
  }

  renderGridItem = ({item}) => (
    <TouchableOpacity onPress={() => {this.openImageCarousel(item)}}>
      <ImageElement
        imageKey={item.email}
        source={{uri: item.picture.large}}
        resizeMode={'stretch'}
        thumbnailresizeMode={'cover'}
        thumbnail={require("../../images/placeholder.png")}
        style={ImageGridStyle.imageWrapGrid}
      />
    </TouchableOpacity>
  );

  render() {
    return (
      <FlatList
        data={this.props.currentImages}
        renderItem={this.renderGridItem}
        numColumns={3}
        keyExtractor={item => item.email}
        ListFooterComponent={this.renderFooter}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={1}
        onRefresh={this.handleRefresh}
        refreshing={this.state.refreshing}
      />
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.imageReducer);
  return {
    apiPage: state.imageReducer.apiPage,
    loading: state.imageReducer.loading,
    currentImages: state.imageReducer.userImages,
    fetchImagesError: state.imageReducer.error
  };
};

export default connect(mapStateToProps, { fetchImages })(ImageGrid);
