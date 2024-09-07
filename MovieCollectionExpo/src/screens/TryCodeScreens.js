import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {userData} from '../../data/TryCodeData';
const TryCodeScreens = () => {
  return (
    <View style={styles.containerFlatlist}>
      <FlatList
        contentContainerStyle={styles.contentContainerFlatlist}
        data={userData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View
              style={[
                styles.itemFlatlist,
                {
                  backgroundColor:
                    item.gender.toLowerCase() == 'male'
                      ? 'moccasin'
                      : 'lavender',
                },
              ]}>
              <Image source={{uri: item.imageLink}} style={styles.itemImage} />
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlatlist: {
    flex: 1,
  },
  contentContainerFlatlist: {
    padding: 8,
  },
  itemFlatlist: {
    margin: 8,
    // backgroundColor: 'lavender',
    borderWidth: 1,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
});
export default TryCodeScreens;
