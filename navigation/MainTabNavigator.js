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
  tabBarLabel: '首页',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
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
});

NewsStack.navigationOptions = {
  tabBarLabel: '新闻',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
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
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
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
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
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
