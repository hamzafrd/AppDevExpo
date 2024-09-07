import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
const WinScreen = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{uri: 'https://wallpaperaccess.com/full/154959.jpg'}}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        imageStyle={{opacity: 0.5}}>
        <Image
          source={require('../../assets/images/congratulations.png')}
          style={{width: '100%', height: 200}}
        />
        <View
          style={{
            borderWidth: 1,
            backgroundColor: 'lime',
            padding: 8,
            borderRadius: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 24,
                fontWeight: 'bold',
              }}>
              Play Again
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default WinScreen;
