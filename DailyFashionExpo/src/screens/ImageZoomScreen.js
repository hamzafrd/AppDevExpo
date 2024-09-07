import {View, Dimensions, Image, StyleSheet} from 'react-native';
import React from 'react';
import ImageZoom from 'react-native-image-pan-zoom';

const ImageZoomScreen = props => {
  const {route} = props;
  const imageSource = route.params.imagePath;
  return (
    <View style={styles.mainContainer}>
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={Dimensions.get('window').width}
        imageHeight={Dimensions.get('window').width}>
        <Image style={styles.image} source={{uri: imageSource}} />
      </ImageZoom>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ImageZoomScreen;
