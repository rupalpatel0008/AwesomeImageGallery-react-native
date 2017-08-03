import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  Modal,
  ScrollView,
  Image
} from 'react-native';

import ImageElement from './components/ImageElement';
import ZoomImage from './components/ZoomImage';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class ImageGalleryDemo extends Component {

  state = {
    currentSubView: 'grid',
    modalVisible: false,
    modalImage: {uri: 'https://unsplash.it/200/?random'},
    images: [
      require('./images/1.png'),
      require('./images/2.png'),
      require('./images/3.png'),
      require('./images/4.png'),
      require('./images/5.png'),
      require('./images/1.png'),
      require('./images/2.png'),
      require('./images/3.png'),
      require('./images/4.png'),
      require('./images/5.png'),
      require('./images/1.png'),
      require('./images/2.png'),
      require('./images/3.png'),
      require('./images/4.png'),
      require('./images/5.png'),
    ],
  };

  setModalVisisble(visible, imageKey) {
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible });
  }

  getImage() {
    return this.state.modalImage;
  }

  openView(viewName) {
    this.setState({currentSubView: viewName});
  }

  renderImages(images) {
    console.log('In renderImages()');
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Modal
            animationType={'fade'}
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}
          >
            <View style={styles.modal}>
              <TouchableOpacity
                style={styles.closeButtonContainer}
                onPress={() => {this.setModalVisisble(false)}}
              >
                <Image
                  source={require('./images/cancel.png')}
                  style={styles.closeButton}
                />
              </TouchableOpacity>
              <ZoomImage imgSource={this.state.modalImage}>
              </ZoomImage>
            </View>
          </Modal>
          {images}
      </ScrollView>
    );
  }

  renderImageStyle() {
    if(this.state.currentSubView == 'list') {
      return styles.imageWrapList;
    } else {
      return styles.imageWrapGrid;
    }
  }

  render() {
    let images = this.state.images.map((val, key) => {
      return (
        <TouchableWithoutFeedback
          key={key}
          onPress={() => {this.setModalVisisble(true, key)}}
        >
          <View style={this.renderImageStyle()}>
            <ImageElement imgSource={val}></ImageElement>
          </View>
        </TouchableWithoutFeedback>
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.buttoncontainer}>
          <Text style={styles.gridText} onPress={() => {this.openView('grid')}}>Grid</Text>
          <Text style={styles.listText} onPress={() => {this.openView('list')}}>List</Text>
        </View>
        <View style={styles.imagesContainer}>
          {this.renderImages(images)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttoncontainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    marginTop: (Platform.OS === 'ios') ? 30 : 0,
  },
  imagesContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  gridText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'blue',
    width: screenWidth /2,
    height: 28,
  },
  listText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'red',
    width: screenWidth /2,
    height: 28,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#000',
  },
  imageWrapGrid: {
    margin: 0.5,
    padding: 0.5,
    height: screenWidth / 3 - 1,
    width: screenWidth / 3 - 1,
    backgroundColor: '#000'
  },
  imageWrapList: {
    margin: 0.5,
    padding: 0.5,
    width: screenWidth,
    height: screenHeight / 3,
    backgroundColor: '#000'
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    padding: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  },
  closeButtonContainer: {
    alignItems: 'flex-end',
  },
  closeButton: {
    height: 30,
    width: 30,
  }
});
