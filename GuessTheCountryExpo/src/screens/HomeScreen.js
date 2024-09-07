import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Button, ScrollView} from 'react-native';

const HomeScreen = props => {
  const {navigation} = props;

  const [number, setNumber] = useState(0);

  const decreaseNumber = () => {
    setNumber(number - 10);
  };

  const increaseNumber = () => {
    setNumber(number + 10);
  };

  useEffect(() => {
    setNumber(10);
    // alert('Hello World');
  }, []);

  useEffect(() => {
    if (number === 20) {
      navigation.navigate('Win');
    }
  }, [number]);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              margin: 8,
              padding: 8,
              borderWidth: 1,
            }}>
            <TouchableOpacity onPress={() => decreaseNumber()}>
              <Text style={{fontSize: 50}}> - </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 8,
              padding: 8,
            }}>
            <Text style={{fontSize: 50}}>{number}</Text>
          </View>
          <View
            style={{
              margin: 8,
              padding: 8,
              borderWidth: 1,
            }}>
            <TouchableOpacity onPress={() => increaseNumber()}>
              <Text style={{fontSize: 50}}> + </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
          }}>
          <View
            style={{
              borderWidth: 1,
              padding: 8,
              alignItems: 'center',
              backgroundColor: 'mistyrose',
              borderRadius: 20,
            }}>
            <Text>Score : {number}</Text>
          </View>
        </View>

        {/* <Button
        title="Goto Win Screen"
        onPress={() => navigation.navigate('Win')}
      /> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
