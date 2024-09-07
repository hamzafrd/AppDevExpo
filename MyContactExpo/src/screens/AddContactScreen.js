import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import realm from '../../store';
const AddContactScreen = props => {
  const {navigation} = props;

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const saveContact = () => {
    if (name !== '' && phoneNumber !== '') {
      realm.write(() => {
        const data = realm.objects('Contact');
        const lastId = data.length === 0 ? 1 : data[data.length - 1].id;

        realm.create('Contact', {
          id: data.length === 0 ? lastId : lastId + 1,
          name: name,
          phoneNumber: phoneNumber,
        });
      });

      navigation.navigate('ContactList');
    } else {
      alert('Cant Save Your Contact');
    }
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Name</Text>
        <TextInput
          onChangeText={e => setName(e)}
          style={styles.textInput}
          placeholder="Write name here"
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          onChangeText={e => setPhoneNumber(e)}
          style={styles.textInput}
          placeholder="Write phone number here"
        />
      </View>
      <View style={{alignItems: 'center', margin: 16}}>
        <TouchableOpacity
          onPress={() => saveContact()}
          style={{backgroundColor: '#B7F1D4', padding: 16, borderRadius: 10}}>
          <Text style={{fontWeight: 'bold'}}>Save Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginBottom: 0,
  },
  text: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
  },
});
export default AddContactScreen;
