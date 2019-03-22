import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/SignInScreen';
import RegistScreen from '../screens/RegistScreen';
import LoginScreen from '../screens/LoginScreen';
import FindBackPassword from '../screens/FindBackPassword';
import ResetPassword from '../screens/ResetPassword';
import ResetName from '../screens/ResetName';
import IndexScreen from '../screens/IndexScreen';

const AuthStack = createStackNavigator({
    SignIn: SignInScreen ,
    Regist: RegistScreen ,
    Login: LoginScreen ,
    FindBack: FindBackPassword ,
    Reset: ResetPassword ,
    SetName: ResetName ,
    Index: IndexScreen ,
});

export default AuthStack;
