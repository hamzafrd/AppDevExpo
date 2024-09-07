import React, {useEffect} from 'react';
import {View, ImageBackground, Image, StyleSheet} from 'react-native';
const SplashScreen = props => {
  const {navigation} = props;

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Drawer');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/images/splash.png')}>
        <Image
          style={styles.image}
          source={require('../../assets/images/splash-text.png')}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '150%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
