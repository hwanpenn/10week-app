// import React from 'react';
import { createStackNavigator } from 'react-navigation';
// import SignInScreen from '../screens/SignInScreen';
import RegistScreen from '../screens/RegistScreen';
import LoginScreen from '../screens/LoginScreen';
import FindBackPassword from '../screens/FindBackPassword';
import ResetPassword from '../screens/ResetPassword';
import ResetName from '../screens/ResetName';
import RecipeScreen from '../screens/RecipeScreen';
import BaseDataScreen from '../screens/BaseDataScreen';
import BaseDataVipScreen from '../screens/BaseDataVipScreen';
import TaskScreen from '../screens/TaskScreen';
import TaskShowScreen from '../screens/TaskShowScreen';
import ChartScreen from '../screens/ChartScreen';
import VipDataListScreen from '../screens/VipDataListScreen';
import PictureScreen from '../screens/PictureScreen';
import IndexScreen from '../screens/IndexScreen';
// import MainTabNavigator from './MainTabNavigator';

const AuthStack = createStackNavigator({
    
    // SignIn: SignInScreen ,
    Index: IndexScreen ,
    Regist: RegistScreen ,
    Login: LoginScreen ,
    FindBack: FindBackPassword ,
    Reset: ResetPassword ,
    SetName: ResetName ,
    Recipe: RecipeScreen ,
    BaseData: BaseDataScreen ,
    BaseDataVip: BaseDataVipScreen ,
    Task: TaskScreen ,
    TaskShow: TaskShowScreen ,
    Chart: ChartScreen ,
    VipDataList: VipDataListScreen ,
    Picture: PictureScreen ,
    // Index: IndexScreen ,
});

export default AuthStack;
