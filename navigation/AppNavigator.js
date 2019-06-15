import { createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
// import HomeNavigator from './HomeNavigator';
import AuthStack from './AuthStack';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

export default createSwitchNavigator({
  Main: MainTabNavigator,
  // Index: HomeNavigator,
  Auth: AuthStack,
  AuthLoading: AuthLoadingScreen,

},{
  initialRouteName: "AuthLoading"
});
