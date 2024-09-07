import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreens';
import DetailMovieScreens from '../screens/DetailMovieScreens';
import MostViewedScreens from '../screens/MostViewedScreens';

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailMovie" component={DetailMovieScreens} />
        <Stack.Screen name="MostViewed" component={MostViewedScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
