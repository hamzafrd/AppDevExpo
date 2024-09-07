import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import HomeScreens from '../screens/HomeScreens'
import LoginScreens from '../screens/LoginScreens'
import ProfileScreens from '../screens/ProfileScreens2'
import RegisterScreens from '../screens/RegisterScreens'
import ProfileScreen from '../screens/ProfileScreens2'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const StartScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? 'green' : 'grey',
                fontSize: 12
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Icon name="home" type="material-community" color={focused ? 'purple' : 'grey'} size={24} />
          ),
          tabBarLabelPosition: 'below-icon',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'lavender'
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreens}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? 'green' : 'grey',
                fontSize: 12
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Icon name="account" type="material-community" color={focused ? 'purple' : 'grey'} size={24} />
          ),
          tabBarLabelPosition: 'below-icon',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'lavender'
          }
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigator = () => {
  const isLogin = useSelector(store => store.profileReducer.isLogin)
  return (
    <NavigationContainer>
      {isLogin ? (
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreens}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreens}
            options={{
              headerTitleAlign: 'center',
              headerLeft: null
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  )
}
export default MainNavigator
