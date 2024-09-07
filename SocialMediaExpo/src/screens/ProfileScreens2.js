import React, {useState} from 'react';
import {Image, Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button} from '../components/ButtonComponents';
import {Input} from '../components/InputComponents';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../store/actions/profileActions';
const ProfileScreen2 = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const globalData = useSelector(store => store.profileReducer);

  const onLogout = () => {
    setIsModalVisible(false);
    dispatch(loginUser(false));
  };
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/AvatarMaker.png')}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input
            title="Username"
            editable={false}
            value={globalData.username}
          />
          <Input title="Email" editable={false} value={globalData.email} />
          <Input
            title="Password"
            editable={false}
            value={globalData.password}
          />
        </View>
        <Button
          text="Logout"
          isLogout={true}
          onPress={() => setIsModalVisible(true)}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(!isModalVisible);
          }}>
          <View style={styles.backgroundView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Are you sure want to logout?</Text>
              <View style={styles.modalButton}>
                <Button text="yes" onPress={() => onLogout()} />
                <Button
                  text="no"
                  isLogout={true}
                  onPress={() => setIsModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },

  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    margin: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
  },

  inputContainer: {
    padding: 16,
    width: '100%',
  },

  backgroundView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  modalView: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
  },
  modalText: {
    marginTop: 16,
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 16,
  },
  modalButton: {
    flexDirection: 'row',
  },
});

export default ProfileScreen2;
