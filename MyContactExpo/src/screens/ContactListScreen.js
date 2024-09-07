import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon} from 'react-native-elements';

import realm from '../../store';
const ContactListScreen = props => {
  const {navigation} = props;
  const [data, setData] = useState([]);

  const deleteContact = id => {
    const data = realm.objects('Contact').filtered(`id = ${id}`);
    realm.write(() => {
      realm.delete(data);
    });

    const collectData = realm.objects('Contact');
    setData(collectData);
  };
  useEffect(() => {
    const contactPage = navigation.addListener('focus', () => {
      const listContact = realm.objects('Contact');
      setData(listContact);
    });
    return contactPage;
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <View style={styles.containerParent}>
      <FlatList
        data={data}
        contentContainerStyle={{padding: 8}}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.itemListContainer}>
              <View>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textNumber}>{item.phoneNumber}</Text>
              </View>
              <TouchableOpacity>
                <Icon
                  name="cross"
                  type="entypo"
                  onPress={() => deleteContact(item.id)}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <View style={styles.containerAddBtn}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddContact')}
          style={styles.addBtn}>
          <Icon name="plus" type="antdesign" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerParent: {
    flex: 1,
  },
  containerAddBtn: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  addBtn: {
    backgroundColor: '#B7F1D4',
    padding: 16,
    borderRadius: 100,
  },

  itemListContainer: {
    margin: 8,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textNumber: {
    fontSize: 18,
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ContactListScreen;
