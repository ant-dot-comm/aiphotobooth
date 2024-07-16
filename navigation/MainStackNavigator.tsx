import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import EventSelectionScreen from '../screens/EventSelectionScreen';
import CustomizeEventScreen from '../screens/CustomizeEventScreen';
import PhotoTakingScreen from '../screens/PhotoTakingScreen';
import ShareOptionsScreen from '../screens/ShareOptionScreen';
import SuccessScreen from '../screens/SuccessScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EventSelection" component={EventSelectionScreen} />
        <Stack.Screen name="CustomizeEvent" component={CustomizeEventScreen} />
        <Stack.Screen name="PhotoTaking" component={PhotoTakingScreen} />
        <Stack.Screen name="ShareOptions" component={ShareOptionsScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
