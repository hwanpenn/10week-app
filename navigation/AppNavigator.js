import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeNavigator from './HomeNavigator';
import AuthStack from './AuthStack';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  // Index: HomeNavigator,
  Auth: AuthStack,
  AuthLoading: AuthLoadingScreen,

},{
  initialRouteName: "AuthLoading"
});
