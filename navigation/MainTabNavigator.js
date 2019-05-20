import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import RankScreen from '../screens/RankScreen';
import VideoScreen from '../screens/VideoScreen';
// import LinksScreen from '../screens/LinksScreen';
// import SettingsScreen from '../screens/SettingsScreen';
import IndexScreen from '../screens/IndexScreen';

const HomeStack = createStackNavigator({
  Home: IndexScreen,
});

HomeStack.navigationOptions = {
  activeBackgroundColor: '#ffffff',
  activeTintColor: '#ffffff',
  tabBarLabel: '首页',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : ''}`
          : 'ios-home'
      }
    />
  ),
};

const NewsStack = createStackNavigator({
  News: NewsScreen,
  // News: HomeScreen,
});

NewsStack.navigationOptions = {
  tabBarLabel: '新闻',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list${focused ? '' : ''}`
          : 'ios-list'
      }
    />
  ),
};

const VideoStack = createStackNavigator({
  Video: VideoScreen,
});

VideoStack.navigationOptions = {
  tabBarLabel: '视频',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-videocam${focused ? '' : ''}` : 'ios-videocam'}
    />
  ),
};

const RankStack = createStackNavigator({
  Rank: RankScreen,
});

RankStack.navigationOptions = {
  tabBarLabel: '排行榜',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-podium${focused ? '' : ''}` : 'ios-podium'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  NewsStack,
  VideoStack,
  RankStack,
});
