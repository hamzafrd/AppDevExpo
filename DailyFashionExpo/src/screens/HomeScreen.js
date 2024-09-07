import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen-hooks';
import {imageSlider, categoryList} from '../../data/Data';
const HomeScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.mainContainer}>
      <SliderBox
        images={imageSlider}
        autoplay={true}
        circleLoop={true}
        sliderBoxHeight={hp('30%')}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.text}>Categories</Text>
      </View>

      <FlatList
        data={categoryList}
        key={2}
        numColumns={2}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('ShowProduct', {categoryId: item.id})
              }>
              <Image source={{uri: item.icon}} style={styles.icon} />
              <Text style={styles.itemName}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  titleContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  text: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    color: 'black',
  },

  flatListContainer: {
    padding: 8,
  },
  button: {
    flex: 1,
    margin: 8,
    borderWidth: 1,
    borderColor: '#7CAF58',
    borderRadius: 10,
    height: hp('17%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: wp('20%'),
    height: hp('12%'),
    resizeMode: 'contain',
  },
  itemName: {
    color: 'black',
  },
});

export default HomeScreen;
